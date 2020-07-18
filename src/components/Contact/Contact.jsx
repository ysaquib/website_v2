import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Get in Touch" type="section-title-large"  />
        <Fade bottom duration={500} delay={400} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || 'Whether you have a question, or just want to say hi, I\'m always happy to talk. Just send me an email, and I\'ll get back to you as soon as I can!'}
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--hero"
              href={email ? `mailto:${email}` : `mailto:yusufsaquib@gmail.com'`}
            >
              {btn || "Let's Talk"}
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
