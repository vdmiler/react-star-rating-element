import * as React from "react";

const RatingIcon = ({
  fill = "#ff8039",
  starStroke = "none",
  width = 13,
  height = 13,
  svgIconPath = "M6.5 1.61803L7.48381 4.6459L7.59607 4.99139H7.95934H11.143L8.56737 6.86271L8.27348 7.07624L8.38573 7.42173L9.36955 10.4496L6.79389 8.57827L6.5 8.36475L6.20611 8.57827L3.63045 10.4496L4.61426 7.42173L4.72652 7.07624L4.43263 6.86271L1.85697 4.99139H5.04066H5.40393L5.51619 4.6459L6.5 1.61803Z",
}) => (
  <svg
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 13 13"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d={svgIconPath} fill={fill} stroke={starStroke} />
  </svg>
);

export default RatingIcon;
