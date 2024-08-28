import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import the icons
import location from './assets/icon-location.svg';
import phone from './assets/icon-phone.svg';
import email from './assets/icon-email.svg';
import logo from './assets/logo.svg'

function FooterComponent() {
  return (
    <div className='footerComponent'>
     
      <div className='fylo'>
        <img src={logo} alt="Fylo" className=''/>
        <span>
        <img src={location} alt="Location" />
        <p>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit, sed do eiusmod tempor <br />incididunt ut labore et 
        dolore magna aliqua</p>
        </span>
      
      </div>
      <div className='emphone'>
        <span >
          <img src={phone} alt="Phone" />
          <p>+1-543-123-4567</p>
        </span>
        <span>
          <img src={email} alt="Email" />
          <p>example@fylo.com</p>
        </span>
      </div>
      <div>
        <ul>
          <li>About Us</li>
          <li>Jobs</li>
          <li>Press</li>
          <li>Blog</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Contact Us</li>
          <li>Terms</li>
          <li>Privacy</li>
        </ul>
      </div>
      <div className='social-icons'>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    
     
    </div>
  );
}

export default FooterComponent;
