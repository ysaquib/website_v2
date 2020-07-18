import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta, paragraph, resume } = hero;

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

// <!-- ={isDesktop} bottom={isMobile} -->

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade bottom duration={400} delay={800} distance="30px">
          <h2 className="hero-subheading">
            <span className="subheading-color-main">{title || 'Hi, my name is'}{' '}</span>
          </h2>
        </Fade>

        <Fade bottom duration={400} delay={900} distance="30px">
          <h1 className="hero-title">
            {name || 'Yusuf Saquib.'}
          </h1>
        </Fade>

        <Fade bottom duration={400} delay={1000} distance="30px">
          <h1 className="hero-title hero-subtitle">
            {subtitle || "I make things for fun."}
          </h1>
        </Fade>

        <Fade bottom duration={400} delay={1100} distance="25px">
          <p className="hero-paragraph">
            {paragraph || "I am a Junior Computer Science student studying at Carnegie Mellon University with a minor in Business Administration, expected to graduate in the Spring of 2022."}
          </p>
        </Fade>

        <Fade bottom duration={400} delay={1200} distance="25px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <a target="_blank" rel="noopener noreferrer" href={resume}>
                {cta || 'See My Resume'}
              </a>
            </span>
          </p>


        </Fade>

      </Container>
    </section>
  );
};

export default Header;
