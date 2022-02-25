import React from 'react';
import PropTypes from 'prop-types';
import{IoEllipsisHorizontalCircleSharp,IoEyeSharp,IoBagAddSharp} from 'react-icons/io5';
import { Link } from 'react-router-dom';
import Grid from '../Grid/Grid';
function ProductCard(props) {
    
    return (
        <div className="product-card">
               <div className="product-card__img" style={{backgroundImage:`url(${props.images[0]})` }}>
                   <ul className="product-card__options">
                        <li><Link to={`/Catalog/${props.slug}`}>
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
               <div className="product-card__content">
                    <h6 className="product-card__title"><a href="#">{props.name}</a></h6>
                    <span className="product-card__price">
                        <del>{props.price}</del>
                    </span>
               </div>
        </div>
        
    );
}
ProductCard.protoTypes= {
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    images: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired

}
export default ProductCard;