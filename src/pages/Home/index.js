import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import moment from "moment";
import Link from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewHeader from "../../components/Header";
import NewFooter from "../../components/Footer";
import "./style.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [showSemicolon, setShowSemicolon] = useState(false);

  useEffect(() => {
    setInterval(() => {
      const now = moment();
      const then = moment("2022-04-25 12:12:12", "YYYY-MM-DD hh:mm:ss");
      const countdown = moment(then - now);
      setDays(countdown.format("D"));
      setHours(countdown.format("HH"));
      setMinutes(countdown.format("mm"));
      setSeconds(countdown.format("ss"));
    }, 1000);
  }, []);

  return (
    <>
      <NewHeader />
      <div
        className="modal fade "
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content modal-popup-btnn">
            <img
              src="./assets/img/popup-image.png"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>
      <section className="bg-black-sec innrsec-spacing">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="hero-banner-content">
                <h1 data-aos="fade-down" data-aos-duration="1000">
                  Metaverse hub for all{" "}
                  <span className="colorText">'earn'</span> platforms and Web 2
                  businesses.{" "}
                </h1>
                <p data-aos="fade-up" data-aos-duration="1000">
                  Galaxy arena has become the go to place for all people to
                  explore it's impressive 3 sectors while being able to visit
                  all Galaxy arena's partners worlds
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="hero-gif"
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500"
              >
                <img src="./assets/img/banner.gif" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="innrsec-spacing endless-innersec-section">
        <div className="container">
          <div className="row">
            <div className="col-md-9 mx-auto">
              <div className="blocksText blocksbtn-margin">
                <h2 data-aos="zoom-in" data-aos-duration="1500">
                  Endless adventures in the Galaxy Arena metaverse
                </h2>
                <p data-aos="zoom-in-up" data-aos-duration="1500">
                  Whatever you seek, you will find in Galaxy Arena . Boasting
                  three behemoth sectors, each one more impressive than the
                  other.
                </p>
              </div>
            </div>
            <div className="col-lg-4  col-md-12 innsersection-sectors">
              <div
                className="sector-box"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <div className="sector-boxInner">
                  <div className="sector-boxInner-content">
                    <p className="sector-btn">Sector-1</p>
                    <h4>The Galaxy Arena entertainment venue</h4>
                    <p>
                      Opening its doors in May of 2022, the alpha version of the
                      arena will be available for the first metaverse pioneers
                      to explore. The exterior, seating and ring areas will
                      become the first sections available to tour, the heart of
                      Galaxy Arena . Here, use of volumetric video capture
                      technology, live streaming of fights or any type of events
                      will be made possible. Watch your favourite events from
                      unobstructed angles, without the hustle of waiting in long
                      lines or fearing cancellation due to strict safety
                      measures. Galaxy Arena offers reduced ticket prices and
                      essentially zero travel time as virtual events become the
                      norm.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4  col-md-12 innsersection-sectors">
              <div
                className="sector-box"
                data-aos="flip-up"
                data-aos-duration="2000"
              >
                <div className="sector-boxInner">
                  <div className="sector-boxInner-content">
                    <p className="sector-btn">Sector-2</p>
                    <h4>The Galaxy Arena gym</h4>
                    <p>
                      Galaxy Arena is transforming traditional home workouts..
                      By putting our own twist on the “play-to-earn” model, we
                      have come up with a new system we call “TRAIN-TO-EARN”.
                      Financial incentives make rewards that much sweeter, so
                      what better way to motivate people to work out than
                      turning fitness into a game where you can earn money. Our
                      state-of-the-art gym offers an array of health and fitness
                      challenges incorporated into mini games, that will give
                      you the ability to exercise and earn ESSENCE ($ESNC). Are
                      you ready to get paid and stay fit? Gym doors open July
                      2022!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12  innsersection-sectors ">
              <div
                className="sector-box"
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                <div className="sector-boxInner">
                  <div className="sector-boxInner-content">
                    <p className="sector-btn">Sector-3</p>
                    <h4>Galaxy Tower</h4>
                    <p>
                      Standing alongside the arena and the gym, the Galaxy Tower
                      is a marvel on its own. While the top floor is reserved
                      for our Celestial Casino, the rest of the tower will
                      include a collection of 20,000 unique NFT units, divided
                      into luxury suites, rooms and lounge areas. Each of these
                      areas will be uniquely designed by our creative team, who
                      will create each room with one-of-a-kind designs and
                      exclusive furniture pieces in line with its respective use
                      cases.
                    </p>
                    <p>
                      Stay tuned for official updates on the Galaxy Tower grand
                      opening.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="innrsec-spacing inner-topSpece">
        <div className="boxSkyblue-bg">
          <div className="boxDark-bg">
            <div className="container">
              <div className="row">
                <div className="col-md-9 mx-auto">
                  <div className="blocksText blockswhiteText blocksbtn-margin">
                    <h2 data-aos="zoom-in" data-aos-duration="1500">
                      Galaxy Arena Team
                    </h2>
                    <p data-aos="zoom-in-up" data-aos-duration="1500">
                      Whatever you seek, you will find in Galaxy Arena .
                      Boasting three behemoth sectors, each one more impressive
                      than the other.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="gArena-team "
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="2000"
                  >
                    <div className="gArena-teamInner">
                      <div className="teamMember-img">
                        <img src="./assets/img/tmember1.png" className="" />
                      </div>
                      <div className="teamMember-info">
                        <h6>Galaxy Arena Team</h6>
                        <p>Founder</p>
                        <a href="./info.html" className="more-Info webBtn">
                          Info
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="gArena-team"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="2000"
                  >
                    <div className="gArena-teamInner">
                      <div className="teamMember-img">
                        <img src="./assets/img/tmember1.png" className="" />
                      </div>
                      <div className="teamMember-info">
                        <h6>Galaxy Arena Team</h6>
                        <p>Founder</p>
                        <a href="#" className="more-Info webBtn">
                          Info
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="gArena-team"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="2000"
                  >
                    <div className="gArena-teamInner">
                      <div className="teamMember-img">
                        <img src="./assets/img/tmember1.png" className="" />
                      </div>
                      <div className="teamMember-info">
                        <h6>Galaxy Arena Team</h6>
                        <p>Founder</p>
                        <a href="#" className="more-Info webBtn">
                          Info
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="gArena-team"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="2000"
                  >
                    <div className="gArena-teamInner">
                      <div className="teamMember-img">
                        <img src="./assets/img/tmember1.png" className="" />
                      </div>
                      <div className="teamMember-info">
                        <h6>Galaxy Arena Team</h6>
                        <p>Founder</p>
                        <a href="#" className="more-Info webBtn">
                          Info
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="gArena-team"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="2000"
                  >
                    <div className="gArena-teamInner">
                      <div className="teamMember-img">
                        <img src="./assets/img/tmember1.png" className="" />
                      </div>
                      <div className="teamMember-info">
                        <h6>Galaxy Arena Team</h6>
                        <p>Founder</p>
                        <a href="#" className="more-Info webBtn">
                          Info
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div
                    className="gArena-team"
                    data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom"
                    data-aos-duration="2000"
                  >
                    <div className="gArena-teamInner">
                      <div className="teamMember-img">
                        <img src="./assets/img/tmember1.png" className="" />
                      </div>
                      <div className="teamMember-info">
                        <h6>Galaxy Arena Team</h6>
                        <p>Founder</p>
                        <a href="#" className="more-Info webBtn">
                          Info
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
      <section className="innrsec-spacing inner-topSpece">
        <div className="container">
          <div className="row">
            <div className="col-md-9 mx-auto">
              <div className="blocksText blocksbtn-margin">
                <h2 data-aos="zoom-in" data-aos-duration="1500">
                  Partners
                </h2>
                <p data-aos="zoom-in-up" data-aos-duration="1500">
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="boxSkyblue-bg boxSkyblue-bg-arena">
          <div className="boxDark-bg boxDark-bg-arena">
            <div
              className="partners-logos"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="1000"
            >
              <div className="partner">
                <Slider {...settings}>
                  <div className="">
                    <div className="partner-logo">
                      <img src="./assets/img/ptnr1.png" />
                    </div>
                  </div>
                  <div className="">
                    <div className="partner-logo">
                      <img src="./assets/img/ptnr2.png" />
                    </div>
                  </div>
                  <div className="">
                    <div className="partner-logo">
                      <img src="./assets/img/ptnr3.png" />
                    </div>
                  </div>
                  <div className="">
                    <div className="partner-logo">
                      <img src="./assets/img/ptnr4.png" />
                    </div>
                  </div>
                  <div className="">
                    <div className="partner-logo">
                      <img src="./assets/img/ptnr5.png" />
                    </div>
                  </div>
                  <div className="">
                    <div className="partner-logo">
                      <img src="./assets/img/ptnr6.png" />
                    </div>
                  </div>
                  <div className="">
                    <div className="partner-logo">
                      <img src="./assets/img/ptnr2.png" />
                    </div>
                  </div>
                  <div className="">
                    <div className="partner-logo">
                      <img src="./assets/img/ptnr5.png" />
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="innrsec-spacing inner-topSpece">
        <div className="container">
          <div className="row">
            <div className="col-md-9 mx-auto">
              <div className="blocksText blocksbtn-margin">
                <h2 data-aos="zoom-in" data-aos-duration="1500">
                  Backers Investors
                </h2>
                <p data-aos="zoom-in-up" data-aos-duration="1500">
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially unchanged.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="boxSkyblue-bg boxSkyblue-bg-arena boxDark-bg-arenaInve">
          <div className="boxDark-bg boxDark-bg-arena boxSkyblue-bg-arenaInve">
            <div
              className="partners-logos investors-logos"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="1000"
            >
              <div className="partner investor">
                <Slider {...settings}>
                  <div className="">
                    <div className="partner-logo investor-logo">
                      <img src="./assets/img/ptnr1.png" />
                    </div>
                  </div>
                  <div className="">
                    <div className="partner-logo investor-logo">
                      <img src="./assets/img/ptnr2.png" />
                    </div>
                  </div>
                  <div className="">
                    <div className="partner-logo investor-logo">
                      <img src="./assets/img/ptnr3.png" />
                    </div>
                  </div>
                  <div className="">
                    <div className="partner-logo investor-logo">
                      <img src="./assets/img/ptnr4.png" />
                    </div>
                  </div>
                  <div className="">
                    <div className="partner-logo investor-logo">
                      <img src="./assets/img/ptnr5.png" />
                    </div>
                  </div>
                  <div className="">
                    <div className="partner-logo investor-logo">
                      <img src="./assets/img/ptnr6.png" />
                    </div>
                  </div>
                  <div className="">
                    <div className="partner-logo investor-logo">
                      <img src="./assets/img/ptnr2.png" />
                    </div>
                  </div>
                  <div className="">
                    <div className="partner-logo investor-logo">
                      <img src="./assets/img/ptnr5.png" />
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="innrsec-spacing pt-0">
        <div className="container">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="blocksText blocksbtn-margin">
                <h2 data-aos="zoom-in" data-aos-duration="1500">
                  Affiliates
                </h2>
                <p data-aos="zoom-in-up" data-aos-duration="1500">
                  Meet our Fighters
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="affiliates-group"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <div className="content-overlay"></div>
                <img src="./assets/img/aflt1.png" className="img-fluid" />
                <a href="#" className="instaIcon fadeIn-bottom">
                  <i className="fa fa-instagram"></i>
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="affiliates-group"
                data-aos="flip-up"
                data-aos-duration="2000"
              >
                <div className="content-overlay"></div>
                <img src="./assets/img/aflt2.png" className="img-fluid" />
                <a href="#" className="instaIcon">
                  <i className="fa fa-instagram"></i>
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="affiliates-group"
                data-aos="flip-down"
                data-aos-duration="2000"
              >
                <div className="content-overlay"></div>
                <img src="./assets/img/aflt3.png" className="img-fluid" />
                <a href="#" className="instaIcon">
                  <i className="fa fa-instagram"></i>
                </a>
              </div>
            </div>
            <div
              className="col-md-3"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <div className="affiliates-group">
                <div className="content-overlay"></div>
                <img src="./assets/img/aflt4.png" className="img-fluid" />
                <a href="#" className="instaIcon">
                  <i className="fa fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="innrsec-spacing pt-0">
        <div className="container">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="blocksText blocksbtn-margin">
                <h2 data-aos="zoom-in" data-aos-duration="1500">
                  Galaxy Arena
                </h2>
                <p data-aos="zoom-in-up" data-aos-duration="1500">
                  A new world arrives in…
                </p>
              </div>
            </div>
            <div className="col-md-8 mx-auto">
              <div className="boxDark-bg boxDark-bg-arena p-3 boxDark-bg-arena-border">
                <div className="boxSkyblue-bg boxSkyblue-bg-arena py-5 boxSkyblue-bg-arena-border">
                  <div className="countdownArena">
                    <div className="contdownArena-inner">
                      <ul>
                        <li
                          className=""
                          data-aos="flip-up"
                          data-aos-duration="2000"
                        >
                          <h2>{days}</h2>
                          <p>Day</p>
                        </li>
                        <li
                          className=""
                          data-aos="flip-down"
                          data-aos-duration="1900"
                        >
                          <h2>{hours}</h2>
                          <p>Hourse</p>
                        </li>
                        <li
                          className=""
                          data-aos="flip-up"
                          data-aos-duration="3000"
                        >
                          <h2>{minutes}</h2>
                          <p>Minutes</p>
                        </li>
                        <li
                          className=""
                          data-aos="flip-down"
                          data-aos-duration="1900"
                        >
                          <h2>{seconds}</h2>
                          <p>Second’s</p>
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
      <section className="innrsec-spacing inner-topSpece">
        <div className="boxSkyblue-bg skybluebg-section">
          <div className="boxDark-bg">
            <div className="container">
              <div className="row">
                <div className="col-md-9 mx-auto">
                  <div className="blocksText blockswhiteText blocksbtn-margin">
                    <h2 data-aos="zoom-in" data-aos-duration="1500">
                      The Future Has Arrived
                    </h2>
                    <p data-aos="zoom-in-up" data-aos-duration="1500">
                      The metaverse is a new way to experience life online
                      parallel to the physical world. Galaxy Arena is poised to
                      become the premium destination for entertainment
                      experiences like concerts, fighting events, e-commerce,
                      e-sports, health & fitness, unique VR experiences and much
                      much more. Here, you can watch live events broadcast
                      straight from earth to the arena, train-to-earn or own a
                      piece of digital real estate within the Galaxy Tower.
                    </p>
                  </div>
                </div>
                <div className="col-md-4  tripleblock-section">
                  <div
                    className="futureArrived-arena"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                  >
                    <div className="futureArrived-arena-inner">
                      <div className="futureAricon">
                        <img src="./assets/img/future1.svg" alt="" />
                      </div>
                      <h6>Reduced costs</h6>
                      <p>
                        Lower prices on event tickets and gym memberships due to
                        the elimination of travel time and limited spacing.
                        Using blockchain technology transaction fees are reduced
                        significantly.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 tripleblock-section">
                  <div
                    className="futureArrived-arena"
                    data-aos="flip-up"
                    data-aos-duration="2000"
                  >
                    <div className="futureArrived-arena-inner">
                      <div className="futureAricon">
                        <img src="./assets/img/future2.svg" alt="" />
                      </div>
                      <h6>Metaverse AR/VR Integration</h6>
                      <p>
                        Instant access to events with unobstructed views is made
                        possible by utilising VR/AR technology. Take advantage
                        of working out in the comfort and safety of your own
                        home. Galaxy Arena is open 24/7, 365 days a year with no
                        chance of cancellation due to gym closures and strict
                        safety measures.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 tripleblock-section">
                  <div
                    className="futureArrived-arena"
                    data-aos="fade-left"
                    data-aos-duration="2000"
                  >
                    <div className="futureArrived-arena-inner">
                      <div className="futureAricon">
                        <img src="./assets/img/future3.svg" alt="" />
                      </div>
                      <h6>TRAIN-TO-EARN Rewards System</h6>
                      <p>
                        What’s the best way to motivate people to work out ?
                        Turn working out into a game where money is on the line.
                        Visit the Galaxy Arena gym to take advantage of a
                        plethora of health and fitness challenges, where you can
                        exercise and earn ESSENCE.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="innrsec-spacing inner-topSpece">
        <div className="container">
          <div className="row">
            <div className="col-md-9 mx-auto">
              <div className="blocksText blocksbtn-margin">
                <h2 data-aos="zoom-in" data-aos-duration="1500">
                  Planet-Sized Partnerships
                </h2>
                <p data-aos="zoom-in-up" data-aos-duration="1500">
                  Galaxy Arena has partnered with Coinbound, The Crypto
                  Marketing Agency, Arloopa Inc and X-TECH.
                </p>
                <p data-aos="zoom-in-up" data-aos-duration="1500">
                  Notable Coinbound companies include: eToro, Metamask, Cosmos,
                  Nexo, Voyager, ShapeShift, okcoin, CryptoDaily, Gods
                  Unchained, Prime XBT, Stake, and BlockCard.
                </p>
                <p data-aos="zoom-in-up" data-aos-duration="1500">
                  Arloopa Inc has developed apps for notable companies like
                  Coca-Cola, Cosmopolitan Armenia, Brussels Airlines, and
                  others. Arloopa Inc works hand-in-hand with X-TECH to deliver
                  innovative AR and VR storytelling for Galaxy Arena fans,
                  bringing the magic of the metaverse into the real world for
                  upcoming Easter Egg hunts worldwide.
                </p>
                <p data-aos="zoom-in-up" data-aos-duration="1500">
                  X-TECH has developed apps and interactive storytelling
                  experiences for some of the most innovative companies
                  including Pepsi, Thrifty Car Rentals, American Express, and
                  others. To date, it’s developed over 200 websites, 16 games,
                  24 mobile apps, and 12 kinetic-based games pushing the
                  boundaries of how technology and media can reinvent the
                  digital landscape and gameify brands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="innrsec-spacing inner-topSpece">
        <div className="boxSkyblue-bg boxSkyblue-bg-arena">
          <div className="boxDark-bg boxDark-bg-arena">
            <div className="container">
              <div className="row">
                <div className="col-md-9 mx-auto">
                  <div className="blocksText blockswhiteText blocksbtn-margin">
                    <h2 data-aos="zoom-in" data-aos-duration="1500">
                      Galaxy Map
                    </h2>
                    <p data-aos="zoom-in-up" data-aos-duration="1500">
                      Space is impossible to navigate without plotting a course.
                    </p>
                    <p data-aos="zoom-in-up" data-aos-duration="1500">
                      That’s why we’ve crafted the timeline below to detail our
                      funding and development goals:
                    </p>
                  </div>
                </div>
                <div className="col-lg-6  col-md-12 mb-5">
                  <div
                    className="blueMapBox"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                  >
                    <div className="blueMapBox-inner mapBox-inner-text">
                      <h3>Q2.2022</h3>
                      <p>
                        Grow team from 3 to 35 members. Raise $730K in pre -
                        seed round. Lay the foundations for our IDO. Implement
                        the Simplex widget on our website. Grow team from 3 to
                        35 members. Raise $730K in pre - seed round. Lay the
                        foundations for our IDO. Implement the Simplex widget on
                        our website.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6  col-md-12 mb-5">
                  <div
                    className="blackMapBox"
                    data-aos="fade-left"
                    data-aos-duration="2000"
                  >
                    <div className="blackMapBox-inner mapBox-inner-text">
                      <h3>Q3.2022</h3>
                      <p>
                        Grow team from 3 to 35 members. Raise $730K in pre -
                        seed round. Lay the foundations for our IDO. Implement
                        the Simplex widget on our website. Grow team from 3 to
                        35 members. Raise $730K in pre - seed round. Lay the
                        foundations for our IDO. Implement the Simplex widget on
                        our website.{" "}
                      </p>
                      <p>
                        Grow team from 3 to 35 members. Raise $730K in pre -
                        seed round. Lay the foundations for our IDO. Implement
                        the Simplex widget on our website. Grow team from 3 to
                        35 members. Raise $730K in pre - seed round. Lay the
                        foundations for our IDO. Implement the Simplex widget on
                        our website.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 mb-5">
                  <div
                    className="blackMapBox"
                    data-aos="fade-right"
                    data-aos-duration="2000"
                  >
                    <div className="blackMapBox-inner mapBox-inner-text">
                      <h3>Q4.2022</h3>
                      <p>
                        List on Tier 1 CEX’s. Release our Genesis NFT
                        collection. Release our first train to earn VR game.
                        Release our first VR live event with global viewers.
                        Expand the Galaxy Arena Metaverse. Prepare for our
                        massive VR live event (Celebrity TBA). Bring sponsorship
                        companies into our Metaverse. Scale our Metaverse to
                        acquire more users and companies. Launch on one of the
                        top 5 CEX’s.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 mb-5">
                  <div
                    className="blueMapBox"
                    data-aos="fade-left"
                    data-aos-duration="2000"
                  >
                    <div className="blueMapBox-inner mapBox-inner-text">
                      <h3>Q1.2023</h3>
                      <p>
                        Make Galaxy Arena into a hub for all fitness, training
                        and health related crypto projects. Scale our users to
                        10,000 users daily. Expand our Metaverse into a
                        multiverse. Grow our team into 100+ people.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="innrsec-spacing inner-topSpece">
        <div className="container">
          <div className="row">
            <div className="col-md-9 mx-auto">
              <div className="blocksText blocksbtn-margin">
                <h2 data-aos="zoom-in" data-aos-duration="1500">
                  Planet-Sized Partnerships
                </h2>
                <p data-aos="zoom-in-up" data-aos-duration="1500">
                  According to Bloomberg, metaverses will be an 800 billion
                  dollar industry by 2024. Similarly, NFT transactions have
                  risen from 15 million in 2018 to 325 million in 2021 and are
                  on-trend to continue exploding as blockchain digital assets
                  become more common{" "}
                </p>
                <img
                  src="./assets/img/graph.png"
                  className="img-fluid"
                  alt=""
                />
                <p data-aos="zoom-in-up" data-aos-duration="1500">
                  With the VR headset sales expected to triple by 2024, shifting
                  the future of workplaces, live events, education and other
                  in-person interactions online, it’s a matter of time before
                  digital life occupies a higher percentage of the average
                  persons day.
                </p>
                <p data-aos="zoom-in-up" data-aos-duration="1500">
                  With the top 10 metaverse projects claiming less than 2% of
                  the total crypto market cap, galaxy arena has huge room for
                  growth.
                </p>
                <p data-aos="zoom-in-up" data-aos-duration="1500">
                  We aim to become the go to destination for live streaming
                  events, online esports, e-commerce, fitness training and
                  health.
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-4">
                  <div
                    className="planet-sizedBox"
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                  >
                    <div className="planet-sizedimg">
                      <img
                        src="./assets/img/yf.png"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="planet-sizedContent">
                      <small>By: Galaxy Arena</small>
                      <h6>Galaxy Arena Raises 717K in Private...</h6>
                      <p>
                        With the VR headset sales expected to triple by 2024,
                        shifting the future of workplaces, live events,
                        education...
                      </p>
                      <a href="#" className="more-Info webBtn">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    className="planet-sizedBox"
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                  >
                    <div className="planet-sizedimg">
                      <img
                        src="./assets/img/mw.png"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="planet-sizedContent">
                      <small>By: Galaxy Arena</small>
                      <h6>Galaxy Arena Raises 717K in Private...</h6>
                      <p>
                        With the VR headset sales expected to triple by 2024,
                        shifting the future of workplaces, live events,
                        education...
                      </p>
                      <a href="#" className="more-Info webBtn">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    className="planet-sizedBox"
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                  >
                    <div className="planet-sizedimg">
                      <img
                        src="./assets/img/wp.png"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="planet-sizedContent">
                      <small>By: Galaxy Arena</small>
                      <h6>Galaxy Arena Raises 717K in Private...</h6>
                      <p>
                        With the VR headset sales expected to triple by 2024,
                        shifting the future of workplaces, live events,
                        education...
                      </p>
                      <a href="#" className="more-Info webBtn">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="modal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div className="popup-image-container">
                <img
                  src="./assets/img/popup-image.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="popup-image-container">
                <img
                  src="./assets/img/popup-image.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewFooter />
    </>
  );
};

export default Home;
