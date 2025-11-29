import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    
    <div className='footer' id='footer'>  
        <div className="footer-content">  
            <div className="footer-content-left">  
                <img src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/food-munch-img.png" alt="" className= "img"  />  
                <p>Say no to harmful chemicals and go fully organic with our range of fresh fruits and veggies. Pamper your body and your senses with the true and unadulterated gifts from mother nature. with the true and unadulterated gifts from mother nature..</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    
                    <a 
                        href="https://x.com/LawkeshDhurve" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                    <img src={assets.twitter_icon} alt="LinkedIn" />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/lawkesh-dhurve/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                    <img src={assets.linkedin_icon} alt="LinkedIn" />
                    </a>

                    </div> 
            </div>   
            <div className="footer-content-center">  
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>  
            <div className="footer-content-right">  
            <h2> GET IN TOUCH</h2>
            <ul>
                <li>+91 8805956595</li>
                <li>lawkeshdhurve71@gmail.com</li>
            </ul>
            </div>  
        </div>  
        <hr/>
        <p className="footer-copyright">Copyright 2025  © Foodmunch.com - All Right Reserved.</p>
    </div>  
   
  )
}

export default Footer