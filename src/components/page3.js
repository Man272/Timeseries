// Import React with the correct version
import React, { useState } from 'react';
import './page3.css';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';

const images = [
  img2,
  img3,
  img1,
];

function Page3() {

  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <div className='page3-container'>
      <div className='line5'>
        <div className='title5'>
          <h1>Result</h1>
          <p>Output in Image</p>
        </div>
      </div>
      <div className='line6'>
        <div className='title6'>
          <div className="slider-container">
            <img src={images[currentImage]} alt={`${currentImage + 1}`} />
          </div>
          <div className="button-container">
            <button className='btn-1' onClick={handlePrev}>Previous</button>
            <button className='btn-1' onClick={handleNext}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page3;
