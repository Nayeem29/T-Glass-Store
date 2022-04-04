import React from 'react';
// import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Ratings = ({ rating }) => {
  console.log(rating);
  return (
    <div>
      initialRating= {rating}
      emptySymbol={<FontAwesomeIcon icon={faStar} />}
      fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
    </div>
  );
};

export default Ratings;