import React from 'react'
import CourseSlider from '../components/CourseSlider'
import { Feature } from '../components/Feature'

export default function Dashboard() {
  return (
   <>
      <section className="py-xl-8 py-6 my-5">
      <div className="container py-xl-6">
        <div className="row align-items-center gy-6 gy-xl-0">
          <div className="col-lg-5 col-xxl-5 col-12">
            <div className="d-flex flex-column gap-5">
              <div className="d-flex flex-row gap-2 align-items-center">
                <span>🚀</span>
                <span className="text-primary fw-semibold">
                  <span>Empower Your Learning Journey Today</span>
                </span>
              </div>
              <div className="d-flex flex-column gap-3">
                <div className="d-flex flex-column gap-2">
                  <h1 className="mb-0 display-2 fw-bolder">The #1 Courses Learning Platform</h1>
                  <p className="mb-0">Hands-on training, and certifications to help you get the most from Geeks Learning.</p>
                </div>
                <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
                  <li className="d-flex flex-row gap-2">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill text-success" viewBox="0 0 16 16">
                        <path
                          d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                      </svg>
                    </span>
                    <span>Expert Instructors</span>
                  </li>
                  <li className="d-flex flex-row gap-2">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill text-success" viewBox="0 0 16 16">
                        <path
                          d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                      </svg>
                    </span>
                    <span>Flexible Learning</span>
                  </li>
                  <li className="d-flex flex-row gap-2">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle-fill text-success" viewBox="0 0 16 16">
                        <path
                          d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                      </svg>
                    </span>
                    <span>Supportive Community</span>
                  </li>
                </ul>
              </div>
              <div className="d-grid d-md-flex flex-row gap-2">
                <a href="#!" className="btn btn-primary btn-lg">Join For Free</a>
                <a href="#!" className="btn btn-outline-secondary btn-lg">Explore Courses</a>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 offset-xxl-1 col-lg-7 col-12">
            <div className="row gx-0 gy-4 gy-lg-0">
              <div className="col-md-6 flex-column justify-content-start align-items-center d-none d-md-flex">
                <div className="position-relative me-n7">
                  <div className="position-absolute bottom-25 start-0 ms-n8 end-0 d-flex flex-column align-items-start">
                    <div className="bg-white rounded-pill py-2 px-3 shadow mb-2 d-inline-block">
                      <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M23.9688 3.0378H8.29689C7.3189 3.0378 6.38097 3.4263 5.68942 4.11784C4.99788 4.80939 4.60938 5.74732 4.60938 6.72531V26.0848C4.60938 26.3293 4.7065 26.5638 4.87939 26.7366C5.05227 26.9095 5.28676 27.0066 5.53125 27.0066H22.1251C22.3696 27.0066 22.6041 26.9095 22.7769 26.7366C22.9498 26.5638 23.047 26.3293 23.047 26.0848C23.047 25.8403 22.9498 25.6058 22.7769 25.4329C22.6041 25.26 22.3696 25.1629 22.1251 25.1629H6.45313C6.45313 24.6739 6.64739 24.2049 6.99316 23.8592C7.33893 23.5134 7.8079 23.3191 8.29689 23.3191H23.9688C24.2133 23.3191 24.4478 23.222 24.6207 23.0491C24.7936 22.8762 24.8907 22.6418 24.8907 22.3973V3.95967C24.8907 3.71518 24.7936 3.48069 24.6207 3.30781C24.4478 3.13492 24.2133 3.0378 23.9688 3.0378ZM13.8282 4.88155H19.3594V13.1785L17.1458 11.5191C16.9862 11.3994 16.7921 11.3347 16.5927 11.3347C16.3932 11.3347 16.1991 11.3994 16.0395 11.5191L13.8282 13.1785V4.88155ZM23.047 21.4754H8.29689C7.64944 21.4745 7.0133 21.6451 6.45313 21.9697V6.72531C6.45313 6.23632 6.64739 5.76735 6.99316 5.42158C7.33893 5.07581 7.8079 4.88155 8.29689 4.88155H11.9844V15.0222C11.9844 15.1934 12.0321 15.3612 12.1221 15.5069C12.2121 15.6525 12.3409 15.7702 12.494 15.8468C12.6471 15.9233 12.8186 15.9558 12.9891 15.9404C13.1596 15.925 13.3225 15.8624 13.4594 15.7597L16.5938 13.4089L19.7293 15.7597C19.8886 15.8792 20.0822 15.9439 20.2813 15.9441C20.5258 15.9441 20.7603 15.847 20.9332 15.6741C21.1061 15.5012 21.2032 15.2667 21.2032 15.0222V4.88155H23.047V21.4754Z"
                          fill="#F59E0B" />
                      </svg>

                      <span className="text-dark fw-semibold">50+ Courses</span>
                    </div>
                    <div className="bg-white rounded-pill py-2 px-3 shadow mb-2 d-inline-block">
                      <svg width="24" height="25" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M28.5782 15.2724C28.5792 14.2137 28.3197 13.171 27.8226 12.2363C27.3255 11.3016 26.606 10.5035 25.7277 9.91249C24.8493 9.32146 23.839 8.95561 22.7859 8.8472C21.7328 8.73879 20.6691 8.89115 19.6888 9.29084C18.7084 9.69054 17.8415 10.3253 17.1644 11.1391C16.4873 11.953 16.0208 12.9209 15.8061 13.9576C15.5913 14.9943 15.635 16.0679 15.9331 17.0837C16.2313 18.0996 16.7748 19.0265 17.5157 19.7827V26.3349C17.5156 26.4922 17.5557 26.6468 17.6322 26.7842C17.7087 26.9215 17.819 27.037 17.9528 27.1197C18.0865 27.2024 18.2391 27.2495 18.3962 27.2566C18.5532 27.2636 18.7095 27.2304 18.8501 27.16L22.1251 25.5214L25.4001 27.16C25.5407 27.2304 25.6969 27.2636 25.854 27.2566C26.011 27.2495 26.1637 27.2024 26.2974 27.1197C26.4311 27.037 26.5415 26.9215 26.618 26.7842C26.6945 26.6468 26.7346 26.4922 26.7345 26.3349V19.7827C27.9169 18.5793 28.579 16.9595 28.5782 15.2724ZM22.1251 10.663C23.0367 10.663 23.9279 10.9333 24.6859 11.4398C25.4439 11.9463 26.0347 12.6662 26.3836 13.5085C26.7325 14.3507 26.8238 15.2775 26.6459 16.1716C26.4681 17.0658 26.0291 17.8871 25.3844 18.5317C24.7398 19.1764 23.9185 19.6154 23.0243 19.7932C22.1302 19.9711 21.2034 19.8798 20.3611 19.5309C19.5189 19.182 18.799 18.5913 18.2925 17.8332C17.786 17.0752 17.5157 16.1841 17.5157 15.2724C17.5157 14.0499 18.0013 12.8775 18.8657 12.0131C19.7302 11.1486 20.9026 10.663 22.1251 10.663ZM22.5376 23.6661C22.4095 23.602 22.2683 23.5686 22.1251 23.5686C21.9819 23.5686 21.8406 23.602 21.7125 23.6661L19.3594 24.8438V21.1021C20.2236 21.5126 21.1684 21.7255 22.1251 21.7255C23.0818 21.7255 24.0265 21.5126 24.8907 21.1021V24.8438L22.5376 23.6661ZM15.6719 22.6474C15.6719 22.8919 15.5748 23.1264 15.4019 23.2993C15.229 23.4722 14.9945 23.5693 14.7501 23.5693H4.60938C4.12039 23.5693 3.65142 23.3751 3.30565 23.0293C2.95988 22.6835 2.76563 22.2145 2.76562 21.7256V6.97549C2.76562 6.48649 2.95988 6.01752 3.30565 5.67175C3.65142 5.32598 4.12039 5.13173 4.60938 5.13173H24.8907C25.3797 5.13173 25.8487 5.32598 26.1945 5.67175C26.5402 6.01752 26.7345 6.48649 26.7345 6.97549C26.7345 7.21998 26.6374 7.45447 26.4645 7.62735C26.2916 7.80024 26.0571 7.89737 25.8126 7.89737C25.5681 7.89737 25.3336 7.80024 25.1607 7.62735C24.9878 7.45447 24.8907 7.21998 24.8907 6.97549H4.60938V21.7256H14.7501C14.9945 21.7256 15.229 21.8227 15.4019 21.9956C15.5748 22.1684 15.6719 22.4029 15.6719 22.6474ZM13.8282 16.1943C13.8282 16.4388 13.731 16.6733 13.5582 16.8461C13.3853 17.019 13.1508 17.1162 12.9063 17.1162H8.2969C8.0524 17.1162 7.81792 17.019 7.64503 16.8461C7.47215 16.6733 7.37502 16.4388 7.37502 16.1943C7.37502 15.9498 7.47215 15.7153 7.64503 15.5424C7.81792 15.3695 8.0524 15.2724 8.2969 15.2724H12.9063C13.1508 15.2724 13.3853 15.3695 13.5582 15.5424C13.731 15.7153 13.8282 15.9498 13.8282 16.1943ZM13.8282 12.5068C13.8282 12.7513 13.731 12.9857 13.5582 13.1586C13.3853 13.3315 13.1508 13.4286 12.9063 13.4286H8.2969C8.0524 13.4286 7.81792 13.3315 7.64503 13.1586C7.47215 12.9857 7.37502 12.7513 7.37502 12.5068C7.37502 12.2623 7.47215 12.0278 7.64503 11.8549C7.81792 11.682 8.0524 11.5849 8.2969 11.5849H12.9063C13.1508 11.5849 13.3853 11.682 13.5582 11.8549C13.731 12.0278 13.8282 12.2623 13.8282 12.5068Z"
                          fill="#139A74" />
                      </svg>

                      <span className="text-dark fw-semibold">Certified Courses</span>
                    </div>
                    <div className="bg-white rounded-pill py-2 px-3 shadow">
                      <svg width="24" height="25" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M18.9492 12.9114L13.4179 9.22386C13.2791 9.13121 13.1176 9.078 12.9509 9.06992C12.7842 9.06185 12.6184 9.0992 12.4712 9.17799C12.324 9.25678 12.201 9.37406 12.1153 9.5173C12.0295 9.66055 11.9843 9.82438 11.9844 9.99132V17.3664C11.9843 17.5333 12.0295 17.6971 12.1153 17.8404C12.201 17.9836 12.324 18.1009 12.4712 18.1797C12.6184 18.2585 12.7842 18.2958 12.9509 18.2878C13.1176 18.2797 13.2791 18.2265 13.4179 18.1338L18.9492 14.4463C19.0757 14.3622 19.1794 14.2481 19.2511 14.1142C19.3228 13.9803 19.3603 13.8307 19.3603 13.6788C19.3603 13.5269 19.3228 13.3774 19.2511 13.2435C19.1794 13.1096 19.0757 12.9955 18.9492 12.9114ZM13.8282 15.6436V11.7198L16.7759 13.6788L13.8282 15.6436ZM24.8907 5.38193H4.60938C4.12039 5.38193 3.65142 5.57618 3.30565 5.92195C2.95988 6.26772 2.76563 6.73669 2.76562 7.22569V20.132C2.76563 20.621 2.95988 21.09 3.30565 21.4357C3.65142 21.7815 4.12039 21.9757 4.60938 21.9757H24.8907C25.3797 21.9757 25.8487 21.7815 26.1945 21.4357C26.5402 21.09 26.7345 20.621 26.7345 20.132V7.22569C26.7345 6.73669 26.5402 6.26772 26.1945 5.92195C25.8487 5.57618 25.3797 5.38193 24.8907 5.38193ZM24.8907 20.132H4.60938V7.22569H24.8907V20.132ZM26.7345 24.7414C26.7345 24.9859 26.6374 25.2204 26.4645 25.3933C26.2916 25.5661 26.0571 25.6633 25.8126 25.6633H3.6875C3.44301 25.6633 3.20852 25.5661 3.03564 25.3933C2.86275 25.2204 2.76563 24.9859 2.76562 24.7414C2.76562 24.4969 2.86275 24.2624 3.03564 24.0895C3.20852 23.9166 3.44301 23.8195 3.6875 23.8195H25.8126C26.0571 23.8195 26.2916 23.9166 26.4645 24.0895C26.6374 24.2624 26.7345 24.4969 26.7345 24.7414Z"
                          fill="#E53E3E" />
                      </svg>

                      <span className="text-dark fw-semibold">Online Project</span>
                    </div>
                  </div>
                  <svg width="205" height="189" viewBox="0 0 205 189" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0.0391235 179.983C0.0391235 80.8399 80.4107 0.468323 179.554 0.468323H189.034C197.318 0.468323 204.033 7.18386 204.033 15.4679V166.407C204.033 178.626 194.127 188.532 181.908 188.532H8.58745C3.86634 188.532 0.0391235 184.704 0.0391235 179.983Z"
                      fill="#139A74" />
                  </svg>
                </div>
              </div>
              <div className="col-md-6 mt-8 mt-md-0">
                <div className="row">
                  <div className="col-md-6">
                    <div
                      className="bg-warning d-flex justify-content-center rounded-4 position-relative"
                      style={{ paddingBottom: "150px", paddingTop: "100px" }}
                    >
                      <img
                        src="https://geeksui.codescandy.com/geeks/assets/images/landing-immigration/college-student-holding-laptop-pointing-right.png"
                        alt=""
                        className="position-absolute bottom-0 me-3"
                      />
                    </div>
                  </div>

                  <div className="col-md-6 d-none d-md-flex flex-column justify-content-end">
                    <div
                      className="bg-primary d-flex justify-content-center rounded-4 position-relative mx-5"
                      style={{ paddingBottom: "150px", paddingTop: "100px" }}
                    >
                      <img
                        src="https://geeksui.codescandy.com/geeks/assets/images/landing-immigration/front-view-young-man-going-university-with-bag.png"
                        alt=""
                        className="position-absolute bottom-0"
                      />
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>




    <section className="pb-lg-14 pb-6 my-5">
                          <div className="container">
                            <div className="row">
                              <div className="col-xl-6 offset-xl-3 col-md-12 col-12">
                                <div className="text-center mb-lg-10 mb-6">
                                  <h2 className="h1 fw-bold">Building strong <u className="text-warning"><span className="text-primary">foundational
                                        skills</span></u></h2>
                                  <p className="lead mb-0">Online courses certification section design for showcase your certificate program
                                    features.</p>
                                </div>
                              </div>
                            </div>
                            <div className=" row align-items-center ">
                              <div className="col-xl-5 col-lg-6 col-md-12 col-12">
                                <div className="mb-6 mb-lg-0">
                                  <div className="mb-2">
                                    <img src="https://geeksui.codescandy.com/geeks/assets/images/education/certificate.jpg" alt="certificate" className="img-fluid w-100" />
                                  </div>
                                  <div className="d-flex">
                                    <span><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="var(--gk-primary)" className="bi bi-patch-check-fill" viewBox="0 0 16 16">
                                        <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path>
                                      </svg>
                                    </span><span className="ms-2">Completion certificate awarded on every course completion</span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-6 offset-xl-1  col-lg-6 col-md-12 col-12">
                                <div className="row row-cols-2">
                                  <div className="col">
                                    <div className="mb-4 mb-xl-6">
                                      <div className="mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="var(--gk-primary)" className="bi bi-trophy" viewBox="0 0 16 16">
                                          <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z"></path>
                                        </svg>
                                      </div>
                                      <div>
                                        <h4>Learn from Industry Experts</h4>
                                        <p>Lorem ipsum dolor sit amet, conse ctetur adipisc amus ac iaculis arcu. </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col">
                                    <div className="mb-lg-6 mb-4">
                                      <div className="mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="var(--gk-primary)" className="bi bi-star" viewBox="0 0 16 16">
                                          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                        </svg>
                                      </div>
                                      <div>
                                        <h4>Free Resources</h4>
                                        <p>Pellentesque sagittis placerat mollii purus onvallis venenatis asapien. </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col">
                                    <div className="mb-4 mb-md-0">
                                      <div className="mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="var(--gk-primary)" className="bi bi-shield-lock" viewBox="0 0 16 16">
                                          <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"></path>
                                          <path d="M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415z"></path>
                                        </svg>
                                      </div>
                                      <div>
                                        <h4>Learn Anytime, Anywhere</h4>
                                        <p>Integer ultricies lorem nec erat fau euismod ipsum nislnec leo iaculis</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col">
                                    <div>
                                      <div className="mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="var(--gk-primary)" className="bi bi-nut" viewBox="0 0 16 16">
                                          <path d="m11.42 2 3.428 6-3.428 6H4.58L1.152 8 4.58 2h6.84zM4.58 1a1 1 0 0 0-.868.504l-3.428 6a1 1 0 0 0 0 .992l3.428 6A1 1 0 0 0 4.58 15h6.84a1 1 0 0 0 .868-.504l3.429-6a1 1 0 0 0 0-.992l-3.429-6A1 1 0 0 0 11.42 1H4.58z"></path>
                                          <path d="M6.848 5.933a2.5 2.5 0 1 0 2.5 4.33 2.5 2.5 0 0 0-2.5-4.33zm-1.78 3.915a3.5 3.5 0 1 1 6.061-3.5 3.5 3.5 0 0 1-6.062 3.5z"></path>
                                        </svg>
                                      </div>
                                      <div>
                                        <h4>Skill-based Learning</h4>
                                        <p>Duis sed sollicitudin narcu mi, faucibus in sapien non, auctor placerat arcu.</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                        <CourseSlider />
                        <Feature />
   </>
  )
}
