// https://stackoverflow.com/questions/42296499/how-to-display-svg-icons-svg-files-in-ui-using-react-component

import React from 'react';
import IconView from '../img/custom-view.svg';

const Icon = ({ name, color, size }) => (
  <svg className={`icon icon-${name}`} fill={color} width={size}>
    <use xlinkHref={`${IconView}#icon-${name}`} />
  </svg>
);

export default Icon;