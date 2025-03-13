import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { getCoin, getExRate, addComma } from '../api.js';
import './Home.css';

export async function Loader() {
  const [coins, exRates] = await Promise.all([getCoin(), getExRate()]);
  return { coins, exRates };
}

const Home = () => {
  const { coins, exRates } = useLoaderData();
  const exRate = parseInt(exRates.country[1].value.replace(/,/g, ''));
  return (
    <>
      <div className="graph">
        <img src="http://localhost:5173/img/trading-img.png" alt="" />
      </div>
      <table className="table">
        <thead className="thead">
          <tr>
            <th>이름</th>
            <th>기호</th>
            <th>현재가</th>
            <th>총시가</th>
            <th>거래량(24H)</th>
            <th>변동(24H)</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {coins.map(coin => (
            <tr key={coin.id}>
              <td>{coin.name}</td>
              <td className='text-center'>{coin.symbol}</td>
              <td className='text-end'>{addComma(Number((coin.quotes.USD.price * exRate).toFixed(1)))}</td>
              <td className='text-end'>{parseInt((coin.quotes.USD.market_cap * exRate) / 100000000)}억</td>
              <td className='text-end'>{parseInt((coin.quotes.USD.volume_24h * exRate) / 100000000)}억</td>
              <td className='text-end'>{coin.quotes.USD.volume_24h_change_24h}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
