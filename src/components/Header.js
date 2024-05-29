import React from "react";
import "../css/style.css"
import logo from "../images/Logo.svg"

function Header() {
    return (
        <header className="header">
        <div className="header__container">
          <div className="header_logo">
            <a href="#"><img src={logo} alt="Logo" /></a>
          </div>
          <nav className="header_menu menu">
            <ul className="menu_list">
              <li className="menu_item">
                <a href="#home1" className="menu_link">Home</a>
              </li>
              <li className="menu_item">
                <a href="#about1" className="menu_link">About</a>
              </li>
              <li className="menu_item">
                <a href="#services1" className="menu_link">Services</a>
              </li>
              <li className="menu_item">
                <a href="#portfolio1" className="menu_link">Portfolio</a>
              </li>
            </ul>
            <button className="header_button">
              <a href="#contact1">Contact</a>
            </button>
          </nav>
          <div className="burger_menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
    )
}

export default Header