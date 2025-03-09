import React from 'react';
import User from './User';
import Nav from './Nav';
import Sign from './Sign';
import './Header.css';

const Header = () => {
  return (
    <>
      <div className="header">
        <h1>crud operation</h1>
        <User />
        <Nav />
        <Sign />
      </div>
    </>
  );
};

export default Header;
