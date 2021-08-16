import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Comment from '../comment/comment';

const BoardContent = ({props}) => {

  const location = useLocation();

  const {title, userId, createdAt, content} = location.state.item;

  return (
    <article className="board-content">
      <h2 className="visually-hidden" aria-hidden>board-item-content</h2>
      <div>
        <h3 className="board-content-title">{title}</h3>

        <section className="board-content-info">
          <h3 className="visually-hidden" aria-hidden>유저 정보</h3>
          <span className="username">{userId}</span>
          <span className="date">{createdAt}</span>
        </section>

        <p className="board-content-text">{content}</p>
      </div>


      {/* 댓글 다는 기능은 나중에 로그인 했을 경우에만 허용. */}
      <section>
        <h3 className="visually-hidden">댓글 기능</h3>

        <div>
          <ul>
            <Comment />
            
          </ul>
        </div>

        <form className="board-content-form" action="/" method="POST">
          <input type="text" placeholder="댓글을 입력하세요."/>
          <button type="submit">등록</button>
        </form>

        

      </section>
    </article>
  )
}

export default BoardContent;