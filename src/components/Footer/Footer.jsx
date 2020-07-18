import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import GithubButtons from '../GithubButtons/GithubButtons';

import { githubButtons } from '../../mock/data';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;
  const { isEnabled } = githubButtons;
//  <div className="social-links">
//          {networks &&
//            networks.map((network) => {
//              const { id, name, url } = network;
//              return (
//                <a
//                  key={id}
//                  href={url || 'https://github.com/cobidev/gatsby-simplefolio'}
//                  rel="noopener noreferrer"
//                  target="_blank"
//                  aria-label={name}
//                >
//                  <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
//                </a>
//              );
//            })}
//        </div>
//{isEnabled && <GithubButtons />}
//© {new Date().getFullYear()} - Template developed by
  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        
        <hr />
        <p className="footer__text">
          <a href="https://github.com/ysaquib" target="_blank" rel="noopener noreferrer">
            Built with {' '}
            <svg viewBox="0 0 24 24" width="12px" height="12px" className="logo"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M13.35 20.13c-.76.69-1.93.69-2.69-.01l-.11-.1C5.3 15.27 1.87 12.16 2 8.28c.06-1.7.93-3.33 2.34-4.29 2.64-1.8 5.9-.96 7.66 1.1 1.76-2.06 5.02-2.91 7.66-1.1 1.41.96 2.28 2.59 2.34 4.29.14 3.88-3.3 6.99-8.55 11.76l-.1.09z"/></svg>
            {' '}and{'  '}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16px" height="16px" className="logo"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M8.7 15.9L4.8 12l3.9-3.9c.39-.39.39-1.01 0-1.4-.39-.39-1.01-.39-1.4 0l-4.59 4.59c-.39.39-.39 1.02 0 1.41l4.59 4.6c.39.39 1.01.39 1.4 0 .39-.39.39-1.01 0-1.4zm6.6 0l3.9-3.9-3.9-3.9c-.39-.39-.39-1.01 0-1.4.39-.39 1.01-.39 1.4 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.6c-.39.39-1.01.39-1.4 0-.39-.39-.39-1.01 0-1.4z"/></svg>
            {'  '}by Yusuf Saquib
          </a>
        </p>

        
      </Container>
    </footer>
  );
};



export default Footer;
