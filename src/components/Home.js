import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../assets/style/home.scss";
import styled, { keyframes } from "styled-components";
import { zoomIn, bounceInLeft } from "react-animations";

const Home = ({ id }) => {
  const ZoomDiv = styled.div`
    animation: 2s ${keyframes`${zoomIn}`};
  `;
  const BouncyDiv = styled.div`
    animation: 2s ${keyframes`${bounceInLeft}`};
  `;

  return (
    <div className="home" id={id}>
      <Container>
        <Row xs="1" sm="2" md="3">
          <Col className="home__about">
            <BouncyDiv>
              <img src={require("../assets/images/Chlau.png")} alt="Chlaudya" />
            </BouncyDiv>
          </Col>
          <Col className="home__about">
            <ZoomDiv>
              <p>
                <span>I'm Frontend Developer </span>
                from Indonesia. With the background in Industrial Engineering,
                my strength lies in how to build things using methods, tools and
                components that are rigorous, effective, safe, efficient and
                repeatable.
              </p>
            </ZoomDiv>
          </Col>
          <Col className="home__about">
            <ZoomDiv>
              <p>
                <br></br>
                if you want to know more about me or my work feel free to
                contact me on mamuaya.chlaudya@gmail.com *cheers
              </p>
            </ZoomDiv>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
