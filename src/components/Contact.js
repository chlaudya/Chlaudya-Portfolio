import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../assets/style/contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as Copyright } from "../assets/images/copyright.svg";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import withReveal from "react-reveal/withReveal";
import styled from "styled-components";

const Contact = () => {
  const Iconanimation = withReveal(
    styled.p`
      text-align: justify;
    `,
    <Fade left delay={2500} />
  );
  const Descanimation = withReveal(
    styled.h5`
      text-align: center;
    `,
    <Fade top delay={2000} />
  );
  return (
    <div className="contact">
      <Container>
        <Row>
          <Col>
            <Bounce left cascade delay={1500}>
              <h1 className="contact__title">
                Don't be a stranger <br></br> <span>just say hello.</span>
              </h1>
            </Bounce>
            <Descanimation>
              <h5 className="contact__desc">
                Feel free to get in touch with me. I am always open to discuss
                new projects, creative ideas or opportunities to be part of your
                vision.
              </h5>
            </Descanimation>
          </Col>
        </Row>
        <Row xs="1" md="3">
          <Col md={{ size: 3 }}>
            <Iconanimation>
              <a href="https://www.linkedin.com/in/chlaudya-margareta-mamuaya-a50434118/">
                <FontAwesomeIcon
                  icon={["fab", "linkedin"]}
                  className="contact__icon"
                  style={{ width: "100%" }}
                />
                <h2>linkedIn</h2>
              </a>
            </Iconanimation>
          </Col>
          <Col md={{ size: 3 }}>
            <Iconanimation>
              <a href="https://github.com/chlaudya">
                <FontAwesomeIcon
                  icon={["fab", "github-square"]}
                  className="contact__icon"
                  style={{ width: "100%" }}
                />
                <h2>Github</h2>
              </a>
            </Iconanimation>
          </Col>
          <Col md={{ size: 3 }}>
            <Iconanimation>
              <a href="https://www.instagram.com/chmamuaya/">
                <FontAwesomeIcon
                  icon={["fab", "instagram-square"]}
                  className="contact__icon"
                  style={{ width: "100%" }}
                />
                <h2>Instagram</h2>
              </a>
            </Iconanimation>
          </Col>
          <Col md={{ size: 3 }}>
            <Iconanimation>
              <a href="mailto:mamuaya.chlaudya@gmail.com">
                <FontAwesomeIcon
                  icon={["fab", "google-plus-square"]}
                  className="contact__icon"
                  style={{ width: "100%" }}
                />
                <h2>Gmail</h2>
              </a>
            </Iconanimation>
          </Col>
        </Row>
      </Container>
      <div className="footer">
        <p>
          <Copyright /> 2020 Designed & developed by Chlaudya Mamuaya
        </p>
      </div>
    </div>
  );
};
export default Contact;
