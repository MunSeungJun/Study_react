import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Root.css';

const Root = () => {
  return (
    <>
      <div id="header">
        <div className="header-container">
          <div id="title">CoinPaprika</div>
          <nav id="nav">
            <Link to="home">홈</Link>
            <Link>통계/지표</Link>
            <Link>시황/분석</Link>
            <Link>뉴스</Link>
            <Link>내정보</Link>
          </nav>
        </div>
      </div>
        <div id="main">
          <div className="main-container">
            <div className='ad'>
              <img src="http://localhost:5173/img/ad-img.png" alt=""  />
            </div>
            <Outlet />
          </div>
        </div>
    </>
  );
};

export default Root;
