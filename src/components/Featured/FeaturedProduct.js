import React from 'react';
import{IoEllipsisHorizontalCircleSharp,IoEyeSharp,IoBagAddSharp} from 'react-icons/io5';
import { Link } from 'react-router-dom';

function FeaturedProduct(props) {
    return (
        <div className="featured-product">
            <div className="featured-product__item">
               <div className="featured-product__item__img" style={{backgroundImage:`url(${require("../../images/3c5f77a78c3c74c31d0c93667fa397d4.jpg")})` }}>
                   <ul className="option">
                        <li><Link to="/Detail">
                             <IoEllipsisHorizontalCircleSharp className="icon">
                                
                             </IoEllipsisHorizontalCircleSharp>
                             <span>Chi tiết</span>
                            </Link>
                        </li>
                        <li><Link to="/Detail">
                             <IoBagAddSharp className="icon"></IoBagAddSharp>
                             <span>Đặt hàng</span>
                            </Link>
                        </li>
                        <li><Link to="/Detail">
                             <IoEyeSharp className="icon"></IoEyeSharp>
                             <span>Xem nhanh</span>
                            </Link>
                        </li>

                   </ul>
               </div>
               <div className="featured-product__item__text">
                   <h6 className="featured-product__item__title"><a href="#">cafe nguyen chat</a></h6>
                   <span className="featured-product__item__price">130.000đ</span>
               </div>
            </div> 
            <div className="featured-product__item">
               <div className="featured-product__item__img" style={{backgroundImage:`url(${require("../../images/eb338aae96f2526a76f401567988ce4a.jpg")})` }}>
               <ul className="option">
                        <li><a href="#">
                             <IoEllipsisHorizontalCircleSharp className="icon"></IoEllipsisHorizontalCircleSharp>
                             <span>Chi tiết</span>
                            </a>
                        </li>
                        <li><a href="#">
                             <IoBagAddSharp className="icon"></IoBagAddSharp>
                             <span>Đặt hàng</span>
                            </a>
                        </li>
                        <li><a href="#">
                             <IoEyeSharp className="icon"></IoEyeSharp>
                             <span>Xem nhanh</span>
                            </a>
                        </li>

                   </ul>
               </div>
               <div className="featured-product__item__text">
                   <h6 className="featured-product__item__title"><a href="#">cafe nguyen chat</a></h6>
                   <span className="featured-product__item__price">130.000đ</span>
               </div>
            </div> 
            <div className="featured-product__item">
               <div className="featured-product__item__img" style={{backgroundImage:`url(${require("../../images/mau-bao-bi-hat-dieu-dep.jpg")})` }}>
               <ul className="option">
                        <li><a href="#">
                             <IoEllipsisHorizontalCircleSharp className="icon"></IoEllipsisHorizontalCircleSharp>
                             <span>Chi tiết</span>
                            </a>
                        </li>
                        <li><a href="#">
                             <IoBagAddSharp className="icon"></IoBagAddSharp>
                             <span>Đặt hàng</span>
                            </a>
                        </li>
                        <li><a href="#">
                             <IoEyeSharp className="icon"></IoEyeSharp>
                             <span>Xem nhanh</span>
                            </a>
                        </li>

                   </ul>
               </div>
               <div className="featured-product__item__text">
                   <h6 className="featured-product__item__title"><a href="#">cafe nguyen chat</a></h6>
                   <span className="featured-product__item__price">130.000đ</span>
               </div>
            </div> 
            <div className="featured-product__item">
               <div className="featured-product__item__img" style={{backgroundImage:`url(${require("../../images/tải xuống.jpg")})` }}>
               <ul className="option">
                        <li><a href="#">
                             <IoEllipsisHorizontalCircleSharp className="icon"></IoEllipsisHorizontalCircleSharp>
                             <span>Chi tiết</span>
                            </a>
                        </li>
                        <li><a href="#">
                             <IoBagAddSharp className="icon"></IoBagAddSharp>
                             <span>Đặt hàng</span>
                            </a>
                        </li>
                        <li><a href="#">
                             <IoEyeSharp className="icon"></IoEyeSharp>
                             <span>Xem nhanh</span>
                            </a>
                        </li>

                   </ul>
               </div>
               <div className="featured-product__item__text">
                   <h6 className="featured-product__item__title"><a href="#">cafe nguyen chat</a></h6>
                   <span className="featured-product__item__price">130.000đ</span>
               </div>
            </div> 

            <div className="featured-product__item">
               <div className="featured-product__item__img" style={{backgroundImage:`url(${require("../../images/3c5f77a78c3c74c31d0c93667fa397d4.jpg")})` }}>
               <ul className="option">
                        <li><a href="#">
                             <IoEllipsisHorizontalCircleSharp className="icon"></IoEllipsisHorizontalCircleSharp>
                             <span>Chi tiết</span>
                            </a>
                        </li>
                        <li><a href="#">
                             <IoBagAddSharp className="icon"></IoBagAddSharp>
                             <span>Đặt hàng</span>
                            </a>
                        </li>
                        <li><a href="#">
                             <IoEyeSharp className="icon"></IoEyeSharp>
                             <span>Xem nhanh</span>
                            </a>
                        </li>

                   </ul>
               </div>
               <div className="featured-product__item__text">
                   <h6 className="featured-product__item__title"><a href="#">cafe nguyen chat</a></h6>
                   <span className="featured-product__item__price">130.000đ</span>
               </div>
            </div> 
            <div className="featured-product__item">
               <div className="featured-product__item__img" style={{backgroundImage:`url(${require("../../images/eb338aae96f2526a76f401567988ce4a.jpg")})` }}>
               <ul className="option">
                        <li><a href="#">
                             <IoEllipsisHorizontalCircleSharp className="icon"></IoEllipsisHorizontalCircleSharp>
                             <span>Chi tiết</span>
                            </a>
                        </li>
                        <li><a href="#">
                             <IoBagAddSharp className="icon"></IoBagAddSharp>
                             <span>Đặt hàng</span>
                            </a>
                        </li>
                        <li><a href="#">
                             <IoEyeSharp className="icon"></IoEyeSharp>
                             <span>Xem nhanh</span>
                            </a>
                        </li>

                   </ul>
               </div>
               <div className="featured-product__item__text">
                   <h6 className="featured-product__item__title"><a href="#">cafe nguyen chat</a></h6>
                   <span className="featured-product__item__price">130.000đ</span>
               </div>
            </div> 
            <div className="featured-product__item">
               <div className="featured-product__item__img" style={{backgroundImage:`url(${require("../../images/mau-bao-bi-hat-dieu-dep.jpg")})` }}>
               <ul className="option">
                        <li><a href="#">
                             <IoEllipsisHorizontalCircleSharp className="icon"></IoEllipsisHorizontalCircleSharp>
                             <span>Chi tiết</span>
                            </a>
                        </li>
                        <li><a href="#">
                             <IoBagAddSharp className="icon"></IoBagAddSharp>
                             <span>Đặt hàng</span>
                            </a>
                        </li>
                        <li><a href="#">
                             <IoEyeSharp className="icon"></IoEyeSharp>
                             <span>Xem nhanh</span>
                            </a>
                        </li>

                   </ul>
               </div>
               <div className="featured-product__item__text">
                   <h6 className="featured-product__item__title"><a href="#">cafe nguyen chat</a></h6>
                   <span className="featured-product__item__price">130.000đ</span>
               </div>
            </div> 
            <div className="featured-product__item">
               <div className="featured-product__item__img" style={{backgroundImage:`url(${require("../../images/tải xuống.jpg")})` }}>
               <ul className="option">
                        <li><a href="#">
                             <IoEllipsisHorizontalCircleSharp className="icon"></IoEllipsisHorizontalCircleSharp>
                             <span>Chi tiết</span>
                            </a>
                        </li>
                        <li><a href="#">
                             <IoBagAddSharp className="icon"></IoBagAddSharp>
                             <span>Đặt hàng</span>
                            </a>
                        </li>
                        <li><a href="#">
                             <IoEyeSharp className="icon"></IoEyeSharp>
                             <span>Xem nhanh</span>
                            </a>
                        </li>

                   </ul>
               </div>
               <div className="featured-product__item__text">
                   <h6 className="featured-product__item__title"><a href="#">cafe nguyen chat</a></h6>
                   <span className="featured-product__item__price">130.000đ</span>
               </div>
            </div> 
        </div>
    );
}

export default FeaturedProduct;