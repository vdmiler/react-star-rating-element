import { useState } from "react";
import StarRating from "./react-star-rating-element/src/starRating";
import "./App.css";

function App() {
  const [rating, setRating] = useState(0);

  return (
    <div className="App">
      <div className="Wrapper">
        <StarRating
          rating={rating}
          changeRating={setRating}
          starEmptyColor="#999999"
          starSpacing="2px"
          starDimension={30}
        />
        <p className="Indicator">
          The rating is <span>{rating}</span>
        </p>
      </div>
    </div>
  );
}

export default App;
