import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';

const BoardWrite = ({count, AddBoardItem}) => {

  const history = useHistory();

  const titieRef = useRef();
  const authorRef = useRef();
  const textRef = useRef();

  const handleCancel = () => {
    history.push('/board');
  }

  const handleAdd = (e) => {
    e.preventDefault();

    const new_item = {
      id: count + 1,
      title: titieRef.current.value,
      userId: authorRef.current.value,
      createdAt: calc_date(),
      supervisor: false,
      content: textRef.current.value,
    }
    AddBoardItem(new_item);

    history.push('/board');
  }

  return (
    <div className="board-write">
      <form action="/" method="POST">
        <div className="board-write-top">
          <div className="board-write-title">
            <label htmlFor="write-title">제목</label>
            <input 
              ref={titieRef}
              type="text" 
              id="write-title" 
              placeholder="제목 입력" 
            />
          </div>

          <div className="board-write-author">
            <label htmlFor="write-author">작성자</label>
            <input 
              ref={authorRef}
              type="text" 
              id="write-author" 
              placeholder="작성자 입력" 
            />
          </div>
        </div>

        <div className="board-write-bottom">
          <textarea 
            ref={textRef}
            name="write-content" 
            id="write-content" 
            placeholder="내용 입력"
          >
          </textarea>
        </div>

        <div className="board-write-buttons">
          <button 
            className="cancel-button" 
            type="button"
            onClick={handleCancel}
          >
            취소
          </button>
          <button 
            className="submit-button" 
            type="submit"
            onClick={handleAdd}
          >
            등록
          </button>
        </div>
      </form>

    </div>
  )
}

export default BoardWrite;


function calc_date () {
  const date = new Date();

  const mm = date.getMonth() + 1; // getMonth() is zero-based
  const dd = date.getDate();

  return [date.getFullYear(),
          (mm>9 ? '' : '0') + mm,
          (dd>9 ? '' : '0') + dd
  ].join('-');
}