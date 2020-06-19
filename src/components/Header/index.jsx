// libraries
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <nav className="header">
    <ul className="header-list">
      <li className="header-list__item">
        <NavLink exact className="header-list__link" to="/nasa">Home</NavLink>
      </li>
      <li className="header-list__item">
        <NavLink className="header-list__link" to="/nasa/gallery">Astronomy gallery</NavLink>
      </li>
    </ul>
  </nav>
);

export default Header;
