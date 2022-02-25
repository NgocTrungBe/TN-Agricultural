import React, { useEffect, useState, useRef } from 'react';
import {IoMenuSharp,IoChevronDownSharp} from 'react-icons/io5';
import $ from 'jquery';
import { Link } from 'react-router-dom';
function Categories(props) {
   

    const categories = [
        {
            display: "Cafe",
            path:"/"
        },
        {
            display: "Hồ Tiêu",
            path:"/"

        },
        {
            display: "Hạt Điều",
            path:"/"

        },
        {
            display: "Bơ",
            path:"/"

        },
        {
            display: "Cacao",
            path:"/"

        }
    ]
    const cateRef = useRef(null);

    const categoriesToggle = () =>{
        cateRef.current.classList.toggle('open');
    }
    
  
    return (
        <div className="categories" ref={cateRef} onClick={categoriesToggle}>
            <div className="categories__title">
                 <span className="menu-icon"><IoMenuSharp></IoMenuSharp></span>
                 <h3>Danh mục</h3>
                 <span className="down-icon"><IoChevronDownSharp></IoChevronDownSharp></span>
               
            </div>
            <ul className="categories__list">
                {
                    categories.map((item,index) =>(
                        <li key={index} className="categories__list__item"><Link to={item.path}>{item.display}</Link></li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Categories;