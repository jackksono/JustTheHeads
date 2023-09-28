import React from 'react'

const DisplayRating = ({ averageRating }) => {
  const percentage = 20;

  // Calculate the class for each star based on the percentage
  const star1Class = `text-2xl  ${percentage >= 20 && percentage < 40 ? 'text-yellow-400' : 'text-gray-300'}`;
  const star2Class = `text-2xl  ${percentage >= 40 && percentage < 60 ? 'text-yellow-400' : 'text-gray-300'}`;
  const star3Class = `text-2xl  ${percentage >= 60 && percentage < 80 ? 'text-yellow-400' : 'text-gray-300'}`;
  const star4Class = `text-2xl  ${percentage >= 80 && percentage < 100 ? 'text-yellow-400' : 'text-gray-300'}`;
  const star5Class = `text-2xl  ${percentage === 100 ? 'text-yellow-400' : 'text-gray-300'}`;

  return (
    <div className="ratings">
      <div className="ratings-stars">
        <span className={star1Class}>★</span>
        <span className={star2Class}>★</span>
        <span className={star3Class}>★</span>
        <span className={star4Class}>★</span>
        <span className={star5Class}>★</span>
      </div>
    </div>
  );
};

export default DisplayRating;