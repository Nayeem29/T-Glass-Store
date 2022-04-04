import React from 'react';
import uuid from 'react-uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';

const HomeReviews = ({ review }) => {
  const { greeting, gender, name, rating, image } = review;

  const stars = Array(rating).fill(0);
  return (

    <div className='mx-12 grid grid-cols-1 md:grid-cols-3 mt-12 border-2 rounded-xl p-3 md:divide-x-4 shadow-xl'>
      <div className="profile mx-auto flex items-center justify-center">
        <img className='w-24 h-20 rounded-full pr-4' src={image} alt="" />
        <h1 className='font-bold'>
          {name} <br /><small className='font-semibold font-mono'>{gender}</small>
        </h1>
      </div>
      <div className="comments text-justify">
        <p className='font-mono leading-7'>
          {greeting}
        </p>
      </div>
      <div className="ratings ml-4 pl-6 flex justify-center md:justify-start items-center">
        {
          stars.map(star => <FontAwesomeIcon key={uuid()} icon={faStar} />)
        }
      </div>
    </div>
  );
};

export default HomeReviews;