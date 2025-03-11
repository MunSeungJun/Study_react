import React from 'react';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import './Home.css';

export async function Loader() {
  const response = await axios.get('https://api.coinpaprika.com/v1/tickers');
  return JSON.stringify(response.data);
}

const Home = () => {
  const datas = useLoaderData();
  const coins = JSON.parse(datas).filter(v => v.rank < 100);
  return (
    <>
        <div className='graph'>
            <img src="http://localhost:5173/img/graph-img.png" alt="" />
        </div>
        <div className="table">
          <div className="thead">
            <ul>
              <li>랭크</li>
              <li>이름</li>
              <li>기호</li>
              <li>현재가</li>
              <li>총시가</li>
              <li>거래량(24H)</li>
              <li>변동(24H)</li>
            </ul>
          </div>
          <div className="tbody">
            <ul>
              {coins.map(coin => (
                <li key={coin.id}>
                  <div>{coin.rank}</div>
                    <div>{coin.name}</div>
                    <div>{coin.symbol}</div>
                  <div>{coin.quotes.USD.price}</div>
                  <div>{coin.quotes.USD.market_cap}</div>
                  <div>{parseInt(coin.quotes.USD.volume_24h)}</div>
                  <div>{coin.quotes.USD.volume_24h_change_24h}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
    </>
  );
};

export default Home;
