import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import { Link } from 'react-scroll';
import ProjectImg from '../Image/ProjectImg';

const MoreProjects = () => {
  const { moreProjects } = useContext(PortfolioContext);
  var counter = 0;
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
    <div id="moreProjects">
      <Container>
        <div className="moreProject-wrapper">
          <Fade bottom delay={100} duration={400} distance="30px">
            <h1 className="main-title">Project Archive</h1>
          </Fade>
          <div className="project-list">
          {moreProjects.map((project) => {
            const { title, year, info, tech, url, repo, id } = project;
            counter += 50;
            return (
              <Fade bottom delay={100+counter} duration={300} distance="30px">
              <div className="project-list__object" key={id}>
                  <div className="project-list__object-buttons">
                  <h2 className="logo year">{year || '2020'}</h2>
                  {repo && (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="logo icon"
                      href={repo}
                    >
                      <svg viewBox="6 6 34 34" width="22px" height="22px"><path d="M25 10c-8.3 0-15 6.7-15 15 0 6.6 4.3 12.2 10.3 14.2.8.1 1-.3 1-.7v-2.6c-4.2.9-5.1-2-5.1-2-.7-1.7-1.7-2.2-1.7-2.2-1.4-.9.1-.9.1-.9 1.5.1 2.3 1.5 2.3 1.5 1.3 2.3 3.5 1.6 4.4 1.2.1-1 .5-1.6 1-2-3.3-.4-6.8-1.7-6.8-7.4 0-1.6.6-3 1.5-4-.2-.4-.7-1.9.1-4 0 0 1.3-.4 4.1 1.5 1.2-.3 2.5-.5 3.8-.5 1.3 0 2.6.2 3.8.5 2.9-1.9 4.1-1.5 4.1-1.5.8 2.1.3 3.6.1 4 1 1 1.5 2.4 1.5 4 0 5.8-3.5 7-6.8 7.4.5.5 1 1.4 1 2.8v4.1c0 .4.3.9 1 .7 6-2 10.2-7.6 10.2-14.2C40 16.7 33.3 10 25 10z"/></svg>
                      
                    </a>
                    )}
                    
                    {url && (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="logo icon"
                      href={url}
                    >
                      <svg viewBox="0 -1 24 24" width="23px" height="23px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>
                    </a>
                    )}
                  </div>
                  <div className="project-list__object-text">
                    <h3 className="project-list__object-title">{title || 'Project Title'}</h3>
                    <p className="project-list__object-info1">
                      {info || 'Project Information'}
                    </p>
                    <ul className="project-list__object-info2">
                      {tech && tech.map((t) => {
                        const {id, name} = t;

                        return (
                          <li key={id}>{name}</li>
                        );
                      })}
                    </ul>
                  </div>
              </div>
              </Fade>
            );

          })}
                  
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MoreProjects;
