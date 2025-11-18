import { useEffect } from 'react'

export default function CourseSlider() {
  useEffect(() => {
    // Initialize Tiny Slider when component mounts
    if (window.tns) {
      const slider = window.tns({
        container: '.sliderFirst',
        items: 1,
        slideBy: 'page',
        autoplay: false,
        controls: true,
        controlsContainer: '#sliderFirstControls',
        nav: false,
        responsive: {
          768: {
            items: 2,
            gutter: 20
          },
          992: {
            items: 3,
            gutter: 20
          },
          1200: {
            items: 4,
            gutter: 20
          }
        }
      });

      // Cleanup on unmount
      return () => {
        if (slider && slider.destroy) {
          slider.destroy();
        }
      };
    }
  }, []);

  return (
    <>
    <section className="py-lg-8 py-5 my-5">
      <div className="container">
        <div className="row mb-4">
          <div className="col-12">
            <h2 className="mb-2">Most Popular Courses</h2>
            <p className="mb-0">Explore our most popular courses and start learning today</p>
          </div>
        </div>
        <div className="position-relative">
            <ul className="controls" id="sliderFirstControls">
                <li className="prev">
                    <i className="fe fe-chevron-left"></i>
                </li>
                <li className="next">
                    <i className="fe fe-chevron-right"></i>
                </li>
            </ul>

        <div className="sliderFirst">
    <div className="item">
        <div className="card mb-4 card-hover">
            <a href="pages/course-single.html"><img src="https://geeksui.codescandy.com/geeks/assets/images/course/course-graphql.jpg" alt="course" className="card-img-top" /></a>
            <div className="card-body">
                <h4 className="mb-2 text-truncate-line-2">
                    <a href="pages/course-single.html" className="text-inherit">How to easily create a website with React</a>
                </h4>
                <ul className="mb-3 list-inline">
                    <li className="list-inline-item">
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                fill="currentColor"
                                className="bi bi-clock align-baseline"
                                viewBox="0 0 16 16">
                                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                            </svg>
                        </span>
                        <span>3h 56m</span>
                    </li>
                    <li className="list-inline-item">
                        <svg className="me-1 mt-n1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"/>
                            <rect x="7" y="5" width="2" height="9" rx="1" fill="#DBD8E9"/>
                            <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9"/>
                        </svg>
                        Beginner
                    </li>
                </ul>
                <div className="lh-1">
                    <span className="align-text-top">
                        <span className="fs-6">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                fill="currentColor"
                                className="bi bi-star-fill text-warning"
                                viewBox="0 0 16 16">
                                <path
                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                fill="currentColor"
                                className="bi bi-star-fill text-warning"
                                viewBox="0 0 16 16">
                                <path
                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                fill="currentColor"
                                className="bi bi-star-fill text-warning"
                                viewBox="0 0 16 16">
                                <path
                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                fill="currentColor"
                                className="bi bi-star-fill text-warning"
                                viewBox="0 0 16 16">
                                <path
                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                fill="currentColor"
                                className="bi bi-star-fill text-warning"
                                viewBox="0 0 16 16">
                                <path
                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </span>
                    </span>
                    <span className="text-warning">4.5</span>
                    <span className="fs-6">(7,700)</span>
                </div>
            </div>
            <div className="card-footer">
                <div className="row align-items-center g-0">
                    <div className="col-auto">
                        <img src="https://geeksui.codescandy.com/geeks/assets/images/avatar/avatar-3.jpg" className="rounded-circle avatar-xs" alt="avatar" width={30}/>
                    </div>
                    <div className="col ms-2">
                        <span>Morris Mccoy</span>
                    </div>
                    <div className="col-auto">
                        <a href="#" className="text-reset bookmark">
                            <i className="fe fe-bookmark fs-4"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="item">
        <div className="card mb-4 card-hover">
            <a href="pages/course-single.html"><img src="https://geeksui.codescandy.com/geeks/assets/images/course/course-python.jpg" alt="course" className="card-img-top"/></a>
            <div className="card-body">
                <h4 className="mb-2 text-truncate-line-2">
                    <a href="pages/course-single.html" className="text-inherit">GraphQL: introduction to graphQL for beginners</a>
                </h4>
                <ul className="mb-3 list-inline">
                    <li className="list-inline-item">
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                fill="currentColor"
                                className="bi bi-clock align-baseline"
                                viewBox="0 0 16 16">
                                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                            </svg>
                        </span>
                        <span>2h 46m</span>
                    </li>
                    <li className="list-inline-item">
                        <svg className="me-1 mt-n1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"/>
                            <rect x="7" y="5" width="2" height="9" rx="1" fill="#754FFE"/>
                            <rect x="11" y="2" width="2" height="12" rx="1" fill="#754FFE"/>
                        </svg>
                        Advance
                    </li>
                </ul>
                <div className="lh-1">
                    <span className="align-text-top">
                        <span className="fs-6">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                fill="currentColor"
                                className="bi bi-star-fill text-warning"
                                viewBox="0 0 16 16">
                                <path
                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                fill="currentColor"
                                className="bi bi-star-fill text-warning"
                                viewBox="0 0 16 16">
                                <path
                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                fill="currentColor"
                                className="bi bi-star-fill text-warning"
                                viewBox="0 0 16 16">
                                <path
                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                fill="currentColor"
                                className="bi bi-star-fill text-warning"
                                viewBox="0 0 16 16">
                                <path
                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                fill="currentColor"
                                className="bi bi-star-fill text-warning"
                                viewBox="0 0 16 16">
                                <path
                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </span>
                    </span>
                    <span className="text-warning">4.5</span>
                    <span className="fs-6">(9,300)</span>
                </div>
            </div>
            <div className="card-footer">
                <div className="row align-items-center g-0">
                    <div className="col-auto">
                        <img src="https://geeksui.codescandy.com/geeks/assets/images/avatar/avatar-4.jpg" className="rounded-circle avatar-xs" alt="avatar" width={30}/>
                    </div>
                    <div className="col ms-2">
                        <span>Ted Hawkins</span>
                    </div>
                    <div className="col-auto">
                        <a href="#" className="text-reset bookmark">
                            <i className="fe fe-bookmark fs-4"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="item">
        <div className="card mb-4 card-hover">
            <a href="pages/course-single.html"><img src="https://geeksui.codescandy.com/geeks/assets/images/course/course-angular.jpg" alt="course" className="card-img-top" /></a>
            <div className="card-body">
                <h4 className="mb-2 text-truncate-line-2">
                    <a href="pages/course-single.html" className="text-inherit">Angular - the complete guide for beginner</a>
                </h4>
                <ul className="mb-3 list-inline">
                    <li className="list-inline-item">
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                fill="currentColor"
                                className="bi bi-clock align-baseline"
                                viewBox="0 0 16 16">
                                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                            </svg>
                        </span>
                        <span>1h 30m</span>
                    </li>
                    <li className="list-inline-item">
                        <svg className="me-1 mt-n1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"/>
                            <rect x="7" y="5" width="2" height="9" rx="1" fill="#DBD8E9"/>
                            <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9"/>
                        </svg>
                        Beginner
                    </li>
                </ul>
                <div className="lh-1">
                    <span className="align-text-top">
                        <span className="fs-6">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                fill="currentColor"
                                className="bi bi-star-fill text-warning"
                                viewBox="0 0 16 16">
                                <path
                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                fill="currentColor"
                                className="bi bi-star-fill text-warning"
                                viewBox="0 0 16 16">
                                <path
                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                fill="currentColor"
                                className="bi bi-star-fill text-warning"
                                viewBox="0 0 16 16">
                                <path
                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                fill="currentColor"
                                className="bi bi-star-fill text-warning"
                                viewBox="0 0 16 16">
                                <path
                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                fill="currentColor"
                                className="bi bi-star-fill text-warning"
                                viewBox="0 0 16 16">
                                <path
                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </span>
                    </span>
                    <span className="text-warning">4.5</span>
                    <span className="fs-6">(8,890)</span>
                </div>
            </div>
            <div className="card-footer">
                <div className="row align-items-center g-0">
                    <div className="col-auto">
                        <img src="https://geeksui.codescandy.com/geeks/assets/images/avatar/avatar-3.jpg" className="rounded-circle avatar-xs" alt="avatar" width={30}/>
                    </div>
                    <div className="col ms-2">
                        <span>Juanita Bell</span>
                    </div>
                    <div className="col-auto">
                        <a href="#" className="text-reset bookmark">
                            <i className="fe fe-bookmark fs-4"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="item">
        <div className="card mb-4 card-hover">
            <a href="pages/course-single.html"><img src="https://geeksui.codescandy.com/geeks/assets/images/course/course-angular.jpg" alt="course" className="card-img-top" /></a>
            <div className="card-body">
                <h4 className="mb-2 text-truncate-line-2">
                    <a href="pages/course-single.html" className="text-inherit">The Python Course: build web application</a>
                </h4>
                <ul className="mb-3 list-inline">
                    <li className="list-inline-item">
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                fill="currentColor"
                                className="bi bi-clock align-baseline"
                                viewBox="0 0 16 16">
                                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                            </svg>
                        </span>
                        <span>2h 30m</span>
                    </li>
                    <li className="list-inline-item">
                        <svg className="me-1 mt-n1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"/>
                            <rect x="7" y="5" width="2" height="9" rx="1" fill="#754FFE"/>
                            <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9"/>
                        </svg>
                        Intermediate
                    </li>
                </ul>
                <div className="lh-1">
                    <span className="align-text-top">
                        <span className="fs-6">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                fill="currentColor"
                                className="bi bi-star-fill text-warning"
                                viewBox="0 0 16 16">
                                <path
                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                fill="currentColor"
                                className="bi bi-star-fill text-warning"
                                viewBox="0 0 16 16">
                                <path
                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                fill="currentColor"
                                className="bi bi-star-fill text-warning"
                                viewBox="0 0 16 16">
                                <path
                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                fill="currentColor"
                                className="bi bi-star-fill text-warning"
                                viewBox="0 0 16 16">
                                <path
                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                fill="currentColor"
                                className="bi bi-star-fill text-warning"
                                viewBox="0 0 16 16">
                                <path
                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </span>
                    </span>
                    <span className="text-warning">4.5</span>
                    <span className="fs-6">(13,245)</span>
                </div>
            </div>
            <div className="card-footer">
                <div className="row align-items-center g-0">
                    <div className="col-auto">
                        <img src="https://geeksui.codescandy.com/geeks/assets/images/avatar/avatar-2.jpg" className="rounded-circle avatar-xs" alt="avatar" width={30}/>
                    </div>
                    <div className="col ms-2">
                        <span>Claire Robertson</span>
                    </div>
                    <div className="col-auto">
                        <a href="#" className="text-reset bookmark">
                            <i className="fe fe-bookmark fs-4"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="item">
        <div className="card mb-4 card-hover">
            <a href="pages/course-single.html"><img src="https://geeksui.codescandy.com/geeks/assets/images/course/course-angular.jpg" alt="course" className="card-img-top" /></a>
            <div className="card-body">
                <h4 className="mb-2 text-truncate-line-2">
                    <a href="pages/course-single.html" className="text-inherit">GraphQL: introduction to graphQL for beginners</a>
                </h4>
                <ul className="mb-3 list-inline">
                    <li className="list-inline-item">
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                fill="currentColor"
                                className="bi bi-clock align-baseline"
                                viewBox="0 0 16 16">
                                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                            </svg>
                        </span>
                        <span>2h 46m</span>
                    </li>
                    <li className="list-inline-item">
                        <svg className="me-1 mt-n1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"/>
                            <rect x="7" y="5" width="2" height="9" rx="1" fill="#754FFE"/>
                            <rect x="11" y="2" width="2" height="12" rx="1" fill="#754FFE"/>
                        </svg>
                        Advance
                    </li>
                </ul>
                <div className="lh-1">
                    <span className="align-text-top">
                        <span className="fs-6">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                fill="currentColor"
                                className="bi bi-star-fill text-warning"
                                viewBox="0 0 16 16">
                                <path
                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                fill="currentColor"
                                className="bi bi-star-fill text-warning"
                                viewBox="0 0 16 16">
                                <path
                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                fill="currentColor"
                                className="bi bi-star-fill text-warning"
                                viewBox="0 0 16 16">
                                <path
                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                fill="currentColor"
                                className="bi bi-star-fill text-warning"
                                viewBox="0 0 16 16">
                                <path
                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                fill="currentColor"
                                className="bi bi-star-fill text-warning"
                                viewBox="0 0 16 16">
                                <path
                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </span>
                    </span>
                    <span className="text-warning">4.5</span>
                    <span className="fs-6">(9,300)</span>
                </div>
            </div>
            <div className="card-footer">
                <div className="row align-items-center g-0">
                    <div className="col-auto">
                        <img src="https://geeksui.codescandy.com/geeks/assets/images/avatar/avatar-4.jpg" className="rounded-circle avatar-xs" alt="avatar" />
                    </div>
                    <div className="col ms-2">
                        <span>Ted Hawkins</span>
                    </div>
                    <div className="col-auto">
                        <a href="#" className="text-reset bookmark">
                            <i className="fe fe-bookmark fs-4"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="item">
        <div className="card mb-4 card-hover">
            <a href="pages/course-single.html"><img src="https://geeksui.codescandy.com/geeks/assets/images/course/course-angular.jpg" alt="course" className="card-img-top" /></a>
            <div className="card-body">
                <h4 className="mb-2 text-truncate-line-2">
                    <a href="pages/course-single.html" className="text-inherit">Angular - the complete guide for beginner</a>
                </h4>
                <ul className="mb-3 list-inline">
                    <li className="list-inline-item">
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                fill="currentColor"
                                className="bi bi-clock align-baseline"
                                viewBox="0 0 16 16">
                                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                            </svg>
                        </span>
                        <span>1h 30m</span>
                    </li>
                    <li className="list-inline-item">
                        <svg className="me-1 mt-n1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"/>
                            <rect x="7" y="5" width="2" height="9" rx="1" fill="#DBD8E9"/>
                            <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9"/>
                        </svg>
                        Beginner
                    </li>
                </ul>
                <div className="lh-1">
                    <span className="align-text-top">
                        <span className="fs-6">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                fill="currentColor"
                                className="bi bi-star-fill text-warning"
                                viewBox="0 0 16 16">
                                <path
                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                fill="currentColor"
                                className="bi bi-star-fill text-warning"
                                viewBox="0 0 16 16">
                                <path
                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                fill="currentColor"
                                className="bi bi-star-fill text-warning"
                                viewBox="0 0 16 16">
                                <path
                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                fill="currentColor"
                                className="bi bi-star-fill text-warning"
                                viewBox="0 0 16 16">
                                <path
                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                fill="currentColor"
                                className="bi bi-star-fill text-warning"
                                viewBox="0 0 16 16">
                                <path
                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </span>
                    </span>
                    <span className="text-warning">4.5</span>
                    <span className="fs-6">(8,890)</span>
                </div>
            </div>
            <div className="card-footer">
                <div className="row align-items-center g-0">
                    <div className="col-auto">
                        <img src="../assets/images/avatar/avatar-3.jpg" className="rounded-circle avatar-xs" alt="avatar" />
                    </div>
                    <div className="col ms-2">
                        <span>Juanita Bell</span>
                    </div>
                    <div className="col-auto">
                        <a href="#" className="text-reset bookmark">
                            <i className="fe fe-bookmark fs-4"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="item">
        <div className="card mb-4 card-hover">
            <a href="pages/course-single.html"><img src="https://geeksui.codescandy.com/geeks/assets/images/course/course-angular.jpg" alt="course" className="card-img-top" /></a>

            <div className="card-body">
                <h4 className="mb-2 text-truncate-line-2">
                    <a href="pages/course-single.html" className="text-inherit">The Python Course: build web application</a>
                </h4>
                <ul className="mb-3 list-inline">
                    <li className="list-inline-item">
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                fill="currentColor"
                                className="bi bi-clock align-baseline"
                                viewBox="0 0 16 16">
                                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                            </svg>
                        </span>
                        <span>2h 30m</span>
                    </li>
                    <li className="list-inline-item">
                        <svg className="me-1 mt-n1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="8" width="2" height="6" rx="1" fill="#754FFE"/>
                            <rect x="7" y="5" width="2" height="9" rx="1" fill="#754FFE"/>
                            <rect x="11" y="2" width="2" height="12" rx="1" fill="#DBD8E9"/>
                        </svg>
                        Intermediate
                    </li>
                </ul>
                <div className="lh-1">
                    <span className="align-text-top">
                        <span className="fs-6">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                fill="currentColor"
                                className="bi bi-star-fill text-warning"
                                viewBox="0 0 16 16">
                                <path
                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                fill="currentColor"
                                className="bi bi-star-fill text-warning"
                                viewBox="0 0 16 16">
                                <path
                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                fill="currentColor"
                                className="bi bi-star-fill text-warning"
                                viewBox="0 0 16 16">
                                <path
                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                fill="currentColor"
                                className="bi bi-star-fill text-warning"
                                viewBox="0 0 16 16">
                                <path
                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                fill="currentColor"
                                className="bi bi-star-fill text-warning"
                                viewBox="0 0 16 16">
                                <path
                                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                            </svg>
                        </span>
                    </span>
                    <span className="text-warning">4.5</span>
                    <span className="fs-6">(13,245)</span>
                </div>
            </div>
            <div className="card-footer">
                <div className="row align-items-center g-0">
                    <div className="col-auto">
                        <img src="https://geeksui.codescandy.com/geeks/assets/images/avatar/avatar-2.jpg" className="rounded-circle avatar-xs" alt="avatar" width={30}/>
                    </div>
                    <div className="col ms-2">
                        <span>Claire Robertson</span>
                    </div>
                    <div className="col-auto">
                        <a href="#" className="text-reset bookmark">
                            <i className="fe fe-bookmark fs-4"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
      </div>
    </section>
    </>
  )
}
