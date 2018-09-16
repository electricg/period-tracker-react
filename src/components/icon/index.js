import React from 'react';

import './icon.css';

const Icon = ({ id = '' }) => {
  if (!id) {
    return null;
  }

  return (
    <svg className="icon main-nav__icon">
      <use xlinkHref={`#icon-${id}`} />
    </svg>
  );
};

export default Icon;
