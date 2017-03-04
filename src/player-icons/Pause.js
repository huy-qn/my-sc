import React from 'react';

const PauseIcon = ({ width, height, color }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 14 20">
      <g id="Page-1" fillRule="evenodd">
        <g id="pause" fillRule="nonzero" fill={color}>
          <g id="a-link" transform="translate(0.000000, 0.500000)">
            <path d="M2,0 C0.8954305,-6.76353751e-17 1.3527075e-16,0.8954305 0,2 L0,17 C1.3527075e-16,18.1045695 0.8954305,19 2,19 C3.1045695,19 4,18.1045695 4,17 L4,2 C4,0.8954305 3.1045695,6.76353751e-17 2,0 Z M12,0 C10.8954305,-6.76353751e-17 10,0.8954305 10,2 L10,17 C10,18.1045695 10.8954305,19 12,19 C13.1045695,19 14,18.1045695 14,17 L14,2 C14,0.8954305 13.1045695,6.76353751e-17 12,0 Z" id="a" />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default PauseIcon;
