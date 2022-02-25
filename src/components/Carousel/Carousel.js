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
   


function Carousel() {
    let settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
        // cssEase: "linear",
        nextArrow:<NextButton/>,
        prevArrow: <PrevButton/>,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }
          ]
      };
    return (
        <div>
            <Slider {...settings}>
              <div className="item">
                     <div className="item__bg" style={{backgroundImage:`url(${require("../../assets/images/cafe.jpg")})` }}>

                     </div>
                     <div className="item__name">
                         <a href="#">Cà phê</a>
                     </div>
                </div>  
                <div className="item">
                     <div className="item__bg" style={{backgroundImage:`url(${require("../../assets/images/hatdieu.jpg")})` }}>

                     </div>
                     <div className="item__name">
                         <a href="#">Bơ</a>
                     </div>
                </div>
                <div className="item">
                     <div className="item__bg" style={{backgroundImage:`url(${require("../../assets/images/hattieu.jpg")})` }}>
                     </div>
                     <div className="item__name">
                         <a href="#">Hồ Tiêu</a>
                     </div>
                </div>
                <div className="item">
                     <div className="item__bg" style={{backgroundImage:`url(${require("../../assets/images/botnghe.jpg")})` }}>

                     </div>
                     <div className="item__name">
                         <a href="#">Cacao</a>
                     </div>
                </div>
                <div className="item">
                     <div className="item__bg" style={{backgroundImage:`url(${require("../../assets/images/hatdieu.jpg")})` }}>

                     </div>
                     <div className="item__name">
                         <a href="#">Hạt Điều</a>
                     </div>
                </div>
                <div className="item">
                     <div className="item__bg" style={{backgroundImage:`url(${require("../../assets/images/hattieu.jpg")})` }}>

                     </div>
                     <div className="item__name">
                         <a href="#">Sắn</a>
                     </div>
                </div>
                <div className="item">
                     <div className="item__bg" style={{backgroundImage:`url(${require("../../assets/images/botnghe.jpg")})` }}>

                     </div>
                     <div className="item__name">
                         <a href="#">Sắn</a>
                     </div>
                </div>
               
               
            </Slider>
        </div>
    );
}

export default Carousel;