import React from 'react';
import Icon from '../icon';

import { version } from '../../../package.json';

import './header.css';

const Header = () => {
  return (
    <header className="main-header">
      <Icon id="moon" cssModifier="main-header" />
      <h1 className="main-header__title">Period Tracker {version}</h1>
      <div className="main-header__status">
        <Icon id="offline" cssModifier="main-header-status" />
      </div>
    </header>
  );
};

export default Header;
