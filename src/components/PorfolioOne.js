import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../assets/style/portfolio.scss";
import Zoom from "react-reveal/Zoom";
import withReveal from "react-reveal/withReveal";
import Fade from "react-reveal/Fade";
import styled from "styled-components";

const Sayembara = () => {
  const Title = withReveal(
    styled.h1`
      font-size: 1.5em;
      text-align: left;
      color: palevioletred;
    `,
    <Fade left delay={1000} />
  );
  const Line = withReveal(
    styled.svg`
      height: 30px;
    `,
    <Fade left delay={2700} />
  );
  return (
    <div className="portfolio">
      <Zoom>
        <Container>
          <Row xs="1" md="2">
            <Col md={{ size: 5 }}>
              <Title>
                <h1>Sayembara</h1>
              </Title>
              <Line>
                <svg>
                  <line
                    x1="0"
                    y1="0"
                    x2="100"
                    y2="0"
                    style={{ stroke: "#138496", strokeWidth: "10" }}
                  />
                </svg>
              </Line>
              <h5>
                <Fade left delay={2000}>
                  Sayembara is a platform where you can expand your creativity
                  enhance the design of your business venture and earn
                  additional income.
                </Fade>
              </h5>
            </Col>
            <Col md={{ size: 7 }}>
              <Fade right delay={2500}>
                <img
                  src={require("../assets/images/sayembara.png")}
                  alt="sayembara"
                  style={{ width: "100%" }}
                />
              </Fade>
            </Col>
          </Row>
        </Container>
      </Zoom>
    </div>
  );
};
export default Sayembara;
