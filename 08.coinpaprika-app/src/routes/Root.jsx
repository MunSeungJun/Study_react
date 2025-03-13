import React, { useRef } from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';
import { tabChange} from '../api'
import './Root.css';



const Root = () => {
  const linkRef = useRef([]);
  const scrollRef = useRef([]);
  window.addEventListener('scroll', () => {
    let scrollY = window.scrollY
    scrollRef.current.forEach(v => v.style.top = `${scrollY}px`) 
  })

 
  return (
    <>
      <div id="header">
        <div className="header-container">
          <div id="title">CoinPaprika</div>
          <nav id="nav">
            <Link onClick={e => tabChange(e, linkRef)} name='home' ref={el => linkRef.current[0] = el} className='active' to="/home">홈</Link>
            <Link ref={el => linkRef.current[1] = el}>통계/지표</Link>
            <Link ref={el => linkRef.current[2] = el}>시황/분석</Link>
            <Link onClick={e => tabChange(e, linkRef)} name='news' ref={el => linkRef.current[3] = el} to="/news/headline">뉴스</Link>
            <Link ref={el => linkRef.current[4] = el}>내정보</Link>
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
