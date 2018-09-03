import React from 'react';

import { version } from '../../../package.json';

const Header = () => {
  return <header>Period Tracker {version}</header>;
};

export default Header;
