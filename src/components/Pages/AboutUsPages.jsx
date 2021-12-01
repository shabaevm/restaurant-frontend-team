import React from 'react';
import AboutUs from '../About/AboutUs';
import Header from '../Header';
import cl from '../Header/header.module.css';

const AboutUsPages = () => {
  return (
    <div className={cl.PageImage}>
      <Header/>
      <AboutUs/>
    </div>
  );
};

export default AboutUsPages;