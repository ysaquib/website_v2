import React, { useContext, useState, useEffect, useLayoutEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import Fade from 'react-reveal/Fade';

import LogoImg from '../Image/LogoImg';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { header } = useContext(PortfolioContext);
  // var scrollListener = newScrollListener();
  var delayer = 400;
  var page = ''
  var scrollVal = window.pageYOffset;//window.pageYOffset || document.documentElement.scrollTop

  const { logo, quicklinks, resume, btn } = header;
  
  var isDesktop;
  var isMobile;
  var isOpen = false;

      if (window.innerWidth > 769) {
      isDesktop = true;
      isMobile = false;
    } else {
      isDesktop = false;
      isMobile = true;
    }

  useEffect(() => {
    
    document.addEventListener('scroll', _ => {
      scrollVal = window.pageYOffset;
      if (isDesktop) {
        console.log(isDesktop + " " + isMobile);
        var h = (scrollVal > 0) ? '7rem' : '10rem';
        var shad = (scrollVal > 0) ? 'rgba(2, 12, 27, 0.7) 0px 10px 30px -10px' : 'rgba(2, 12, 27, 0) 0px 20px 30px -20px'
        document.getElementById('header-bar').style.setProperty('height', h);
        document.getElementById('header-bar').style.setProperty('box-shadow', shad);
      }
      else if (isMobile && !isOpen) {
        console.log(isDesktop + " " + isMobile);
        var h = (scrollVal > 0) ? '7rem' : '10rem';
        var shad = (scrollVal > 0) ? 'rgba(2, 12, 27, 0.7) 0px 10px 30px -10px' : 'rgba(2, 12, 27, 0) 0px 20px 30px -20px'
        document.getElementById('header-bar').style.setProperty('height', h);
        document.getElementById('header-bar').style.setProperty('box-shadow', shad);
      }
    });
  }, []);
  //<LogoImg alt="Logo" filename='profile.jpg'/>
  if (isDesktop) {
    return (
      <header className="header-bar" id="header-bar">
          <nav className="header-nav">
            <Fade top duration={400} delay={200} distance="30px">
              <div className="logo">
                <a href={"https://www.yusufsaquib.com"}>
                  <svg className="mainLogo" viewBox="0 0 38 38" width="35px" height="35px"><path d="M256.31,274.38a18.06,18.06,0,1,1,12.78-5.29A18,18,0,0,1,256.31,274.38Z" transform="translate(-237.31 -237.31)" className="mainLogo-background"/><path d="M256.31,239.17a17,17,0,1,1-6.67,1.34,17.05,17.05,0,0,1,6.67-1.34m0-1.86a19,19,0,1,0,19,19,19,19,0,0,0-19-19Z" transform="translate(-237.31 -237.31)"/><path d="M255.05,268.1v-8a.23.23,0,0,0,0-.11l-7.76-12.43a.2.2,0,0,1,.17-.31h2.94a.2.2,0,0,1,.17.09l6,9.47a.21.21,0,0,0,.35,0l5.42-9.46a.22.22,0,0,1,.18-.1h2.71a.2.2,0,0,1,.18.3L258.19,260a.17.17,0,0,0,0,.1v8a.2.2,0,0,1-.2.2h-2.71A.2.2,0,0,1,255.05,268.1Z" transform="translate(-237.31 -237.31)"/></svg>
                </a>
              </div>
            </Fade>
            <div className="links">
              <ol>
              {quicklinks && quicklinks.map((qlink) => {
                const {id, title, link} = qlink;
                delayer -= 100;
                page = window.location.href.split('/').pop()
                if (page === 'archive') 
                  return (
                    <Fade top duration={400} delay={200 + delayer} distance="30px" key={id}>
                      <li key={id}>
                        <a href={"/#" + link} className="nav-link">
                          {title}
                        </a>
                      </li>
                    </Fade>
                    );
                else
                  return(
                    <Fade top duration={400} delay={200 + delayer} distance="30px" key={id}>
                      <li key={id}>
                        <Link to={link} className="nav-link" smooth duration={500}>
                          {title}
                        </Link>
                      </li>
                    </Fade>
                    );
                })
              }
              </ol>
              <Fade top duration={400} delay={200} distance="30px">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn-small nav-link-button"
                href={resume}
              >
                {btn || "Resume"}
              </a>
              </Fade>
            </div>
          </nav>
      </header>
    );
  } else {
    return (
      <header className="header-bar" id="header-bar">

        <nav className="header-nav" id="header-nav">
          <Fade top duration={400} delay={200} distance="30px">
            <div className="logo">
              <a href={"https://www.yusufsaquib.com"}>
                <svg className="mainLogo" viewBox="0 0 38 38" width="35px" height="35px"><path d="M256.31,274.38a18.06,18.06,0,1,1,12.78-5.29A18,18,0,0,1,256.31,274.38Z" transform="translate(-237.31 -237.31)" className="mainLogo-background"/><path d="M256.31,239.17a17,17,0,1,1-6.67,1.34,17.05,17.05,0,0,1,6.67-1.34m0-1.86a19,19,0,1,0,19,19,19,19,0,0,0-19-19Z" transform="translate(-237.31 -237.31)"/><path d="M255.05,268.1v-8a.23.23,0,0,0,0-.11l-7.76-12.43a.2.2,0,0,1,.17-.31h2.94a.2.2,0,0,1,.17.09l6,9.47a.21.21,0,0,0,.35,0l5.42-9.46a.22.22,0,0,1,.18-.1h2.71a.2.2,0,0,1,.18.3L258.19,260a.17.17,0,0,0,0,.1v8a.2.2,0,0,1-.2.2h-2.71A.2.2,0,0,1,255.05,268.1Z" transform="translate(-237.31 -237.31)"/></svg>
              </a>
            </div>
          </Fade>
          <Fade top duration={400} delay={200} distance="30px">
          <div className="logo">
            <svg viewBox="0 0 24 24" 
              onClick={() => {isOpen = !isOpen; 
                              isOpen ? document.getElementById('header-bar').classList.add("open") : document.getElementById('header-bar').classList.remove("open");
                              isOpen ? document.getElementById('arrow').style.setProperty('transform','rotate(180deg)') : document.getElementById('arrow').style.setProperty('transform','rotate(0deg)');
                              isOpen ? document.getElementById('links').classList.add("link-open") : document.getElementById('links').classList.remove("link-open")}} 
              className="arrowIcon" id="arrow" width="48px" height="48px"><path d="M24 24H0V0h24v24z" fill="none" opacity=".87"/><path d="M15.88 9.29L12 13.17 8.12 9.29c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0z"/></svg>
          </div>
          </Fade>
        </nav>
        <div className="mobile-links" id="links">
          <ol>
            {quicklinks && quicklinks.map((qlink) => {
              const {id, title, link} = qlink;
              delayer -= 100;
              page = window.location.href.split('/').pop()
              if (page === 'archive') 
                return (
                  <Fade top duration={400} delay={200 + delayer} distance="30px" key={id}>
                    <li key={id}>
                      <a href={"/#" + link} className="nav-link">
                        {title}
                      </a>
                    </li>
                  </Fade>
                  );
              else
                return(
                  <Fade top duration={400} delay={200 + delayer} distance="30px" key={id}>
                    <li key={id}>
                      <Link to={link} className="nav-link" smooth duration={500}>
                        {title}
                      </Link>
                    </li>
                  </Fade>
                  );
              })
            }
            </ol>
          </div>
      </header>
    );
  }
};



export default Header;
