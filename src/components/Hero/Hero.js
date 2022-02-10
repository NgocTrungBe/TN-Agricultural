import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../../App.css';
import Categories from './Categories';
import SearchBox from './SearchBox';
import HeroPhone from './HeroPhone';


function Hero() {

    const location = useLocation();
    
    return (
        <div className="hero">
            <div className="container">
              <div className="hero__content">
                <div className="hero__content--left">
                  <Categories></Categories>
                </div>
                <div className="hero__content--right">
                  <SearchBox></SearchBox>
                  <HeroPhone></HeroPhone>
                 
                </div>
              </div>
              {
                location.pathname === '/' ?
                <div className="hero__item">
                    <div className="hero__item__text">
                         <span>nông sản</span>
                         <h4>Nông sản sạch <br/> 100% tự nhiên</h4>
                         <p>nhận và giao hàng miễn phí có sẵn</p>
                         <a className="btn shop-now-btn">Mua ngay</a>
                    </div>
                </div>: ""
              }
            </div>
        </div>
    );
}

export default Hero;