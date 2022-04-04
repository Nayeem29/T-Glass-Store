import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const HomeReviews = ({ review }) => {
  const { greeting, gender, name, rating } = review;
  const stars = Array(rating).fill(0);
  return (

    <div className='mx-12 grid grid-cols-1 md:grid-cols-3 mt-12 border-2 rounded-xl p-3'>
      <div className="profile mx-auto">
        <h1 className='font-bold'>
          {name} <br /><small className='font-semibold'>{gender}</small>
        </h1>
      </div>
      <div className="comments text-justify">
        <p>
          {greeting}
        </p>
      </div>
      <div className="ratings ml-4 pl-6 flex justify-start items-center">
        {
          stars.map(star => <FontAwesomeIcon icon={faStar} />)
        }
      </div>
    </div>
  );
};

export default HomeReviews;