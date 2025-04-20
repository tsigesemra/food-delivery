import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Similique quaerat molestiae pariatur sunt,
                    </p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>home</li>
                        <li>about us</li>
                        <li>delivery</li>
                        <li>privacy policy</li>
                    </ul>

                </div>
                <div className="footer-content-right">
<h2>Get In Touch</h2>
<ul>
    <li>+251-746-873</li>
    <li>contact@tomato.com</li>
</ul>
                </div>
            </div>
            <hr />
            <p className='footer-copyright'>copyright 2025 @tomato.com - all right reserved</p>
        </div>
    )
}

export default Footer