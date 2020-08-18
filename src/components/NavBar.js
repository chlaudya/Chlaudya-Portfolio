import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "../assets/style/navbar.scss";
import { Button } from "reactstrap";

const NavBar = () => {
  return (
    <ul className="nav justify-content-center">
      <li className="nav__item txt">
        <Link
          activeClass="active"
          to="section1"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Home
        </Link>
      </li>
      <li className="nav__item txt">
        <Link
          activeClass="active"
          to="section1"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
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
          offset={-70}
          duration={500}
        >
          <Button color="info" style={{ fontSize: "20px" }}>
            Hire Me
          </Button>
        </Link>
      </li>
    </ul>
  );
};

export default NavBar;
