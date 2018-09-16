import React from 'react';
import { NavLink } from 'react-router-dom';

import './nav.css';

const NavItem = ({ path = '', label = '', exact = false }) => {
  if (!path || !label) {
    return null;
  }

  return (
    <li className="main-nav__item">
      <NavLink
        className="main-nav__link"
        activeClassName="main-nav__link--selected"
        to={path}
        exact={exact}
      >
        {label}
      </NavLink>
    </li>
  );
};

const Nav = () => {
  const nav = [
    {
      path: '/',
      label: 'home',
      exact: true,
    },
    {
      path: '/calendar',
      label: 'calendar',
    },
    {
      path: '/log',
      label: 'log',
    },
    {
      path: '/settings',
      label: 'settings',
    },
  ];

  return (
    <nav className="main-nav">
      <ul className="main-nav__list">
        {nav.map(item => (
          <NavItem key={item.path} {...item} />
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
