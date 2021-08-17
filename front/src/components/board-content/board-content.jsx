import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Comment from '../comment/comment';

const BoardContent = ({AddCommentItem}) => {
  
  const location = useLocation();
  const {id, title, userId, createdAt, content, comments} = location.state.item;
  
  const inputRef = useRef();

  const [ Comments, setComments ] = useState(comments);


  const handleClick = (e) => {
    // 나중에는 submit 시에도 적용.
    e.preventDefault();

    const comment = inputRef.current.value;

    if(!comment) {
      alert('내용을 입력해주세요!!');
      return;
    }

    const new_comment = {
      id: Date.now().toString(),
      username: userId,
      message: inputRef.current.value,
      createdAt: calc_date(),
    }

    const updated = AddCommentItem(new_comment, id);
    setComments(updated);

    inputRef.current.value = '';
  }

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
            {
              Comments &&
              Comments.map(comment => (
                <Comment key={comment.id} item={comment}/>
              ))
            }
          </ul>
        </div>

        <form className="board-content-form" action="/" method="POST">
          <input ref={inputRef} type="text" placeholder="댓글을 입력하세요."/>

          {/* 나중에는 onSubmit으로 수정해야 할 듯. */}
          <button onClick={handleClick} type="submit">등록</button>
        </form>

      </section>
    </article>
  )
}

export default BoardContent;

function calc_date () {
  const date = new Date();

  const mm = date.getMonth() + 1; // getMonth() is zero-based
  const dd = date.getDate();

  return [date.getFullYear(),
          (mm>9 ? '' : '0') + mm,
          (dd>9 ? '' : '0') + dd
  ].join('-');
}