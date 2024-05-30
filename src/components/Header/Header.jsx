import React from 'react';
import '../Header/Header.css';
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faUser, faHeart, faClock, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useCart } from "react-use-cart";

const Header = () => {
  const { totalUniqueItems } = useCart();
  
  const handleUserIconHover = () => {
    const userSettings = document.querySelector('.u-settings');
    userSettings.classList.toggle('show');
  };

  return (
    <div className='header-all'>
      <div className="header-content">
        <div className="w-92"></div>
        <div className="header-top-content">
          <div className="w-92">
            <div className="header-top-content-left">
              <div>
                <FontAwesomeIcon icon={faEnvelope} className='right-10' />
                <span>info@mail.com</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faLocationDot} className='right-10' />
                <span>234 Main Road , NY</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faClock} className='right-10' />
                <span>Mon- Fry 09 - 18</span>
              </div>
            </div>
            <div className="header-top-content-right">
              <div>
                <span>Term and Conditions</span>
                <span className='margin-12'>TimeTable</span>
                <span>Services</span>
              </div>
            </div>
          </div>
        </div>
        <div className="header-content-bottom">
          <div className=' header-bottom-all  width-92'>
            <div className="bottom-left">
              <Link to="/">
                <img className='logo' src="https://elementor-kits-02.nicdark.com/perfume-wordpress-elementor-kit/wp-content/uploads/sites/4/2024/01/logo.png" alt="" />
              </Link>
            </div>
            <div className="bottom-center">
              <Link to="/">
                <span>HOME</span>
              </Link>
              <Link to="/about">
                <span>ABOUT</span>
              </Link>
              <Link to="/blog">
                <span>BLOG</span>
              </Link>
              <Link to="/shop">
                <span>SHOP</span>
              </Link>
              <Link to="/contact">
                <span>CONTACT</span>
              </Link>
            </div>
            <div className="bottom-right">
              <span className='count-of-basket'>{totalUniqueItems}</span>
              <Link to="/basket">
                <FontAwesomeIcon icon={faCartShopping} className='basket-icon' />
              </Link>
              <Link to="/wishlist">
                <FontAwesomeIcon icon={faHeart} className='heart-icon' />
              </Link>
              <div className='u-settings' onMouseEnter={handleUserIconHover} onMouseLeave={handleUserIconHover}>
                <FontAwesomeIcon icon={faUser} className='heart-icon'/>
                <ul className="user-options">
                  <li><Link to='/login'>Login</Link></li>
                  <li><Link to='/register'>Register</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
