import React from "react";
import "../assets/style/about.scss";
import { Container, Row, Col } from "reactstrap";
import Bounce from "react-reveal/Bounce";
import Tada from "react-reveal/Tada";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import withReveal from "react-reveal/withReveal";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as Antdicon } from "../assets/images/antdesign.svg";
import { ReactComponent as Materialicon } from "../assets/images/material-ui.svg";

const About = () => {
  const Desc = withReveal(
    styled.p`
      text-align: justify;
    `,
    <Flip left delay={2000} />
  );
  const Line = withReveal(
    styled.svg`
      height: 30px;
    `,
    <Fade left delay={1000} />
  );
  const Image = withReveal(
    styled.p`
      text-align: left;
    `,
    <Tada delay={3000} />
  );
  const IconAnimation = withReveal(
    styled.p`
      font-size: 1.1em;
    `,
    <Fade bottom delay={3500} />
  );
  return (
    <div className="about">
      <Container>
        <Row xs="1" md="2">
          <Col md={{ size: 6 }}>
            <h1>
              <Bounce left cascade delay={1500}>
                About Me
              </Bounce>
            </h1>
            <Line>
              <svg>
                <line
                  x1="0"
                  y1="0"
                  x2="400"
                  y2="0"
                  style={{ stroke: "#fff", strokeWidth: "5" }}
                />
              </svg>
            </Line>
            <Desc>
              <p>
                Hello! I'm Chlaudya Mamuaya . . .<br></br>I'm a Web Developer
                who is passionate of creating corporate - centered websites with
                trendy and friendly designs. At the same time, I am a flexible
                and extrovert Engineer who is fond of collaborating and working
                with a team in designing products. Because I believe that the
                synergy of a team, creates a healthy working environment which
                is very conducive for learning and professional growth.
                <br></br>
                <br></br>I graduated from De La Salle University Manado with a
                Bachelors Degree in Industrial Engineering last October 2019.
                And I have continuously developed my skills and knowledge as a
                developer through various scholarship programs like Glints
                Academy of Singapore.
              </p>
            </Desc>
            {/* <Button outline color="info">
              {" "}
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
            </Button> */}
            <IconAnimation>
              <p>Some languages and technologies in my toolbox:</p>
              <ul className="about__skills">
                <li className="about__skill">
                  <FontAwesomeIcon
                    icon={["fab", "react"]}
                    className="skill__icon"
                  />
                  <span>React</span>
                </li>
                <li className="about__skill">
                  <FontAwesomeIcon
                    icon={["fab", "html5"]}
                    className="skill__icon"
                  />
                  <span>HTML</span>
                </li>
                <li className="about__skill">
                  <FontAwesomeIcon
                    icon={["fab", "js-square"]}
                    className="skill__icon"
                  />
                  <span>JavaScript</span>
                </li>
                <li className="about__skill">
                  <FontAwesomeIcon
                    icon={["fab", "sass"]}
                    className="skill__icon"
                  />
                  <span>S(CSS)</span>
                </li>
                <li className="about__skill">
                  <FontAwesomeIcon
                    icon={["fab", "bootstrap"]}
                    className="skill__icon"
                  />
                  <span>Bootstrap</span>
                </li>
                <li className="about__skill">
                  <Antdicon className="skill__icon" />
                  <span>Ant design</span>
                </li>
                <li className="about__skill">
                  <Materialicon className="skill__icon" />
                  <span>Material UI</span>
                </li>
                <li className="about__skill">
                  <FontAwesomeIcon
                    icon={["fab", "git-square"]}
                    className="skill__icon"
                  />
                  <span>Git</span>
                </li>
                <li className="about__skill">
                  <FontAwesomeIcon
                    icon={["fab", "gitlab"]}
                    className="skill__icon"
                  />
                  <span>Gitlab</span>
                </li>
                <li className="about__skill">
                  <FontAwesomeIcon
                    icon={["fab", "github"]}
                    className="skill__icon"
                  />
                  <span>Github</span>
                </li>
              </ul>
            </IconAnimation>
          </Col>
          <Col md={{ size: 6 }}>
            <Image>
              <img alt="chlaudya" src={require("../assets/images/me.png")} />
            </Image>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default About;
