import React from 'react'
import logoweb from'../../assets/images/logoweb.png'
import './footer.scss'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
              <img className="logoweb" src={logoweb} alt=""/>
                <div className="location">
                  <i className="ri-road-map-line footer__icon" size={20} style={{color:"#fff", marginRight: "2rem"}}></i>
                    <div>
                        <p>District 3,Ho Chi Minh city.</p>
                    </div>
                </div>

                <div className="phone">
                    <h4>
                    <i className="ri-phone-line footer__icon" size={20} style={{color : "#fff", marginRight: "2rem"}}></i>
                    +84968956545
                    </h4>
                </div>

                <div className="email">
                    <h4>
                    <i className="ri-mail-line footer__icon" size={20} style={{color : "#fff", marginRight: "2rem"}}></i>
                    ninhvanphongfp@gmail.com
                    </h4>
                </div>

                <div className="social">
                  <i className="ri-facebook-line footer__icon" size={20} style={{color : "#fff", marginRight: "2rem"}}></i>
                  <i className="ri-instagram-line footer__icon" size={20} style={{color : "#fff", marginRight: "2rem"}}></i>
                  <i className="ri-github-fill footer__icon" size={20} style={{color : "#fff", marginRight: "2rem"}}></i>
                </div>
            </div>

            <div className="right">
                <h4>About us</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quod dolore quibusdam voluptates natus perferendis, praesentium distinctio quos fugiat dolor voluptate reprehenderit veniam minima ad maiores iusto, voluptatem ipsa dicta?</p>
                <h5 className='footer__title'>Newsletter</h5>
                <p>Subscribe our newsletter</p>
                <div className='newsletter'>
                  <input type="email" placeholder='Enter your email!' />
                  <span>
                    <i className="ri-send-plane-line footer__icon"></i>
                  </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer