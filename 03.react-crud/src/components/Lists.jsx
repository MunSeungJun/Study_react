import React from 'react';
import { Trash, Pencil } from 'react-bootstrap-icons';
import './Lists.css';

const Lists = ({ items, onUpdate, onDelete }) => {
  return (
    <ul>
      {items.map(item => {
        return (
          <li className="item" key={item.idx}>
            <div className="item-title">{item.title}</div>
            <div className="item-body">
              <div>{item.body}</div>
              <div>
                <button onClick={() => onUpdate(item.idx)}><Pencil/></button>
                <button onClick={() => onDelete(item.idx)}>
                  <Trash />
                </button>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Lists;
