import React, { useRef } from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';
import './Root.css';



const Root = () => {
  const scrollRef = useRef([]);
  window.addEventListener('scroll', () => {
    let scrollY = window.scrollY
    scrollRef.current[0].style.top = `${scrollY}px`
    scrollRef.current[1].style.top = `${scrollY}px`
  })
  return (
    <>
      <div id="header">
        <div className="header-container">
          <div id="title">CoinPaprika</div>
          <nav id="nav">
            <Link to="/home">홈</Link>
            <Link>통계/지표</Link>
            <Link>시황/분석</Link>
            <Link to="/news/headline">뉴스</Link>
            <Link>내정보</Link>
          </nav>
        </div>
      </div>
      <div id="main" >
        <div className="main-container">
          <div className="ad">
            <img src="http://localhost:5173/img/ad-img.png" alt="" />
          </div>
          <Outlet />
          <div id="aside-left-wrap" ref={el => scrollRef.current[0] = el}>
              <img src="http://localhost:5173/img/side-ad-img.png" alt="" />
          </div>
          <div id="aside-right-wrap" ref={el => scrollRef.current[1] = el} >
              <img src="http://localhost:5173/img/side-ad-img2.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Root;
