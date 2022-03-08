import React, { useState } from "react";
import RatingIcon from "./ratingIcon.js";

//styles
import "./styles.css";

const StarRating = ({
  numberOfStars = 5,
  starRatedColor,
  starEmptyColor = "#999999",
  starStroke,
  svgIconPath,
  starDimension,
  starSpacing = 2,

  name = "rating",
  ratingValue,
  changeRating,
}) => {
  const [hover, setHover] = useState(null);
  return (
    <div className="widget-container">
      {Array.from({ length: numberOfStars }).map((_, i) => {
        const currentRating = i + 1;
        return (
          <div
            key={i + Math.random()}
            className="widget-label"
            style={{
              padding: `0 ${starSpacing / 2}px`,
              width: starDimension,
              height: starDimension,
            }}
            onClick={() => changeRating(currentRating)}
            onMouseEnter={() => setHover(currentRating)}
            onMouseLeave={() => setHover(null)}
          >
            <input
              className="widget-input"
              type="radio"
              name={name}
              value={currentRating}
            />
            <RatingIcon
              fill={
                currentRating <= (hover || ratingValue)
                  ? starRatedColor
                  : starEmptyColor
              }
              svgIconPath={svgIconPath}
              stroke={starStroke}
              width={starDimension}
              height={starDimension}
            />
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;
