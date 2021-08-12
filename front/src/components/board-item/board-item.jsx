import React from 'react';
import { Link } from 'react-router-dom';

const BoardItem = ({item, count}) => {

  const {title, userId, createdAt, supervisor} = item;

  // 나중에 Link에 각 아이템의 내용을 보여주는 페이지 이동 추가.

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
          <Link to="/" className="board-item-container">
            <span className="board-item-number">{count}</span>
            <h4 className="board-item-title">{title}</h4>
            <span className="board-item-userId">{userId}</span>
            <span className="board-item-createdAt sm-hidden">{createdAt}</span>
          </Link>
        }



        
        
    </li>
  )
}

export default BoardItem;