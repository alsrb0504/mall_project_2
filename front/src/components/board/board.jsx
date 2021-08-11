import React from 'react';
import { useParams } from 'react-router-dom';
import BoardItem from '../board-item/board-item';

const Board = (props) => {
  
  let { id } = useParams();

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4">

          <h2>Param: {id}</h2>

          <div>
            <h2>문의 게시판</h2>
            <div>
              <span>번호</span>
              <span>제목</span>
              <span>글쓴이</span>
              <span>작성일</span>
            </div>

            <main>
              <h1 className="visually-hidden" aria-label="게시글 목록">게시글 목록</h1>
              <ul>
                <BoardItem/>
                <BoardItem/>
                <BoardItem/>
                <BoardItem/>      
              </ul>

              {/* 게시글 클릭 시, 게시글 보여주는 component로 변환. */}
            </main>

            <button>
              글쓰기
            </button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Board;