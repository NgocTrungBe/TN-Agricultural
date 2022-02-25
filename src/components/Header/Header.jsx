import React, { useRef } from 'react';
import {Link, useLocation} from 'react-router-dom';
import {IoMail, IoLocation,IoBag, IoHeartOutline,IoPersonSharp,IoPersonAddSharp,IoCloseSharp, IoMenu} from 'react-icons/io5';
function Header(props) {

    const mainNavs = [
        {
            display:"Trang Chủ",
            path:'/'
        },
        {
            display:"Sản Phẩm",
            path:'/Catalog'
        },
        {
            display:"Bài Viết",
            path:'/Post'
        },
        {
            display:"Liên Hệ",
            path:'/Contact'
        }
    ];
    const {pathname} = useLocation();
    const activeNav = mainNavs.findIndex(e => e.path === pathname);

    const menuRef = useRef(null);
    const overlayRef = useRef(null);
    const menuToggle =() => {
        menuRef.current.classList.toggle('active');
        overlayRef.current.classList.toggle('active');
        document.body.classList.toggle('over_hid');
    };


    return (
        <div className="header">
             <div className="humberger-menu__overlay" ref={overlayRef}></div>
            <div className="humberger-menu" ref={menuRef}>
               
                <div className="humberger-menu__logo">
                    <Link to="/">
                        <img src="data:image/webp;base64,UklGRpgDAABXRUJQVlA4TIwDAAAvdkAMEO/BJpJkK72vXvT4ZqS4w78Aam04jiRJarJ3X/C6wSD8N0lqto0kSak5fjws8o+QCI5hE9m2E36dOGS6bAJrWKJCBH0SkBQ86JkfCJ731Wu9DYoxhk1iYOGSWLi2AMTIUCbp2vbvvU4Zlu97fkrCV1AqChChRlVJEpY17VzODKoiVZlcTPof1Zj/kOHNnMe9fc+x9IOw1RQzNUVBYaC8NAIVKIrgiYj6/3UEbdu22tjRVkQIwcY5lHHsfHMOpv//w84phDxab/0Q0f8JQOGPP35D8ck1dvJ7Sp+/Fpw/57Od+JFSSh+/Kye3OeebPUnpDYCr55xzft6JL1p6i5usn+/Du5TSp5RS+vPpyOU+fEopfTyklNK/Oef7nPPVPiT5TvyVc77bj4NySCm9vs93jznni314LdLrlNL7+6ernHM+2Yfvyivl+mfO+RE7eRCvDym9ur7OOeeLvfhdvH+f0t+XOef8gN38Jl6l9xc55/xwuh/4fkjpx4d/cs755hQ72VtHki9edqfnl+enKO8nF0hycaZvyhaqfRHVqcSQpFMMZVdiAgt9h/LGBBa7okjdVmD8JdqFK21R57mybDoSaiy/QgxcbQsGri7zR9hXoNmuWVhxOjLwuHPOrYokGYStEdrNLNWlB9CaoLBT2qC5HmrTT7ZkErMINei26qha6DEoTnFUB1QOohMcarDfyCoLjvcKI4CO6oDKPUl6ODGvCSI021DtCuAUA8AqM2pbMWEUbFZMgSTtJp2yoHRQHICgxGpBdGiVYYUZBbstjDIVRSUAkdKj9kCSAYAX8xo44beYlLEICoFOcQpLj8zCApgEmzVR0GzglK6OUUythnIAEJVhDYxg/O8ZlAYAgnCr4IWrNyvDFraWEzOkFWxXdYJjNaOYolbxQKc4xUhf0lKOSq+MqzCJ0NQalKVoUGYgKmyE6kpGpXxZ1wSSnGu1CmOJU0YAQTF1lgpsV6EXdJWwKK6gp9oAsEpoa7SsOa7DLNQag0J7JAbFAkBUuLQVpipLhTZsgUWh6wG0hmpoBazCYFrRLgVe6Y57wXYdxk1iUFYOUBuvkPTOeeoAIuWM45MyVYDbAl2FAUdjOFIMYFLGgqj4GnETxLAiDChs3boAIChtAbxgrACzCRpbZFuUD74smAboKReUWmWq0fhNgGacPUnvxhbro3FeLM50kFYxRb3ia6Db6H8TAQ==" alt="..."/>
                    </Link>

                    <span className="humberger-menu__close" onClick={menuToggle}>
                        <IoCloseSharp></IoCloseSharp>
                    </span>
                </div>
                <div className="humberger-menu__auth">
                    <div className="humberger-menu__auth__item">
                        <span><IoPersonAddSharp></IoPersonAddSharp></span>
                        <Link to="/">Đăng Ký</Link>
                    </div>
                    <div className="humberger-menu__auth__item">
                        <span><IoPersonSharp></IoPersonSharp></span>
                        <Link to="/">Đăng Nhập</Link>
                    </div>
                </div> 
                <div className="humberger-menu__nav">         
                        {
                          mainNavs.map((item,index) =>(
                              <div key={index} 
                                  className={`humberger-menu__nav__item ${index === activeNav ? 'active': ''} `}
                                  onClick={menuToggle}
                                  >
                                  <Link to={`${item.path}`}>{item.display}</Link>
                             </div>
                          ))
                        }
                </div>
                <ul className="humberger-menu__info">
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
                
            </div>
            <div className="header__top">
                <div className="container">
                    <div className="header__top__content">
                            <ul className="header__top__left">
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
                            <div className="header__top__right">
                                    <a href="#">Đăng Ký</a>
                                    <span>|</span>
                                    <a href="#">Đăng Nhập</a>
                            </div>  
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="header__bottom">
                    <div className="header__logo">
                        <Link to="/">
                            <img src="data:image/webp;base64,UklGRpgDAABXRUJQVlA4TIwDAAAvdkAMEO/BJpJkK72vXvT4ZqS4w78Aam04jiRJarJ3X/C6wSD8N0lqto0kSak5fjws8o+QCI5hE9m2E36dOGS6bAJrWKJCBH0SkBQ86JkfCJ731Wu9DYoxhk1iYOGSWLi2AMTIUCbp2vbvvU4Zlu97fkrCV1AqChChRlVJEpY17VzODKoiVZlcTPof1Zj/kOHNnMe9fc+x9IOw1RQzNUVBYaC8NAIVKIrgiYj6/3UEbdu22tjRVkQIwcY5lHHsfHMOpv//w84phDxab/0Q0f8JQOGPP35D8ck1dvJ7Sp+/Fpw/57Od+JFSSh+/Kye3OeebPUnpDYCr55xzft6JL1p6i5usn+/Du5TSp5RS+vPpyOU+fEopfTyklNK/Oef7nPPVPiT5TvyVc77bj4NySCm9vs93jznni314LdLrlNL7+6ernHM+2Yfvyivl+mfO+RE7eRCvDym9ur7OOeeLvfhdvH+f0t+XOef8gN38Jl6l9xc55/xwuh/4fkjpx4d/cs755hQ72VtHki9edqfnl+enKO8nF0hycaZvyhaqfRHVqcSQpFMMZVdiAgt9h/LGBBa7okjdVmD8JdqFK21R57mybDoSaiy/QgxcbQsGri7zR9hXoNmuWVhxOjLwuHPOrYokGYStEdrNLNWlB9CaoLBT2qC5HmrTT7ZkErMINei26qha6DEoTnFUB1QOohMcarDfyCoLjvcKI4CO6oDKPUl6ODGvCSI021DtCuAUA8AqM2pbMWEUbFZMgSTtJp2yoHRQHICgxGpBdGiVYYUZBbstjDIVRSUAkdKj9kCSAYAX8xo44beYlLEICoFOcQpLj8zCApgEmzVR0GzglK6OUUythnIAEJVhDYxg/O8ZlAYAgnCr4IWrNyvDFraWEzOkFWxXdYJjNaOYolbxQKc4xUhf0lKOSq+MqzCJ0NQalKVoUGYgKmyE6kpGpXxZ1wSSnGu1CmOJU0YAQTF1lgpsV6EXdJWwKK6gp9oAsEpoa7SsOa7DLNQag0J7JAbFAkBUuLQVpipLhTZsgUWh6wG0hmpoBazCYFrRLgVe6Y57wXYdxk1iUFYOUBuvkPTOeeoAIuWM45MyVYDbAl2FAUdjOFIMYFLGgqj4GnETxLAiDChs3boAIChtAbxgrACzCRpbZFuUD74smAboKReUWmWq0fhNgGacPUnvxhbro3FeLM50kFYxRb3ia6Db6H8TAQ==" alt="..."/>
                        </Link>
                    </div>
                    <div className="header__nav">         
                        {
                          mainNavs.map((item,index) =>(
                            <div key={index} 
                                 className={`header__nav__item ${index === activeNav ? 'active': ''} `}
                                 
                                 >
                                <Link to={`${item.path}`}>{item.display}</Link>
                                
                            </div>
                          ))
                        }   


                    </div>
                    <div className="header__cart">
                          <span className="header__cart__icon">
                          <IoBag></IoBag>
                          <span className="header__cart__item">20</span>
                          </span>
                         
                    </div>
                    <div className="header__menu" onClick={menuToggle}>
                         <IoMenu></IoMenu>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;