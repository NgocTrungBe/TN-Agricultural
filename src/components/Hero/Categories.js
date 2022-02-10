import React, { useEffect, useState } from 'react';
import {IoMenuSharp,IoChevronDownSharp} from 'react-icons/io5';
import $ from 'jquery';
function Categories(props) {
   
    useEffect(()=>{
        $('.categories').on('click',function(){
            $(this).toggleClass('open',3000); 
        });
    },[])

   
  
    return (
        <div className="categories">
            <div className="categories__title">
                 <span className="menu-icon"><IoMenuSharp></IoMenuSharp></span>
                 <h3>Danh mục</h3>
                 <span className="down-icon"><IoChevronDownSharp></IoChevronDownSharp></span>
               
            </div>
            <ul className="categories__list">
              <li className="categories__list__item"><a href="#">Cafe</a></li>
              <li className="categories__list__item"><a href="#">Hồ Tiêu</a></li>
              <li className="categories__list__item"><a href="#">Bơ</a></li>
              <li className="categories__list__item"><a href="#">CaCao</a></li>

            </ul>
        </div>
    );
}

export default Categories;