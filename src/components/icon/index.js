import React from 'react';
import classnames from 'classnames';

import './icon.css';

const Icon = ({ id = '', cssModifier = '', className = '' }) => {
  if (!id) {
    return null;
  }

  const svgClasses = classnames({
    icon: true,
    [`icon--${cssModifier}`]: !!cssModifier,
    [className]: !!className,
  });

  return (
    <svg className={svgClasses} role="presentation">
      <use xlinkHref={`#icon-${id}`} />
    </svg>
  );
};

export default Icon;
