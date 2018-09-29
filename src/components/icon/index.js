import React from 'react';
import classnames from 'classnames';

import './icon.css';

const Icon = ({ id = '', cssModifier = '', className = '', hide = false }) => {
  if (!id) {
    return null;
  }

  const svgClasses = classnames({
    icon: true,
    [`icon--${cssModifier}`]: !!cssModifier,
    [className]: !!className,
  });

  const ariaHidden = hide ? true : null;

  return (
    <svg className={svgClasses} role="img" aria-hidden={ariaHidden}>
      <use xlinkHref={`#icon-${id}`} />
    </svg>
  );
};

export default Icon;
