import React, { useState } from 'react';
import BurgerMenu from './BurgerMenu';
import logo from '../images/Logo.svg';
import '../css/style.css';

function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const handleMenuToggle = (isActive) => {
    setMenuActive(isActive);
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header_logo">
          <a href="#"><img src={logo} alt="Logo" /></a>
        </div>
        <nav className={`header_menu menu ${menuActive ? 'active' : ''}`}>
          <ul className="menu_list">
            <li className="menu_item">
              <a href="#home1" className="menu_link" onClick={() => setMenuActive(false)}>Home</a>
            </li>
            <li className="menu_item">
              <a href="#about1" className="menu_link" onClick={() => setMenuActive(false)}>About</a>
            </li>
            <li className="menu_item">
              <a href="#services1" className="menu_link" onClick={() => setMenuActive(false)}>Services</a>
            </li>
            <li className="menu_item">
              <a href="#portfolio1" className="menu_link" onClick={() => setMenuActive(false)}>Portfolio</a>
            </li>
          </ul>
          <button className="header_button" onClick={() => setMenuActive(false)}>
            <a href="#contact1">Contact</a>
          </button>
        </nav>
        <BurgerMenu onClick={handleMenuToggle} />
      </div>
    </header>
  );
}

export default Header;
