import React from 'react';
import { useHistory } from 'react-router-dom';

const BoardItem = ({item, count}) => {

  const history = useHistory();

  const {title, userId, createdAt, supervisor} = item;

  const handleClick = () => {
    history.push({
      pathname: '/board/content/item',
      state: {item},
    })
  }

  return (
    <li className="board-item">

        { supervisor && 
          <div className="board-item-container board-top">
            <span className="board-item-number">번호</span>
            <h4 className="board-item-title">{title}</h4>
            <span className="board-item-userId">{userId}</span>
            <span className="board-item-createdAt sm-hidden">{createdAt}</span>
          </div>
        }
        { !supervisor && 
          <div onClick={handleClick} className="board-item-container">
            <span className="board-item-number">{count}</span>
            <h4 className="board-item-title">{title}</h4>
            <span className="board-item-userId">{userId}</span>
            <span className="board-item-createdAt sm-hidden">{createdAt}</span>
          </div>
        }
    </li>
  )
}

export default BoardItem;