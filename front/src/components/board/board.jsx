import React, { useState } from 'react';
import BoardItem from '../board-item/board-item';

const Board = ({board, boardTop}) => {
  
  let count = board.length;    // 더 좋은 방법이 있지 않을까??

  // item에서 스타일링 한 다음에
  // list에서 import하고 추가로 font-weight하고 text-align만 주자.

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4">

          <div className="board">
            <h2 className="board-title">문의 게시판</h2>

            <main>
              <h1 className="visually-hidden" aria-label="게시글 목록">게시글 목록</h1>


              <ul className="board-list">
                <BoardItem item={boardTop} />
                {
                  board.map(item => {
                    return (
                      <BoardItem key={item.id} item={item} count={count--} />
                    )
                  })
                }
              </ul>

            </main>

            <button className="board-write-button" type="button">
              글쓰기
            </button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Board;