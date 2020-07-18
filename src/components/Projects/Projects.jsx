import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

const Projects = () => {
  var counter = 0;
  var delayer = 0;
  var cssText = ""; 
  var cssImage = "";
  var cssLogo = "";
  const { projects } = useContext(PortfolioContext);

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
  //viewBox="10 0 40 50" width="35px"
  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="My Featured Projects" type="section-title" />
          {projects.map((project) => {
            const { title, info, tech, url, repo, img, id } = project;
            counter += 1;
            if (counter % 2 === 1)  { cssText="grid-col__text-left"; cssImage="grid-col__image-right"; cssLogo="logo-left"}
            else                    { cssText="grid-col__text-right"; cssImage="grid-col__image-left"; cssLogo="logo-right"}

            delayer += 100;
            return (
              <div className='grid-col' key={id}>
                <Fade
                  bottom
                  duration={400}
                  delay={200+delayer}
                  distance="30px"
                >
                  <div className={cssText + " grid-col__text"}>
                    <h3 className="grid-col__text-title">{title || 'Project Title'}</h3>
                    <div>
                      <p className="main-info">
                        {info ||
                          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi nequo itaque molestiae.'}
                      </p>
                      <ul className="secondary-info">
                      {tech && tech.map((t) => {
                        const {id, name} = t;

                        return (
                          <li key={id}>{name}</li>
                        );
                      })}
                    </ul>
                    </div>
                    <div className="logoSection">
                      {repo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className={"logo " + cssLogo}
                          href={repo}
                        >
                          <svg viewBox="10 10 30 30" width="20px" height="20px"><path d="M25 10c-8.3 0-15 6.7-15 15 0 6.6 4.3 12.2 10.3 14.2.8.1 1-.3 1-.7v-2.6c-4.2.9-5.1-2-5.1-2-.7-1.7-1.7-2.2-1.7-2.2-1.4-.9.1-.9.1-.9 1.5.1 2.3 1.5 2.3 1.5 1.3 2.3 3.5 1.6 4.4 1.2.1-1 .5-1.6 1-2-3.3-.4-6.8-1.7-6.8-7.4 0-1.6.6-3 1.5-4-.2-.4-.7-1.9.1-4 0 0 1.3-.4 4.1 1.5 1.2-.3 2.5-.5 3.8-.5 1.3 0 2.6.2 3.8.5 2.9-1.9 4.1-1.5 4.1-1.5.8 2.1.3 3.6.1 4 1 1 1.5 2.4 1.5 4 0 5.8-3.5 7-6.8 7.4.5.5 1 1.4 1 2.8v4.1c0 .4.3.9 1 .7 6-2 10.2-7.6 10.2-14.2C40 16.7 33.3 10 25 10z"/></svg>
                          
                        </a>
                        )}
                        
                        {url && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className={"logo " + cssLogo}
                          href={url}
                        >

                          <svg viewBox="0 0 24 24" width="24px" height="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>
                        </a>
                        )}
                      </div>
                  </div>
                </Fade>

                <Fade
                  bottom
                  duration={400}
                  delay={300+delayer}
                  distance="30px"
                >
                  <div className={cssImage + " grid-col__image"}>
                    <a
                      href={url || '#!'}
                      target="_blank"
                      aria-label="Project Link"
                      rel="noopener noreferrer"
                    >
                      <ProjectImg alt={title} filename={img} nameClass="projImage"/>
                    </a>
                  </div>
                </Fade>
              </div>
            );

            

          })}

          <Fade bottom duration={300} delay={500} distance="30px">
          <a className="cta-btn cta-btn--hero" href="archive">
              See All Projects
          </a> 
          </Fade>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
