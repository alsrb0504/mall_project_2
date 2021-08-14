import React from 'react';

const BoardWrite = (props) => {

  return (
    <div className="board-write">
      <form action="/" method="POST">
        <div className="board-write-top">
          <div className="board-write-title">
            <label htmlFor="write-title">제목</label>
            <input type="text" id="write-title" placeholder="제목 입력" />
          </div>

          <div className="board-write-author">
            <label htmlFor="write-author">작성자</label>
            <input type="text" id="write-author" placeholder="작성자 입력" />
          </div>
        </div>

        <div className="board-write-bottom">
          <textarea name="write-content" id="write-content" placeholder="내용 입력"></textarea>
        </div>

        <div className="board-write-buttons">
          <button className="cancel-button" type="button">취소</button>
          <button className="submit-button" type="submit">등록</button>
        </div>
      </form>

    </div>
  )
}

export default BoardWrite;