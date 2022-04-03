import React from 'react';

const HomeReviews = ({ review }) => {
  const { platform_specific, rating, timestamp, user_name } = review;
  return (
    <div className='mx-auto grid grid-cols-3 mt-12 border-hidden rounded-xl p-3'>
      <div className="profile mx-auto">
        <h1 className='font-bold'>
          {user_name} <br /><small className='font-semibold'>{timestamp}</small>
        </h1>
      </div>
      <div className="comments">
        <p>
          {platform_specific.pros}
        </p>
      </div>
      <div className="ratings">
        <p>{rating}</p>

      </div>
    </div>
  );
};

export default HomeReviews;