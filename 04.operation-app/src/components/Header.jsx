import React from 'react';
import User from './User';
import Nav from './Nav';
import Sign from './Sign';
import './Header.css';

const Header = () => {
  return (
    <>
      <div className="header">
        crud operation
        <User />
        <Nav />
        <Sign />
      </div>
    </>
  );
};

export default Header;
