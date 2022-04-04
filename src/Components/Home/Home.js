import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../Utilities/Custom Hooks/useReviews';
import HomeReviews from './HomeReviews/HomeReviews';

const Home = () => {
  const [reviews, setReviews] = useReviews();
  const navigate = useNavigate();

  return (
    <div className='my-12 px-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 mx-6 text-center'>
        <div className='mt-8'>
          <h1 className='text-6xl text-orange-400 font-semibold tracking-wide uppercase'>get Top-Notch Sunglasses</h1>
          <hr className='my-3' />
          <h1 className='text-6xl text-yellow-500 font-semibold tracking-wide uppercase'>Customers' always king</h1>
          <p className='mt-12'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, quibusdam architecto officia tempora dicta sunt sed, eligendi animi expedita hic dignissimos vero fugiat ea cum voluptate non amet corporis repudiandae!</p>
        </div>
        <img className='h-3/4 w-3/4 mx-auto rounded-3xl' src={require('../Images/imageOne.jpg')} alt="" />
      </div>
      <section>
        <div className="reviews">
          <h1 className='font-semibold tracking-wide uppercase text-center text-orange-400 text-3xl'>What our Kings' think about us:</h1>
        </div>

        {
          (reviews.slice(0, 3)).map(review => <HomeReviews
            key={review._id}
            review={review} />)
        }

      </section>
      <div className='my-8 flex items-center justify-center'>
        <button onClick={() => navigate(`/reviews`)}
          className='border-2 px-6 py-1 rounded-xl bg-amber-400 font-semibold text-2xl text-black'>see more</button>
      </div>
    </div>
  );
};

export default Home;