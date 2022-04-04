import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const navLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? 'orange' : 'black',
    }
  }
  return (
    <div>
      <div className="nav text-right font-bold pr-16 text-2xl my-6">
        <NavLink style={navLinkStyle} className='pr-8' to='/' >Home</NavLink>
        <NavLink style={navLinkStyle} className='pr-8' to='/reviews' >Reviews</NavLink>
        <NavLink style={navLinkStyle} className='pr-8' to='/dashboard' >Dashboard</NavLink>
        <NavLink style={navLinkStyle} className='pr-8' to='/blogs' >Blogs</NavLink>
        <NavLink style={navLinkStyle} className='pr-8' to='/about' >About</NavLink>
      </div>
    </div>
  );
};

export default Header;