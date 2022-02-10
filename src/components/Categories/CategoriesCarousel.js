import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

import {IoChevronBackSharp,IoChevronForwardSharp} from 'react-icons/io5';



function PrevButton(props){
 const { className, style, onClick } = props;
  return (
    <div  
       className={className}
       style={{ ...style}}
       onClick={onClick}>
       <IoChevronBackSharp></IoChevronBackSharp>
    </div>
     

  );
}
function NextButton(props){
    const { className, style, onClick } = props;
     return (
       <div  
          className={className}
          style={{ ...style}}
          onClick={onClick}>
          <IoChevronForwardSharp></IoChevronForwardSharp>
       </div>
        
   
     );
   }
   


function CategoriesCarousel() {

    
    let settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
        // cssEase: "linear",
        nextArrow:<NextButton/>,
        prevArrow: <PrevButton/>
      };
    return (
        <div>
            <Slider {...settings}>

              <div className="item">
                     <div className="item__bg" style={{backgroundImage:`url(${require("../../images/3c5f77a78c3c74c31d0c93667fa397d4.jpg")})` }}>

                     </div>
                     <div className="item__name">
                         <a href="#">Cà phê</a>
                     </div>
                </div>  
                <div className="item">
                     <div className="item__bg" style={{backgroundImage:`url(${require("../../images/ca-phe-1601078726.jpg")})` }}>

                     </div>
                     <div className="item__name">
                         <a href="#">Bơ</a>
                     </div>
                </div>
                <div className="item">
                     <div className="item__bg" style={{backgroundImage:`url(${require("../../images/eb338aae96f2526a76f401567988ce4a.jpg")})` }}>
                     </div>
                     <div className="item__name">
                         <a href="#">Hồ Tiêu</a>
                     </div>
                </div>
                <div className="item">
                     <div className="item__bg" style={{backgroundImage:`url(${require("../../images/mau-bao-bi-hat-dieu-dep.jpg")})` }}>

                     </div>
                     <div className="item__name">
                         <a href="#">Cacao</a>
                     </div>
                </div>
                <div className="item">
                     <div className="item__bg" style={{backgroundImage:`url(${require("../../images/tải xuống.jpg")})` }}>

                     </div>
                     <div className="item__name">
                         <a href="#">Hạt Điều</a>
                     </div>
                </div>
                <div className="item">
                     <div className="item__bg" style={{backgroundImage:`url(${require("../../images/ca-phe-1601078726.jpg")})` }}>

                     </div>
                     <div className="item__name">
                         <a href="#">Sắn</a>
                     </div>
                </div>
                <div className="item">
                     <div className="item__bg" style={{backgroundImage:`url(${require("../../images/ca-phe-1601078726.jpg")})` }}>

                     </div>
                     <div className="item__name">
                         <a href="#">Sắn</a>
                     </div>
                </div>
               
               
            </Slider>
        </div>
    );
}

export default CategoriesCarousel;