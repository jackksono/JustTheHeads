import React from 'react';

const Ratings = ({ rating, maxRating }) => {
  const percentage = (rating / maxRating) * 100;

  return (
    <div className="ratings">
      <div className="ratings-stars">
        <span
          className={`text-yellow-400 text-2xl ${percentage >= 20 ? 'fill-yellow' : ''}`}
        >
          ★
        </span>
        <span
          className={`text-yellow-400 text-2xl ${percentage >= 40 ? 'fill-yellow' : ''}`}
        >
          ★
        </span>
        <span
          className={`text-yellow-400 text-2xl ${percentage >= 60 ? 'fill-yellow' : ''}`}
        >
          ★
        </span>
        <span
          className={`text-yellow-400 text-2xl ${percentage >= 80 ? 'fill-yellow' : ''}`}
        >
          ★
        </span>
        <span
          className={`text-yellow-400 text-2xl ${percentage === 100 ? 'fill-yellow' : ''}`}
        >
          ★
        </span>
      </div>
    </div>
  );
}

export default Ratings;
