import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '../icon';

import './nav.css';

const NavItem = ({ id = '', path = '', label = '', exact = false }) => {
  if (!id || !path || !label) {
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
        <Icon id={id} cssModifier="main-nav" />
        <span className="main-nav__link-text">{label}</span>
      </NavLink>
    </li>
  );
};

const Nav = () => {
  const nav = [
    {
      id: 'home',
      path: '/',
      label: 'home',
      exact: true,
    },
    {
      id: 'calendar',
      path: '/calendar',
      label: 'calendar',
    },
    {
      id: 'log',
      path: '/log',
      label: 'log',
      exact: true,
    },
    {
      id: 'settings',
      path: '/settings',
      label: 'settings',
      exact: true,
    },
  ];

  return (
    <nav className="main-nav">
      <ul className="main-nav__list">
        {nav.map(item => (
          <NavItem key={item.id} {...item} />
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
