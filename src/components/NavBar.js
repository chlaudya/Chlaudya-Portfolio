import React from "react";
import { Link } from "react-scroll";
import "../assets/style/navbar.scss";
import { Button } from "reactstrap";

const NavBar = ({ sticky }) => {
  return (
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
              Hire Me
            </Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
