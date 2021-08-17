import React from 'react';
import BoardWrite from '../board-write/board-write';
import BoardList from '../board-list/board-list';

import BoardContent from '../board-content/board-content';
import { useHistory } from 'react-router-dom';


const Board = ({board, boardTop, content, write, AddBoardItem, AddCommentItem}) => {

  const history = useHistory();

  const MoveToBoardHome = () => {
    history.push('/board');
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4">

          <div className="board">
            <h2 onClick={MoveToBoardHome} className="board-title" >문의 게시판</h2>

            {/* 게시판 목록 보기 */}
            { (!write && !content) && 
              <BoardList board={board} boardTop={boardTop} />
            }

            {/* 게시판 글 내용 */}
            { (!write && content) && 
              <BoardContent AddCommentItem={AddCommentItem}/>
            }

            {/* 게시판 글 쓰기 */}
            { write && 
              <BoardWrite count={board.length} AddBoardItem={AddBoardItem} />
            }

          </div>
        </div>
      </div>
    </div>

  )
}

export default Board;