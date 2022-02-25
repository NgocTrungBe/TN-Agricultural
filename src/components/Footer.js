import React from 'react';
import {Link} from 'react-router-dom';
import Grid from './Grid/Grid';


function Footer(props) {

    const footerAboutLinks = [
        {
            display: "Giới thiệu",
            path: "/about"
        },
        {
            display: "Liên hệ",
            path: "/about"
        },
        {
            display: "Tuyển dụng",
            path: "/about"
        },
        {
            display: "Tin tức",
            path: "/about"
        },
        {
            display: "Hệ thống cửa hàng",
            path: "/about"
        }
    ]
    
    const footerCustomerLinks = [
        {
            display: "Chính sách đổi trả",
            path: "/about"
        },
        {
            display: "Chính sách bảo hành",
            path: "/about"
        },
        {
            display: "Chính sách hoàn tiền",
            path: "/about"
        }
    ]
    return (
        <div className="footer">
           <div className="container">
             <Grid col={4}
                   mdCol={3}
                   smCol={1}
                   gap={20}
             >
               <div>
                   <div className="footer__title">
                       Tổng đài hỗ trợ
                   </div>
                   <div className="footer__content">
                       <p>
                           Liên hệ đặt hàng <strong>02193939392282882</strong>
                       </p>
                       <p>
                            Thắc mắc đơn hàng <strong>0123456789</strong>
                        </p>
                        <p>
                            Góp ý, khiếu nại <strong>0123456789</strong>
                        </p>
                   </div>
               </div>

               <div>
                   <div className="footer__title">
                       Về TN Agricultural
                   </div>
                   <div className="footer__content">
                   {
                        footerAboutLinks.map((item, index) => (
                            <p key={index}>
                                <Link to={item.path}>
                                    {item.display}
                                </Link>
                            </p>
                        ))
                    }
                   </div>
               </div>

               <div>
                    <div className="footer__title">
                        Chăm sóc khách hàng
                    </div>
                    <div className="footer__content">
                        {
                            footerCustomerLinks.map((item, index) => (
                                <p key={index}>
                                    <Link to={item.path}>
                                        {item.display}
                                    </Link>
                                </p>
                            ))
                        }
                    </div>
                </div>
                <div className="footer__about">
                    <p>
                        <Link to="/">
                           <img className="footer__logo" src="data:image/webp;base64,UklGRpgDAABXRUJQVlA4TIwDAAAvdkAMEO/BJpJkK72vXvT4ZqS4w78Aam04jiRJarJ3X/C6wSD8N0lqto0kSak5fjws8o+QCI5hE9m2E36dOGS6bAJrWKJCBH0SkBQ86JkfCJ731Wu9DYoxhk1iYOGSWLi2AMTIUCbp2vbvvU4Zlu97fkrCV1AqChChRlVJEpY17VzODKoiVZlcTPof1Zj/kOHNnMe9fc+x9IOw1RQzNUVBYaC8NAIVKIrgiYj6/3UEbdu22tjRVkQIwcY5lHHsfHMOpv//w84phDxab/0Q0f8JQOGPP35D8ck1dvJ7Sp+/Fpw/57Od+JFSSh+/Kye3OeebPUnpDYCr55xzft6JL1p6i5usn+/Du5TSp5RS+vPpyOU+fEopfTyklNK/Oef7nPPVPiT5TvyVc77bj4NySCm9vs93jznni314LdLrlNL7+6ernHM+2Yfvyivl+mfO+RE7eRCvDym9ur7OOeeLvfhdvH+f0t+XOef8gN38Jl6l9xc55/xwuh/4fkjpx4d/cs755hQ72VtHki9edqfnl+enKO8nF0hycaZvyhaqfRHVqcSQpFMMZVdiAgt9h/LGBBa7okjdVmD8JdqFK21R57mybDoSaiy/QgxcbQsGri7zR9hXoNmuWVhxOjLwuHPOrYokGYStEdrNLNWlB9CaoLBT2qC5HmrTT7ZkErMINei26qha6DEoTnFUB1QOohMcarDfyCoLjvcKI4CO6oDKPUl6ODGvCSI021DtCuAUA8AqM2pbMWEUbFZMgSTtJp2yoHRQHICgxGpBdGiVYYUZBbstjDIVRSUAkdKj9kCSAYAX8xo44beYlLEICoFOcQpLj8zCApgEmzVR0GzglK6OUUythnIAEJVhDYxg/O8ZlAYAgnCr4IWrNyvDFraWEzOkFWxXdYJjNaOYolbxQKc4xUhf0lKOSq+MqzCJ0NQalKVoUGYgKmyE6kpGpXxZ1wSSnGu1CmOJU0YAQTF1lgpsV6EXdJWwKK6gp9oAsEpoa7SsOa7DLNQag0J7JAbFAkBUuLQVpipLhTZsgUWh6wG0hmpoBazCYFrRLgVe6Y57wXYdxk1iUFYOUBuvkPTOeeoAIuWM45MyVYDbAl2FAUdjOFIMYFLGgqj4GnETxLAiDChs3boAIChtAbxgrACzCRpbZFuUD74smAboKReUWmWq0fhNgGacPUnvxhbro3FeLM50kFYxRb3ia6Db6H8TAQ==" alt=""/>
                        </Link>
                    </p>
                    <p>
                        Hướng đến mục tiêu mang lại nông sản sạch chất lượng cho hàng triệu người tiêu dùng Việt. Hãy cùng TN Agricultural hướng đến một cuộc sống năng động, tích cực hơn.
                    </p>
                </div>
             </Grid>
           </div>
        </div>
    );
}

export default Footer;