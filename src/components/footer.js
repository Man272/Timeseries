import React from 'react';
import './footer.css';

const Footer = () => {
  const handleManuelClick = () => {
    window.open('https://manuelfaria2702.netlify.app', '_blank');
  };

  return (
    <div className='footer-container'>
      <p>© MR.MAN27. All Rights Reserved.</p>
      <h1 onClick={handleManuelClick}>@Manuel's_Portfolio</h1>
    </div>
  );
};

export default Footer;
