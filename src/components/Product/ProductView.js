import React, { useState, useRef, useCallback, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import{IoRemoveOutline,IoAddOutline} from 'react-icons/io5';

function ProductView(props) {
    let product = props.product;
    const [previewImage,setPreviewImage] = useState(product.images[0]);
    const [activeItem,setActiveItem] = useState(0);
    const [activeNav,setActiveNav] = useState(0);
    const [quantity,setQuantity] = useState(1);

    useEffect(()=>{
           setPreviewImage(product.images[0]);
           setQuantity(1);
    },[product])
    let settings = {
        dots: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
     
        // autoplay: true,
        // autoplaySpeed: 2000,
        // cssEase: "linear",
        arrows:false,
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

   const productContentNavs = [
     {
       display:'Thông Tin Sản Phẩm',
       path : '#productInfo'
     },
     {
      display:'Thông Số Sản Phẩm',
      path : '#specification'
    },
    {
      display:'Hướng Dẫn Sử Dụng',
      path : '#instructions'
    }

   ]
   
  
   const handleImageClick = (url,index) =>{
      setPreviewImage(url);
      setActiveItem(index);
      
   }

   const handleNavClick = (index) =>{
    setActiveNav(index);
    
 }
   const updateQuantity = (type) =>{
          if(type === 'plus'){
            setQuantity(quantity +1);
          }
          else{
            setQuantity(quantity -1 < 1 ? 1 : quantity -1);
          }
   }
    return (
        <div className="product">
            <div className="product__images">
                <div className="product__images__box">
                    <div className="product__images__preview" style={{backgroundImage:`url(${previewImage})`}}>
                       
                    </div>

                    <div className="product__slider">
                     {
                       
                        product.images.map((image,index)=>(
                           <div className={`product__slider__item ${activeItem === index ? 'active' : ''}`}>
                              <div key={index} 
                                   className="product__slider__image" 
                                   onClick={() =>handleImageClick(image,index)} 
                                   style={{backgroundImage:`url(${image})`}}>
                              </div>
                           </div>
                        ))

                     }
                    </div>
                </div>
                <div className="product__info">
                    <h2 className="product__info__name">{product.name}</h2>
                    <div className="product__info__code">{`Mã sản phẩm: ${product.name}`}</div>
                    <p className="product__info__overview">{`${product.description}`}</p>
                    <div className="product__info__size">{`Trọng lượng tịnh: 1kg`}</div>
                    <div className="product__info__price">
                          {product.price} ₫
                         <span><del>{product.price} ₫</del></span> 
                    </div>
                    <div className="product__info__quantity">
                        <div className="product__info__quantity__btn" onClick={() => updateQuantity('minus')}>
                              <IoRemoveOutline></IoRemoveOutline>
                        </div>
                        <div className="product__info__quantity__input">
                              {quantity}
                        </div>
                        <div className="product__info__quantity__btn" onClick={() => updateQuantity('plus')}>
                              <IoAddOutline></IoAddOutline>
                        </div>
                       
                    </div>
                    <button id="addToCartBtn">Thêm vào giỏ hàng</button>
                </div>
            </div>

           <div className="product__content">
                <ul className="product__content__nav">
                   {
                     productContentNavs.map((item,index)=>(
                     <li className={activeNav === index ? 'active' : ''}><a onClick={()=>setActiveNav(index)} href={item.path}>{item.display}</a></li>
                     
                     ))
                   }
                </ul>
                <div id="productInfo" className="product__content__item">
                  <div className="product__content__item__title">
                    Thông tin Sản Phẩm
                  </div>
                  <div className="product__content__item__body">
                    {
                       product.description
                    }
                  </div>
                </div>
                <div id="specification" className="product__content__item">
                  <div className="product__content__item__title">
                    Thông số Sản Phẩm
                  </div>
                  <div className="product__content__item__body">
                    <table className="product__specification" cellPadding="0" cellSpacing="0" border="0">
                      <tbody>
                        <tr>
                          <td className="col-info-bg-30">Barcode</td>
                          <td>000000</td>
                        </tr>
                        <tr>
                          <td className="col-info-bg-30">Thương Hiệu</td>
                          <td>{product.brand}</td>
                        </tr>
                        <tr>
                          <td className="col-info-bg-30">Đơn Vị Tính</td>
                          <td>gói</td>
                        </tr>
                        <tr>
                          <td className="col-info-bg-30">Quy Cách Đóng Thùng</td>
                          <td>10 gói / thùng</td>
                        </tr>
                        <tr>
                          <td className="col-info-bg-30">Trọng Lượng Tịnh</td>
                          <td>1kg</td>
                        </tr>
                        <tr>
                          <td className="col-info-bg-30">Hạn Sử Dụng</td>
                          <td>1 năm</td>
                        </tr>
                        <tr>
                          <td className="col-info-bg-30">Xuất Xứ</td>
                          <td>Việt Name</td>
                        </tr>
                        <tr>
                          <td className="col-info-bg-30">Chỉ tiêu chất lượng</td>
                          <td>{`Độ ẩm <= 5%`}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div id="instructions" className="product__content__item">
                  <div className="product__content__item__title">
                    Hướng dẫn sử dụng
                  </div>
                  <div className="product__content__item__body">
                    Pha với nướng nóng
                    sử dụng phin để pha
                  </div>
                </div>
               
           </div>
        </div>
    );
}

export default ProductView;