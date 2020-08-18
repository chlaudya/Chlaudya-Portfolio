import React from "react";
import { Container, Row, Col } from "reactstrap";
import ScrollAnimation from "react-animate-on-scroll";
import "../assets/style/portfolio.scss";

const Sayembara = () => {
  return (
    <div className="portfolio">
      <Container>
        <Row xs="1" md="2">
          <Col md={{ size: 5 }}>
            <h1>Sayembara</h1>
            <ScrollAnimation
              animateIn="bounceInRight"
              animateOut="bounceOutLeft"
            >
              <svg>
                <line
                  x1="0"
                  y1="0"
                  x2="100"
                  y2="0"
                  style={{ stroke: "#138496", strokeWidth: "10" }}
                />
              </svg>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="lightSpeedInLeft "
              animateOut="lightSpeedOutLeft"
            >
              <h5>
                Sayembara is a platform where you can expand your creativity
                enhance the design of your business venture and earn additional
                income.
              </h5>
            </ScrollAnimation>
          </Col>
          <Col md={{ size: 7 }}>
            <img
              src={require("../assets/images/sayembara.png")}
              alt="sayembara"
              style={{ width: "100%" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Sayembara;
