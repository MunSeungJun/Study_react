import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { getFlash } from '../api.js';
import './Flash.css';

export async function Loader() {
  return JSON.stringify(await getFlash());
}

const Flash = () => {
  const Data = useLoaderData();
  const flashes = JSON.parse(Data);
  return (
    <ul className="flash-list">
      {flashes.map(flash => (
        <li key={flash.article_id} className="flash-item">
          <div className="flash-item-img">
            <img src={flash.image_url} alt="" />
          </div>
          <div className="flash-item-body">
            <p className="flash-item-body-title">{flash.title}</p>
            <p className="flash-item-body-description">{(flash.description)}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Flash;