import React from 'react';
import '../App.css';
import { Button } from './Button';
import './BodySection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/Videos/Video1.mp4' autoPlay loop muted />
      <h1>GET FRESH FRUITS AND VEGETABLES</h1>
      <p>Don't wait anymore?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH VIDEO <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;