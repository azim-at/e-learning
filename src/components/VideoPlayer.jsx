import { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

export default function VideoPlayer({
  material,
  materialIndex,
  onProgressUpdate,
  initialProgress = 0
}) {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showControls, setShowControls] = useState(true)
  const [playbackRate, setPlaybackRate] = useState(1)
  const progressIntervalRef = useRef(null)
  const playerContainerRef = useRef(null)

  // Check if material is a YouTube video
  const isYouTube = material.url && (
    material.url.includes('youtube.com') ||
    material.url.includes('youtu.be')
  )

  // Extract YouTube video ID
  const getYouTubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return (match && match[2].length === 11) ? match[2] : null
  }

  const youtubeId = isYouTube ? getYouTubeId(material.url) : null

  useEffect(() => {
    if (videoRef.current && !isYouTube) {
      const video = videoRef.current

      const handleLoadedMetadata = () => {
        setDuration(video.duration)
        if (initialProgress > 0) {
          video.currentTime = initialProgress
        }
      }

      const handleTimeUpdate = () => {
        setCurrentTime(video.currentTime)
      }

      const handleEnded = () => {
        setIsPlaying(false)
        if (onProgressUpdate) {
          onProgressUpdate({
            materialIndex,
            watchedDuration: video.duration,
            totalDuration: video.duration,
            completed: true
          })
        }
      }

      video.addEventListener('loadedmetadata', handleLoadedMetadata)
      video.addEventListener('timeupdate', handleTimeUpdate)
      video.addEventListener('ended', handleEnded)

      return () => {
        video.removeEventListener('loadedmetadata', handleLoadedMetadata)
        video.removeEventListener('timeupdate', handleTimeUpdate)
        video.removeEventListener('ended', handleEnded)
      }
    }
  }, [material.url, isYouTube, initialProgress, materialIndex, onProgressUpdate])

  // Auto-save progress every 10 seconds
  useEffect(() => {
    if (isPlaying && !isYouTube && onProgressUpdate) {
      progressIntervalRef.current = setInterval(() => {
        const video = videoRef.current
        if (video) {
          onProgressUpdate({
            materialIndex,
            watchedDuration: video.currentTime,
            totalDuration: video.duration,
            completed: video.currentTime >= video.duration * 0.9
          })
        }
      }, 10000) // Save every 10 seconds

      return () => {
        if (progressIntervalRef.current) {
          clearInterval(progressIntervalRef.current)
        }
      }
    }
  }, [isPlaying, isYouTube, materialIndex, onProgressUpdate])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleSeek = (e) => {
    const video = videoRef.current
    if (video) {
      const percent = e.target.value / 100
      video.currentTime = percent * duration
      setCurrentTime(video.currentTime)
    }
  }

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value / 100
    if (videoRef.current) {
      videoRef.current.volume = newVolume
      setVolume(newVolume)
      setIsMuted(newVolume === 0)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const toggleFullscreen = () => {
    const container = playerContainerRef.current
    if (!isFullscreen) {
      if (container.requestFullscreen) {
        container.requestFullscreen()
      } else if (container.webkitRequestFullscreen) {
        container.webkitRequestFullscreen()
      } else if (container.msRequestFullscreen) {
        container.msRequestFullscreen()
      }
      setIsFullscreen(true)
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      }
      setIsFullscreen(false)
    }
  }

  const changePlaybackRate = () => {
    const rates = [0.5, 0.75, 1, 1.25, 1.5, 2]
    const currentIndex = rates.indexOf(playbackRate)
    const nextIndex = (currentIndex + 1) % rates.length
    const newRate = rates[nextIndex]

    if (videoRef.current) {
      videoRef.current.playbackRate = newRate
      setPlaybackRate(newRate)
    }
  }

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return '0:00'
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0

  if (isYouTube && youtubeId) {
    return (
      <div className="video-player" ref={playerContainerRef}>
        <div className="ratio ratio-16x9">
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=0&controls=1&modestbranding=1&rel=0`}
            title={material.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ border: 'none', borderRadius: '12px' }}
          ></iframe>
        </div>
        <style>{`
          .video-player {
            width: 100%;
            background: #000;
            border-radius: 12px;
            overflow: hidden;
          }
        `}</style>
      </div>
    )
  }

  return (
    <div
      className="video-player"
      ref={playerContainerRef}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(isPlaying ? false : true)}
    >
      <video
        ref={videoRef}
        src={material.url}
        className="video-element"
        onClick={togglePlay}
      />

      <div className={`video-controls ${showControls ? 'show' : ''}`}>
        {/* Progress Bar */}
        <div className="progress-container">
          <input
            type="range"
            min="0"
            max="100"
            value={progressPercent}
            onChange={handleSeek}
            className="progress-bar"
          />
          <div
            className="progress-filled"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Controls */}
        <div className="controls-row">
          <div className="controls-left">
            {/* Play/Pause Button */}
            <button onClick={togglePlay} className="control-btn">
              {isPlaying ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              )}
            </button>

            {/* Volume */}
            <div className="volume-control">
              <button onClick={toggleMute} className="control-btn">
                {isMuted || volume === 0 ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
                  </svg>
                )}
              </button>
              <input
                type="range"
                min="0"
                max="100"
                value={isMuted ? 0 : volume * 100}
                onChange={handleVolumeChange}
                className="volume-slider"
              />
            </div>

            {/* Time */}
            <div className="time-display">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          </div>

          <div className="controls-right">
            {/* Playback Speed */}
            <button onClick={changePlaybackRate} className="control-btn speed-btn">
              {playbackRate}x
            </button>

            {/* Fullscreen */}
            <button onClick={toggleFullscreen} className="control-btn">
              {isFullscreen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .video-player {
          position: relative;
          width: 100%;
          background: #000;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.3);
        }

        .video-element {
          width: 100%;
          display: block;
          cursor: pointer;
        }

        .video-controls {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
          padding: 40px 20px 15px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .video-controls.show {
          opacity: 1;
        }

        .progress-container {
          position: relative;
          width: 100%;
          height: 6px;
          background: rgba(255,255,255,0.3);
          border-radius: 3px;
          margin-bottom: 15px;
          cursor: pointer;
        }

        .progress-bar {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0;
          cursor: pointer;
        }

        .progress-filled {
          height: 100%;
          background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
          border-radius: 3px;
          transition: width 0.1s ease;
          pointer-events: none;
        }

        .controls-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .controls-left,
        .controls-right {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .control-btn {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          padding: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease;
        }

        .control-btn:hover {
          transform: scale(1.1);
        }

        .speed-btn {
          font-size: 14px;
          font-weight: 600;
          min-width: 40px;
        }

        .volume-control {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .volume-slider {
          width: 80px;
          height: 4px;
          background: rgba(255,255,255,0.3);
          border-radius: 2px;
          outline: none;
          -webkit-appearance: none;
        }

        .volume-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 12px;
          height: 12px;
          background: white;
          border-radius: 50%;
          cursor: pointer;
        }

        .volume-slider::-moz-range-thumb {
          width: 12px;
          height: 12px;
          background: white;
          border-radius: 50%;
          cursor: pointer;
          border: none;
        }

        .time-display {
          color: white;
          font-size: 14px;
          font-weight: 500;
          margin-left: 5px;
        }

        @media (max-width: 768px) {
          .volume-control {
            display: none;
          }

          .time-display {
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  )
}

VideoPlayer.propTypes = {
  material: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    type: PropTypes.string
  }).isRequired,
  materialIndex: PropTypes.number.isRequired,
  onProgressUpdate: PropTypes.func,
  initialProgress: PropTypes.number
}
