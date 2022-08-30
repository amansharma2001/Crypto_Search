import React from 'react'

import Crypto from '../../assests/hero-img.png';
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero'>
        <div className="container">
            {/* Left Side */}
            <div className="left">
                <p>Buy & sell Crypto</p>
                <h1>Invest in CryptoCurrency </h1>
                <p>Buy, sell,and store hundreds of CryptoCurrencies</p>
                <div className="input-container">
                    <input type="email" placeholder='Enter your email'/>
                    <button className="btn">Learn More</button>
                </div>
            </div>

            {/* Right Side */}

            <div className="right">
                <div className="img-container">
                    <img src={Crypto} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero