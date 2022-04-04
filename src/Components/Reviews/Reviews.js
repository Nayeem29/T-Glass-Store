import React from 'react';
import useReviews from '../../Utilities/Custom Hooks/useReviews';
import HomeReviews from '../Home/HomeReviews/HomeReviews';

const Reviews = () => {
  const [reviews, setReviews] = useReviews();
  return (
    <div className='mb-16'>
      {
        reviews.map(review => <HomeReviews
          review={review}
          key={review._id}
        />)
      }
    </div>
  );
};

export default Reviews;