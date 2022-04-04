import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const HomeReviews = ({ review }) => {
  const { greeting, gender, name } = review;
  return (

    <div className='mx-auto grid grid-cols-1 md:grid-cols-3 mt-12 border-hidden rounded-xl p-3'>
      <div className="profile mx-auto">
        <h1 className='font-bold'>
          {name} <br /><small className='font-semibold'>{gender}</small>
        </h1>
      </div>
      <div className="comments">
        <p>
          {greeting}
        </p>
      </div>
      <div className="ratings ml-4 flex justify-center md:justify-center">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </div>
    </div>
  );
};

export default HomeReviews;