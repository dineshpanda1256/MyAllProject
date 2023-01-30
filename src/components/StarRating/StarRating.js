import React from "react";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import "./StarRating.css";
const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const addRating = () => {
    alert(rating);
  };

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input
              className=""
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => {
                setRating(ratingValue);
                addRating();
              }}
            />
            <AiFillStar
              className="star"
              color={ratingValue <= (hover || rating) ? "ffc107" : "e4e5e9"}
              size={30}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />{" "}
          </label>
        );
      })}
    </div>
  );
};
export default StarRating;
