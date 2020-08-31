import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../assets/style/home.scss";
import styled, { keyframes } from "styled-components";
import { zoomIn, bounceInLeft, bounceIn } from "react-animations";
import { Link } from "react-scroll";
import { Button } from "reactstrap";

const Home = ({ id, element }) => {
  const ZoomDiv = styled.div`
    animation: 2s ${keyframes`${zoomIn}`};
  `;
  const BouncyDiv = styled.div`
    animation: 1s ${keyframes`${bounceInLeft}`};
  `;
  const BouncyButton = styled.div`
    animation: 4s ${keyframes`${bounceIn}`};
  `;
  return (
    <div className="home" id={id} ref={element}>
      <Container>
        <Row xs="1" sm="1" md="3">
          <Col className="home__about">
            <BouncyDiv>
              <div className="home__about__logo">
                <img
                  src={require("../assets/images/Chlau.png")}
                  alt="Chlaudya"
                />
              </div>
            </BouncyDiv>
          </Col>
          <Col className="home__about">
            <ZoomDiv>
              <p>
                <span>I'm a Frontend Developer </span>
                based in Indonesia, with a background in Industrial Engineering.
                My strength lies on how to build things using methods, tools and
                components which are accurate, effective, safe, efficient and
                sustainable.
              </p>
            </ZoomDiv>
          </Col>
          <Col className="home__about">
            <ZoomDiv>
              <p>
                <br></br>
                If you want to know more about me or my work feel free to email
                me through{" "}
                <a href="mailto:mamuaya.chlaudya@gmail.com">
                  mamuaya.chlaudya@gmail.com
                </a>{" "}
              </p>
            </ZoomDiv>
            <BouncyButton delay={2000}>
              <Link
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                offset={5}
                duration={1500}
              >
                <Button>Check Out My Work </Button>
              </Link>
            </BouncyButton>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
