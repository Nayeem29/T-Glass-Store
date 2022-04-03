import React from 'react';

const HomeReviews = ({ review }) => {
  const { greeting, email, gender, name } = review;
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
      <div className="ratings ml-4 flex justify-center md:justify-end">
        <p>{email}</p>
      </div>
    </div>
  );
};

export default HomeReviews;