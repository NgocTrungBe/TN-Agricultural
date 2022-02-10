import React from 'react';
import {IoMail, IoLocation} from 'react-icons/io5';
import '../../App.css';
function HeaderTop() {
    return (
         
        <div className="header__top">
            <div className="container">
            <div className="header__top__content">
            <ul className="header__top--left">
                        <li>
                            <span>
                            <IoMail></IoMail>
                            </span>
                            Bengoctrung23@gmail.com
                        </li>
                        <li><span>
                            <IoLocation></IoLocation>
                            </span>
                            CuM'gar, DakLak
                        </li>
            </ul>
            <div className="header__top--right">
                  <a href="#">Đăng Ký</a>
                  <span>|</span>
                    <a href="#">Đăng Nhập</a>
              </div>
            </div>
            </div>   
                        
        </div>
        
      
    );
}

export default HeaderTop;