import Image from "next/image";
import Header from "./components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <>
      <Header />

      <div className="gerold-scroll-top">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={{
              transition: 'stroke-dashoffset 10ms linear 0s',
              strokeDasharray: '307.919px, 307.919px',
              strokeDashoffset: '71.1186px',
            }}
          ></path>
        </svg>
        <div className="gerold-scroll-top-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            data-icon="mdi:arrow-up"
            className="iconify iconify--mdi"
          >
            <path
              fill="currentColor"
              d="M13 20h-2V8l-5.5 5.5l-1.42-1.42L12 4.16l7.92 7.92l-1.42 1.42L13 8v12Z"
            ></path>
          </svg>
        </div>
      </div>

      <main id="content" className="site-main">
        <div
          data-elementor-type="wp-page"
          data-elementor-id="943"
          className="elementor elementor-943"
        >
          <div
            className="elementor-element elementor-element-8b54269 e-con-full e-flex e-con e-parent"
            data-id="8b54269"
            data-element_type="container"
          >
            <div
              className="elementor-element elementor-element-e84844b elementor-widget elementor-widget-tj-hero-banner"
              data-id="e84844b"
              data-element_type="widget"
              data-widget_type="tj-hero-banner.default"
            >
              <div className="elementor-widget-container">

                <section className="hero-section d-flex align-items-center" id="intro">
                  <div className="intro_text">
                    <svg viewBox="0 0 1320 300">
                      <text x="50%" Y="50%" text-anchor="middle">
                        HI
                      </text>
                    </svg>
                  </div>
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-md-6">
                        <div className="hero-content-box">

                          <span className="hero-sub-title">
                            I am Shadab khan
                          </span>

                          <h1 className="hero-title">MERN + React Native Developer</h1>
                          <div className="hero-image-box d-md-none text-center">
                            <img
                              decoding="async"
                              src="https://gerold.themejunction.net/wp-content/uploads/2024/05/hero_img.jpg"
                              alt="ThemeJunction"
                            />
                          </div>

                          <p className="lead">I break down complex user experience problems to create integrity-focused solutions that connect billions of people
                          </p>

                          <div className="button-box d-flex flex-wrap align-items-center">

                            <a href="#" className="btn tj-btn-secondary">
                              Download CV
                              <i
                                aria-hidden="true"
                                className="fi fi-rr-download"
                              ></i>
                            </a>

                            <ul className="ul-reset social-icons">
                              {/* <li>
                                <a href="https:www.facebook.com">
                                  <i className="fa-brands fa-facebook"></i>
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{ fill: '#2a1454' }}>
                                    <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256z" />
                                  </svg>
                                </a>
                              </li> */}
                              <li>
                                <a href="https://www.linkedin.com/in/pshadab" target="_blank">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ width: '24px', height: '24px', fill: '#2a1454' }}>
                                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                                  </svg>
                                </a>
                              </li>

                              <li>
                                <a href="https://github.com/skshadab1234" target="_blank">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" style={{ width: '24px', height: '24px', fill: '#2a1454' }}>
                                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                                  </svg>
                                </a>
                              </li>

                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 d-none d-md-block">

                        <div className="hero-image-box text-center">
                          <img
                            decoding="async"
                            src=""
                            alt="Shadab Profile Image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

              </div>
            </div>
          </div>
        </div>
      </main>

      {/* <div className="preloader">
        <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path id="preloaderSvg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
        </svg>

        <div className="preloader-heading">

          <div className="load-text">
            <span>L</span>
            <span>O</span>
            <span>A</span>
            <span>D</span>
            <span>I</span>
            <span>N</span>
            <span>G</span>
          </div>

        </div>
      </div> */}

    </>
  );
}
