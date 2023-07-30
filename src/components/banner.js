import React from 'react';
import './banner.css';
import BG1 from '../assets/FAbg.png'

const banner = () => {
  return (
    <div className='banner-container'>
        <header className='banner-header'>
          <div className='word'>
          <h1>Time series analysis and forecasting</h1>
          <p>SRET INT 300 - INTERNSHIP 2</p>
          </div>
          <div className='image'>
          <img src={BG1} alt="BG"/>
          </div>
        </header>
    </div>
  );
};

export default banner;
