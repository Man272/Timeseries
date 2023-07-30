import React, { useState } from 'react';
import './page2.css';
import img1 from '../assets/Matplotlib.png'
import img2 from '../assets/Pandas.png'
import img3 from '../assets/Numpy.png'
import coi1 from '../assets/coi1.png'
import coi2 from '../assets/coi2.png'
import coi3 from '../assets/coi3.png'
import coi4 from '../assets/coi4.png'
import coi5 from '../assets/coi5.png'
import coi6 from '../assets/coi6.png'
import coi7 from '../assets/coi7.png'
import coi8 from '../assets/coi8.png'
import coi9 from '../assets/coi9.png'
import coi10 from '../assets/coi10.png'


const images = [
  coi1,
  coi2,
  coi3,
  coi4,
  coi5,
  coi6,
  coi7,
  coi8,
  coi9,
  coi10,
];


const Page2 = () => {

  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <div className='page2-container'>
      <div className='line4'>
        <div className='title4'>
          <div className='text-center'>
            <h1>Output</h1>
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
      <div className='line3'>
        <div className='title3'>
          <div className='text-center'>
            <h2>Python standard library</h2>
          </div>
          <div className='box1'>
            <div className='su-container'>
            <div className='SU'>
              <img src={img1} alt="Matplotlib"/>
              <h5>Matplotlib</h5>
            </div>
            <div className='SU'>
              <img src={img2} alt="Pandas"/>
              <h5>Pandas</h5>
            </div>
            </div>
            <div className='su-container'>
            <div className='SU'>
              <img src={img3} alt="Numpy"/>
              <h5>Numpy</h5>
            </div>
            </div>
          </div>
        </div>
        <div className='title8'>
          <div className='text-center'>
            <h1>TIME SERIES MODELS</h1>
          </div>
          <div className='box2'>
            <p>AR(Auto-Regressive)Model</p>
            <p>MA(MovingAverage)Model</p>
            <p>ARMA(AutoRegressiveMovingAverage)Model</p>
            <p>ARIMA(Auto-RegressiveIntegratedMovingAverage)Model</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
