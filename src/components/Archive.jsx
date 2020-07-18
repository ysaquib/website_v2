import React, { useState, useEffect } from 'react';

import MoreProjects from './MoreProjects/MoreProjects';

import Footer from './Footer/Footer';
import Header from './Header/Header';

import { PortfolioProvider } from '../context/context';

import { moreProjectsData, footerData, headerData } from '../mock/data';

function Archive() {
  const [moreProjects, setMoreProjects] = useState([]);

  const [footer, setFooter] = useState({});
  const [header, setHeader] = useState({});

  useEffect(() => {
    setMoreProjects([...moreProjectsData]);
    setFooter({ ...footerData });
    setHeader({ ...headerData });
  }, []);

  return (
    <PortfolioProvider value={{ header, moreProjects, footer }}>
      <Header />
      <MoreProjects />
      <Footer />
    </PortfolioProvider>
  );
}

export default Archive;
