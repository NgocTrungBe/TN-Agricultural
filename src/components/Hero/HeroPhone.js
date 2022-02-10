import React from 'react';
import {IoCallSharp} from 'react-icons/io5';
function HeroPhone() {
    return (
        <div className="hero__phone">
            <div className="hero__phone__icon">
              <IoCallSharp></IoCallSharp>
            </div>
            <div className="hero__phone__text">
              <h5>+35239888888</h5>
              <span>Hỗ trợ 24/7</span>
            </div>
        </div>
    );
}

export default HeroPhone;