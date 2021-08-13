import BoardItem from '../board-item/board-item';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';


const Board = ({board, boardTop}) => {

  const [ lastIndex, setLastIndex ] = useState(board.length);

  const handleNext = () => {
    const border = board.length % 10 + 1;

    if(lastIndex >= border) {
      setLastIndex(lastIndex - 10);
    }
  }

  const handlePrev = () => {
    const border = board.length;

    if(lastIndex < border) {
      setLastIndex(lastIndex + 10);
    }
  }

  const handleSelect = (e) => {
    const pageIndex = Number(e.target.innerText);
    setLastIndex(board.length - (10 * (pageIndex - 1)));
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4">

          <div className="board">
            <h2 className="board-title" >문의 게시판</h2>

            <main>
              <h1 className="visually-hidden" aria-label="게시글 목록">게시글 목록</h1>


              <ul className="board-list">
                <BoardItem item={boardTop} />
                {

                  board.filter(item => {
                    if(item.id > lastIndex - (10)) {
                      if(item.id <= lastIndex) {
                        return item;
                      }
                    }
                    return null;
                  }).map(item => <BoardItem key={item.id} item={item} count={item.id} />)
                }
              </ul>

              <div className="board-pagination">
                <button className="icon-button page-button" onClick={handlePrev}>
                  <FontAwesomeIcon icon={faChevronLeft} className="ic-icon" />
                </button>

                { // Create pagination buttons
                  pagination_calc(board.length).map(item => 
                    <button 
                      key={item} 
                      className="page-button"
                      onClick={handleSelect}
                    >
                      {item}
                    </button>
                  )
                }

                <button className="icon-button page-button" onClick={handleNext}>
                  <FontAwesomeIcon icon={faChevronRight} className="ic-icon" />
                </button>

                <button className="board-write-button" type="button">
                  글쓰기
                </button>
              </div>
            </main>
            
            

          </div>
        </div>
      </div>
    </div>

  )
}

export default Board;

// pagination button을 jsx 안에서 만들기 위한 함수
function pagination_calc(length) {      
  const index = length / 10;
  const paging = new Array();

  for( let i = 1; i <= index + 1; i++) {
    paging.push(i);
  }
  return paging;
}