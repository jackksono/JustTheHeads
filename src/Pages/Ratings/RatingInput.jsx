import React, { useState } from 'react';

const RatingInput = ({ maxRating, onRatingSubmit, setAddRating }) => {
  const [hoveredRating, setHoveredRating] = useState(null);
  const [selectedRatings, setSelectedRatings] = useState(Array.from({ length: maxRating }, () => false));

  const handleMouseEnter = (rating) => {
    setHoveredRating(rating);
  };

  const handleMouseLeave = () => {
    setHoveredRating(null);
  };

  const handleRatingClick = (rating) => {
    const newSelectedRatings = selectedRatings.map((_, index) =>
      index < rating ? true : false
    );
    setSelectedRatings(newSelectedRatings);
    setAddRating(rating);
  };

  return (
    <div>
      {Array.from({ length: maxRating }).map((_, index) => {
        const rating = index + 1;
        const isSelected = selectedRatings[index]; // Check if this rating is selected
  
        return (
          <span
            key={rating}
            className={`text-2xl cursor-pointer ${
              (isSelected || rating <= hoveredRating) ? 'text-yellow-400' : 'text-gray-400'
            }`}
            onMouseEnter={() => handleMouseEnter(rating)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleRatingClick(rating)}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

export default RatingInput;
