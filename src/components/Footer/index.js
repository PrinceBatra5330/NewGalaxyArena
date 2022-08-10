import React, { useEffect } from "react";
import $ from "jquery";
import "./style.css";

const NewFooter = () => {
  // useEffect(() => {
  //   $(".partner").slick({
  //     dots: true,
  //     infinite: false,
  //     speed: 300,
  //     slidesToShow: 6,
  //     infinite: true,
  //     autoplay: true,
  //     autoplaySpeed: 2000,
  //     arrows: false,
  //     slidesToScroll: 1,

  //     responsive: [
  //       {
  //         breakpoint: 1024,
  //         settings: {
  //           slidesToShow: 4,
  //           slidesToScroll: 2,
  //           infinite: true,
  //           dots: true,
  //         },
  //       },
  //       {
  //         breakpoint: 600,
  //         settings: {
  //           slidesToShow: 2,
  //           slidesToScroll: 2,
  //         },
  //       },
  //       {
  //         breakpoint: 480,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1,
  //         },
  //       },
  //     ],
  //   });

  //   $(".zoning-gymslider").slick({
  //     slidesToShow: 3,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     arrows: 0,
  //     dots: true,
  //     autoplaySpeed: 2000,
  //     responsive: [
  //       {
  //         breakpoint: 768,
  //         settings: {
  //           arrows: false,
  //           slidesToShow: 2,
  //           centerMode: true,
  //           centerPadding: "22px",
  //         },
  //       },
  //       {
  //         breakpoint: 480,
  //         settings: {
  //           slidesToShow: 1,
  //           arrows: false,
  //           centerMode: true,
  //           centerPadding: "47px",
  //         },
  //       },
  //     ],
  //   });
  // });

  return (
    <>
      <section className="webMain-footer pb-0">
        <div className="footer-blackbg-section">
          <div className="container">
            <div className="row">
              <div className="col-md-8 mx-auto">
                <div className="footerinner-section">
                  <h2>Get more out of Galaxy Arena</h2>
                  <div className="col-md-12 text-center">
                    <div className="footer-img-section">
                      <img
                        src="./assets/img/logo.svg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-8 mx-auto">
                    <div className="footer-contact-us">
                      <h3>Contact us</h3>
                      <p>
                        Galaxy Arena Metaverse P.C, Dimitriou Gounari 227,
                        Glifada, Athens, Greece 16674, Tel : +302109641114{" "}
                      </p>
                      <p>Email: Admin@galaxyarena.io </p>
                      <p>Company reg #163302103000, Tax # 801786471</p>
                    </div>
                  </div>
                  <div className="col-md-5 mx-auto">
                    <div className="footer-social-media-icon">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fa fa-twitter social-icon"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-instagram social-icon"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i
                              className="fa fa-youtube-play social-icon"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewFooter;
