import React from 'react';
import { Link } from 'react-router-dom';
import '../Footer/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-menu">
            <p className='font-cormor p-footer'>Address :</p>
            <ul>
              <li>Address : 1080 Brickell Ave</li>
              <li>City : Miami ( Florida )</li>
              <li>Country : United States</li>
            </ul>
          </div>
          <div className="footer-social">
            <img src="https://elementor-kits-02.nicdark.com/perfume-wordpress-elementor-kit/wp-content/uploads/sites/4/2024/01/logo-white.png" alt="" />
           
            <ul className='flex'>
            With a commitment to excellence, we thrive in delivering exceptional solutions and building lasting partnerships. Our journey is defined by a relentless pursuit of growth.
               </ul>
          </div>
          <div className="footer-info">
<p className='font-cormor p-footer'>Info :</p>
<ul className='flex'>
              <li>Support : info@support.com</li>
              <li>Email : info@email.com</li>
              <li>Phone : + 21 2445674</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Fragrancerie. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
