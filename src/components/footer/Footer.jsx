import React from 'react'
import './Footer.css'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineFavorite } from "react-icons/md";

const Footer = () => {
  return (
<>
    <div className='signup'>
        <div className='context'>
            <h2>Subscribe to our Newsletter</h2>
            <p>Get e-mail updates about our latest shops and special offers</p>
        </div>
        <div className='contexts'> 
            <input type="text" placeholder='Enter email address' /><button>Subscribe</button>
        </div>
    </div>

    <div className='footer'>
        <div className='footer-content'>
            <div className='alt'><h4>Vegefoods</h4> <p>Far far away, behind the word mountains, far from the<br/> countries Vokalia and<br/> Consonantia.</p></div>
            <div className='alte'><h4>Menu</h4> 
                <p>Shop</p>
                <p>About</p>
                <p>Journal</p>
                <p>Contact us</p>
            </div>
            <div className='alter'><h4>Help</h4>
                <p>Shipping Information  <j>FAQs</j></p>
                <p>Returns & Exchange  <j>Contact</j></p>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
            </div>
            <div className='alt'>
                <h4>Have a Questions?</h4>
                <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
                <p>+2 392 3929 210</p>
                <p>	info@yourdomain.com</p>
            </div>
        </div>
        <div className='icons'><p><FaTwitter /></p> <p><FaFacebookF /></p> <p><FaInstagram /></p></div>
        <div className='conclude'><p>Copyright ©2025 All rights reserved | This template is made with <k><MdOutlineFavorite /></k> by <span>Colorlib</span></p></div>
    </div>
    </>
  )
}

export default Footer