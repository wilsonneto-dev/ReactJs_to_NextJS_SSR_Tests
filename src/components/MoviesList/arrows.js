import React from 'react';
import iconNextArrow from '../../images/arrow-right.png';
import iconPrevArrow from '../../images/arrow-left.png';

export function SliderNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <img src={iconNextArrow} />
    </div>
  );
}

export function SliderPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <img src={iconPrevArrow} />
    </div>
  );
}
