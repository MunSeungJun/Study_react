import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { getHeadLine, changeText } from '../api.js';
import './HeadLine.css';

export async function Loader() {
  return JSON.stringify(await getHeadLine());
}

const Headline = () => {
  const Data = useLoaderData();
  const headlines = JSON.parse(Data);
  return (
    <ul className="headline-list">
      {headlines.map(headline => (
        <li key={headline.article_id} className="headline-item">
          <div className="headline-item-img">
            <img src={headline.image_url} alt="" />
          </div>
          <div className="headline-item-body">
            <p className="headline-item-body-title">{headline.title}</p>
            <p className="headline-item-body-description">{(headline.description)}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Headline;
