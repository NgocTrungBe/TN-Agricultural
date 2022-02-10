import React, { useEffect } from 'react';
import $ from 'jquery';
import { IoEar } from 'react-icons/io5';

function FeatureNav(props) {
    useEffect(()=>{
        const featuredNavItems = document.querySelectorAll('.featured__nav__list__item ');
        featuredNavItems.forEach((item)=>{
              $(item).click(()=> hanldeNavItemClick(item))
        });
        
    },[])
    
    const hanldeNavItemClick  = (item) =>{
        const featuredNavItemIsActive = $('.featured__nav__list__item.active');
        $(featuredNavItemIsActive).removeClass('active');
        $(item).addClass('active')
    }

    return (
        <div className="featured__nav">
            <ul className="featured__nav__list">
                <li className="featured__nav__list__item active"><a href="#!">Tất cả</a></li>
                <li className="featured__nav__list__item"><a href="#!">Cafe</a></li>
                <li className="featured__nav__list__item"><a href="#!">Hạt Tiêu</a></li>
                <li className="featured__nav__list__item"><a href="#!">Hạt Điều</a></li>
            </ul>
        </div>
    );
}

export default FeatureNav;