import React from 'react';
import Logo from '../../assets/images/logo.svg';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header_wrapper">
      <div className="header_container">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <ul className="menu_list">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'menu_link active' : 'menu_link'
            }
          >
            Trade
          </NavLink>
          <NavLink
            to="/earn"
            className={({ isActive }) =>
              isActive ? 'menu_link active' : 'menu_link'
            }
          >
            Earn
          </NavLink>
          <NavLink
            to="/support"
            className={({ isActive }) =>
              isActive ? 'menu_link active' : 'menu_link'
            }
          >
            Support
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'menu_link active' : 'menu_link'
            }
          >
            About
          </NavLink>
        </ul>
        <button className="connect_button">Connect wallet</button>
      </div>
    </div>
  );
};

export default Header;
