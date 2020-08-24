import React from "react";
import "../assets/style/navbar.scss";
import { Button } from "reactstrap";
import { Link, animateScroll as scroll } from "react-scroll";

const NavBar = ({ sticky }) => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <nav className={sticky ? "navbar navbar-sticky" : "navbar"} id="navbar">
        <div className="navbar__logo">
          <h2> ChMamuaya</h2>
        </div>
        <ul>
          <li className="nav__item txt">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-0}
              duration={1500}
            >
              Home
            </Link>
          </li>
          <li className="nav__item txt">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={5}
              duration={1500}
            >
              About
            </Link>
          </li>
          <li className="nav__item txt">
            <Link
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={5}
              duration={1500}
            >
              Portfolio
            </Link>
          </li>
          <li className="nav__item">
            <Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={0}
              duration={1500}
            >
              <Button color="info" style={{ fontSize: "20px" }}>
                <a href="mailto:mamuaya.chlaudya@gmail.com">Hire Me</a>
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
      <button className="myTop" onClick={scrollToTop}>
        Top
      </button>
    </>
  );
};

export default NavBar;
