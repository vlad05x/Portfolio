import React, { useState } from 'react';

const BurgerMenu = ({ onClick }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
    onClick(!isActive);
  };

  return (
    <div className={`burger_menu ${isActive ? 'active' : ''}`} onClick={toggleMenu}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default BurgerMenu;
