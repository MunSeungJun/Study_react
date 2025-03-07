import React from 'react'
import { Trash, Pencil } from 'react-bootstrap-icons';

const Nav = ({items, onChangeMode, onSelect, onDelete}) => {
  return (
    <ul>
        {
          items.map(item => {
                  return (
                    <li className="item d-flex justify-content-between" key={item.id}>
                      <a href="/" onClick={onChangeMode} data-mode='Read'>{item.title}</a>
                      <div className="item-body">
                        <div>
                          <button onClick={() => onSelect(item.id)}><Pencil/></button>
                          <button onClick={() => onDelete(item.id)}>
                            <Trash />
                          </button>
                        </div>
                      </div>
                    </li>
                  );
                })
        }
    </ul>
  )
}

export default Nav