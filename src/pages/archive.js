import React from 'react';
import { Helmet } from 'react-helmet';
import Archive from '../components/Archive';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Yusuf Saquib | Project Archive'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Yusuf Saquib | Project Archive'} />
      </Helmet>
      <Archive />
    </>
  );
};
