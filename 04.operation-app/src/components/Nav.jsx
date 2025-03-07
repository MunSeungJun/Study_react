import React from 'react';
import {House, Bookmark, CurrencyDollar, Clipboard2Data, Sliders2} from 'react-bootstrap-icons'
import './Nav.css'

const Nav = () => {
  return (
    <>
      <div className='nav'>
          <button><House/>Home</button>
          <button><Bookmark/>Course</button>
          <button>Students</button>
          <button><CurrencyDollar/>Payment</button>
          <button><Clipboard2Data/>Report</button>
          <button><Sliders2/>Settings</button>
      </div>
    </>
  );
};

export default Nav;
