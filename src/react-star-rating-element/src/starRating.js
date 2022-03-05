import React, { useState } from "react";
import RatingIcon from "./ratingIcon.js";

//styles
import "./styles.css";

const StarRating = ({
  numberOfStars = 5,
  starRatedColor,
  starEmptyColor = "#000",
  starStroke,
  svgIconPath,
  starDimension,
  starSpacing,
  rating,
  changeRating,
}) => {
  const [hover, setHover] = useState(null);
  return (
    <div className="widget-container">
      {Array.from({ length: numberOfStars }).map((_, i) => {
        const ratingValue = i + 1;
        return (
          <div
            className="widget-label"
            style={{ padding: `0 ${starSpacing}` }}
            key={i + Math.random()}
            onClick={() => changeRating(ratingValue)}
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(null)}
          >
            <input
              className="widget-input"
              type="radio"
              name="rating"
              value={ratingValue}
            />
            <RatingIcon
              fill={
                ratingValue <= (hover || rating)
                  ? starRatedColor
                  : starEmptyColor
              }
              stroke={starStroke}
              width={starDimension}
              height={starDimension}
              svgIconPath={svgIconPath}
            />
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;
