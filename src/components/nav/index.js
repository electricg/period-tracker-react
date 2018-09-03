import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <NavLink exact to="/">
        home
      </NavLink>
      <NavLink exact to="/calendar">
        calendar
      </NavLink>
      <NavLink exact to="/log">
        log
      </NavLink>
      <NavLink exact to="/settings">
        settings
      </NavLink>
    </nav>
  );
};

export default Nav;
