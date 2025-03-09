import React from 'react';
import {House, Bookmark, FilePerson, CurrencyDollar, Clipboard2Data, Sliders2} from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    <>
        <div className='nav'>
          <Link to='/'><House/>Home</Link>
          <Link to='/course'><Bookmark/>Course</Link>
          <Link to='/student'><FilePerson/>Student</Link>
          <Link to='/payment'><CurrencyDollar/>Payment</Link>
          <Link to='/report'><Clipboard2Data/>Report</Link>
          <Link to='/settings'><Sliders2/>Settings</Link>
        </div>
    </>
  );
};

export default Nav;
