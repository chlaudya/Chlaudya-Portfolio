import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../assets/style/portfolio.scss";
import Zoom from "react-reveal/Zoom";
import withReveal from "react-reveal/withReveal";
import Fade from "react-reveal/Fade";
import styled from "styled-components";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from "reactstrap";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

const Portfolio = () => {
  const Title = withReveal(
    styled.h1`
      font-size: 1.5em;
      text-align: left;
      color: palevioletred;
    `,
    <Fade left delay={1000} />
  );
  const Desc = withReveal(
    styled.h5`
      text-align: left;
    `,
    <Fade left delay={1500} />
  );
  const Line = withReveal(
    styled.svg`
      height: 30px;
    `,
    <Fade left delay={2700} />
  );
  const List = withReveal(
    styled.p`
      text-align: left;
    `,
    <Zoom delay={3000} />
  );
  const slides = [
    {
      title: "Sayembara",
      description:
        "Sayembara is a platform where you can expand your creativity, enhance the design of your business venture and earn additional income.",
      image: require("../assets/images/sayembara.png"),
      link: "http://sayembara-ga6.herokuapp.com/",
      github: "http://youtube.com",
    },
    {
      title: "Movie App",
      description:
        "Find,Read reviews, give ratings and leave a review for your favorite movie. ",
      image: require("../assets/images/movie-app.png"),
      link: "http://google.com",
      github: "http://google.com",
    },
    {
      title: "Todo App",
      description:
        "Sometimes our stop-doing list needs to be bigger than our to-do list. Let's Create your todo list! ",
      image: require("../assets/images/todo-app.png"),
      link: "http://google.com",
      github: "http://google.com",
    },
  ];
  return (
    <div className="portfolio">
      <Zoom>
        <Slider>
          {slides.map((slide, index) => (
            <div key={index}>
              <Container>
                <Row xs="1" md="2">
                  <Col md={{ size: 5 }}>
                    <Title>
                      <h1>{slide.title}</h1>
                    </Title>
                    <Line>
                      <svg>
                        <line
                          x1="0"
                          y1="0"
                          x2="100"
                          y2="0"
                          style={{ stroke: "#12bcd6", strokeWidth: "10" }}
                        />
                      </svg>
                    </Line>
                    <Desc>
                      <h5 style={{ paddingTop: "2%" }}>{slide.description}</h5>
                    </Desc>
                    <List>
                      <ListGroup horizontal>
                        <ListGroupItem>
                          <a href={slide.link}>
                            <svg
                              width="3em"
                              height="3em"
                              viewBox="0 0 16 16"
                              class="bi bi-link"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
                              <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
                            </svg>
                          </a>
                        </ListGroupItem>
                        <ListGroupItem>
                          <a href={slide.github}>
                            <svg
                              width="3em"
                              height="3em"
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fab"
                              data-icon="github"
                              class="svg-inline--fa fa-github fa-w-16"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 496 512"
                            >
                              <path
                                fill="currentColor"
                                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                              ></path>
                            </svg>
                          </a>
                        </ListGroupItem>
                      </ListGroup>
                      <ListGroup horizontal style={{ padding: "5% 0" }}>
                        <ListGroupItem>
                          <ListGroupItemHeading>
                            {" "}
                            <h6>Role</h6>
                          </ListGroupItemHeading>
                          <ListGroupItemText>
                            <h4>Frontend Developer</h4>
                          </ListGroupItemText>
                        </ListGroupItem>
                        <ListGroupItem>
                          <ListGroupItemHeading>
                            {" "}
                            <h6>Year</h6>
                          </ListGroupItemHeading>
                          <ListGroupItemText>
                            <h4>2020</h4>
                          </ListGroupItemText>
                        </ListGroupItem>
                      </ListGroup>
                    </List>
                  </Col>
                  <Col md={{ size: 7 }}>
                    <Fade right delay={2500}>
                      <img
                        src={slide.image}
                        alt="portfolio"
                        style={{ width: "100%" }}
                      />
                    </Fade>
                  </Col>
                </Row>
              </Container>
            </div>
          ))}
        </Slider>
      </Zoom>
    </div>
  );
};
export default Portfolio;
