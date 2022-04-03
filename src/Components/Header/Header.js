import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div className="nav text-right font-bold pr-16 text-2xl my-6">
        <Link className='pr-8' to='/'>Home</Link>
        <Link className='pr-8' to='/reviews'>Reviews</Link>
        <Link className='pr-8' to='/dashboard'>Dashboard</Link>
        <Link className='pr-8' to='/blogs'>Blogs</Link>
        <Link className='pr-8' to='/about'>About</Link>
      </div>
    </div>
  );
};

export default Header;