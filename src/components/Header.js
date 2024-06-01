import React, { useState } from 'react';
import BurgerMenu from './BurgerMenu';
import logo from '../images/Logo.svg';
import '../css/style.scss';

function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuActive(false);
  };

  const handleMenuToggle = (isActive) => {
    setMenuActive(isActive);
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header_logo">
          <a href="#home1"><img src={logo} alt="Logo" /></a>
        </div>
        <nav className={`header_menu menu ${menuActive ? 'active' : ''}`}>
          <ul className="menu_list">
            <li className="menu_item">
              <a href="#home1" className="menu_link" onClick={handleClick}>Home</a>
            </li>
            <li className="menu_item">
              <a href="#about1" className="menu_link" onClick={handleClick}>About</a>
            </li>
            <li className="menu_item">
              <a href="#services1" className="menu_link" onClick={handleClick}>Services</a>
            </li>
            <li className="menu_item">
              <a href="#portfolio1" className="menu_link" onClick={handleClick}>Portfolio</a>
            </li>
          </ul>
          <button className="header_button" onClick={handleClick}>
            <a href="#contact1" className="menu_link">Contact</a>
          </button>
        </nav>
        <BurgerMenu onClick={handleMenuToggle} />
      </div>
    </header>
  );
}

export default Header;
