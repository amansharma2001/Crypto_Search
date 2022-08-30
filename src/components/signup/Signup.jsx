import React from 'react'
import './SignUp.css';
import Crypto from '../../assests/trade.png';

const SIgnup = () => {
  return (
    <div className='signup'>

        <div className="container">
            {/* Left */}

            <div className="left">
                <img src={Crypto} alt="" />
            </div>

            {/* RIght */}
            <div className="right">
                <h2>Earn with Crypto</h2>
                <p>Earn up to 12% annual rewards on 30+ digital assets. Simply hold your assets in the app to automatically earn rewards at the end of each month with no lockups and no limits.</p>

                <div className="input-container">
                    <input type="email" placeholder='Enter your Email' />
                    <button className="btn">Learn More</button>
                </div>
            </div>

        </div>


    </div>
  )
}

export default SIgnup