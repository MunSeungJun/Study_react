import React from 'react';
import {Outlet, NavLink } from 'react-router-dom';
import './News.css'




const News = () => {

  return (
    <>
    <div className='news-header'>
        <NavLink to='/news/headline'>주요뉴스 - 토큰포스트</NavLink>
        <NavLink to='/news/flash'>속보 - COINNESS</NavLink>
    </div>
    <div className='news-body'>
        <Outlet/>
    </div>
    </>
)
};

export default News;
