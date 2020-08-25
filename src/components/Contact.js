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
  return (
    <div className="contact">
      <Container>
        <Row>
          <Col>
            <Bounce left cascade delay={1500}>
              <h1 className="contact__title">Find Me on</h1>
            </Bounce>
          </Col>
        </Row>
        <Row xs="1" md="3">
          <Col md={{ size: 4 }}>
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
          <Col md={{ size: 4 }}>
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
          <Col md={{ size: 4 }}>
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
        <div className="footer">
          <p>
            <Copyright /> 2020 Designed & developed by Chlaudya Mamuaya
          </p>
        </div>
      </Container>
    </div>
  );
};
export default Contact;
