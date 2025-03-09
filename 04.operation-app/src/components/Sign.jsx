import React from 'react';
import { BoxArrowRight } from 'react-bootstrap-icons';
import './Sign.css';

const Sign = () => {
  return (
    <div className='sign'>
      <button className="logout-btn">
        Logout{' '}
        <span>
          <BoxArrowRight />
        </span>
      </button>
    </div>
  );
};

export default Sign;
