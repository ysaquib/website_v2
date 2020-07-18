import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { technologies, img, paragraphOne, paragraphTwo, paragraphThree } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" type="section-title" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={400} delay={300} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'P1'}
                </p>
                <br />
                <br />
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    ''}
                </p>
                
                
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            
              <div className="about-wrapper__info">
              <Fade bottom duration={400} delay={500} distance="30px">
                <p className="about-wrapper__info-text">
                  {paragraphThree || ''}
                </p>
                <ul className="about-wrapper__info-text techlist">
                  {technologies &&
                    technologies.map((tech) => {
                               const {id, name} = tech;
                               return (
                                 <li key={id}>{name}</li>
                               );
                             })}
                </ul>
                </Fade>
                <Fade bottom duration={400} delay={700} distance="30px">
                <div className="about-links">
                  <p> <a target="_blank" rel="noopener noreferrer" href={`mailto:yusufsaquib@gmail.com`}>email</a><span className="separator">·</span>
                      <a target="_blank" rel="noopener noreferrer" href="https://github.com/ysaquib">github</a><span className="separator">·</span>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ysaquib/">linkedin</a></p>
                </div>
                </Fade>
              </div>
            
          </Col>
        </Row>
      </Container>
    </section>
  );
};

//<AboutImg alt="profile picture" filename={img} />

export default About;
