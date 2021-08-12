import BoardItem from '../board-item/board-item';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";


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
                  // count = 0, ' ; 대신 ,
                  board.map(item => {
                    return (
                      <BoardItem key={item.id} item={item} count={count--} />
                    )
                  })
                }
              </ul>
            </main>

            {/* pagination
              '<' , '>' chevron
              나머지 숫자들.. 근데 질문글의 수가 많으면?
              border.length로 처음에 렌더될 때, 질문글 숫자 세서
              10이 넘어가는 수만큼 숫자 컴포넌트 생성
              이걸 누르면 handleClick 함수 만들어서 board-list안의
              BoardItem에 렌더되는 board 배열의 아이템을 바꿔줘야 함.
              즉, ul 안에는 10개의 아이템만 있어야 하는데
              ul 접근은 useRef를 이용한다 치고 count로 세는 걸 바꿔야겠내.
              count는 개수 세는 용도, board 배열 안에 만들어진 순서대로
              값을 바꿔주지 않아도 만들어진 순서대로 배열에 추가되니까
              표시 되는 건 끝번호부터
              이건 link 사용하지 말자.
            */}

            <div className="board-pagination">
              <button className="icon-button page-button">
                <FontAwesomeIcon icon={faChevronLeft} className="ic-icon" />
              </button>

              <button className="page-button">
                1
              </button>

              <button className="page-button">
                2
              </button>

              <button className="page-button">
                3
              </button>

              <button className="icon-button page-button">
                <FontAwesomeIcon icon={faChevronRight} className="ic-icon" />
              </button>

              <button className="board-write-button" type="button">
                글쓰기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Board;