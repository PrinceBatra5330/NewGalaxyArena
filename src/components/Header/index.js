import React, { useEffect, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "./style.css";
const NewHeader = () => {
  const navigate = useNavigate();

  const handler = () => {
    navigate("/simplex");
    window.location.reload();
  };
  return (
    <>
      <section className="webMain-header">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="./index.html">
              <div className="webLogo">
                <img className="img-fluid" src="./assets/img/logo.svg" />
              </div>
            </a>
            <button
              className="navbar-toggler web-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-bars barMenu" aria-hidden="true"></i>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav webnavbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="./index.html"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    aria-current="page"
                    href="./zoning.html"
                  >
                    Zoning
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle dropdown-toggleWeb"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Docs
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        White Paper
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Arena Pitch Deck
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Audit
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Github
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="./privacy-policy.html">
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    aria-current="page"
                    href="./essence.html"
                  >
                    Essence Tokenomics
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle dropdown-toggleWeb"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Our Team
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Team
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Afflites
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    Buy Crypto Now
                  </a>
                </li>
                <div className="web-desktop d-flex">
                  <li
                    className="nav-item nav-itemBtn "
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Connect Wallet
                  </li>

                  <li className="nav-item dropdown webDots-ellipies">
                    <a
                      className="nav-link dropdown-toggle "
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                    </a>
                    <ul
                      className="dropdown-menu "
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a
                          className="dropdown-item"
                          href="./contact.html#private-sale"
                        >
                          Join private sale
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="./contact.html#contact-form"
                        >
                          Contact us
                        </a>
                      </li>
                    </ul>
                  </li>
                </div>
                <div className="web-mobile">
                  <li className="nav-item dropdown webDots-ellipies">
                    <a
                      className="nav-link dropdown-toggle dropdown-toggleWeb"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      More Info
                    </a>
                    <ul
                      className="dropdown-menu "
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Join private sale
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Contact us
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li
                    className="nav-item nav-itemBtn "
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Connect Wallet
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default NewHeader;
