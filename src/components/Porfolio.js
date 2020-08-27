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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      image: "https://www.youtube.com/embed/xCECMFUDp70",
      link: "http://sayembara-ga6.herokuapp.com/",
      gitlab: "https://gitlab.com/glints-academy-6/team-e/front-end",
    },
    {
      title: "Movie App",
      description:
        "Explore and read movie reviews of your kind, provide outstanding ratings and leave great reviews on your favorite movies ",
      image: require("../assets/images/movie-app.png"),
      link: "#",
      gitlab: "https://gitlab.com/chlaudya_m/movie-app-project",
    },
    {
      title: "Todo App",
      description:
        "Sometimes our stop-doing list needs to be longer than our to-do list. Start and create your Todo List with Todo App! ",
      image: require("../assets/images/todo-app.png"),
      link: "#",
      gitlab: "https://gitlab.com/chlaudya_m/todos-project",
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
                          <a href={slide.gitlab}>
                            <FontAwesomeIcon
                              icon={["fab", "gitlab"]}
                              style={{
                                height: "3em",
                                width: "3em",
                                cursor: "pointer",
                              }}
                            />
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
                    {/* <Fade right delay={2500}>
                      <img
                        src={slide.image}
                        alt="portfolio"
                        style={{ width: "100%" }}
                      />
                    </Fade> */}
                    <iframe
                      width="100%"
                      height="100%"
                      className="iframe"
                      title="symbr"
                      src={slide.image}
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                      scrolling="no"
                    ></iframe>
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
