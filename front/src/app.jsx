import Header from './components/header/header';
import Carousel from './components/carousel/carousel';
import ProductList from './components/product-list/product-list';
import Board from './components/board/board';
import Footer from './components/footer/footer';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './styles/main.scss';
import { useState } from 'react';



function App({ boardClass }) {
  // for board-header
  const [ boardTop, setBoardTop ] = useState({
    id: 999,
    title: '제목',
    userId: '글쓴이',
    createdAt: '작성일',
    supervisor: true,
  })

  const [ board, setBoard ] = useState(boardClass.get_board());

  const AddBoardItem = (item) => {
  // boardClass의 board-item 배열에 내용 추가 후,
  // 결과 배열을 받아 복사한 후, board update.

    boardClass.add_board(item);
    const updated = [...boardClass.get_board()];
    setBoard(updated);
  }


  return (
    <div className="App">

      <BrowserRouter>

        <Header />
        <main style={{backgroundColor: 'rgb(250, 250, 250)'}}>

          <Switch>
            {/* 글쓰기시 */}
            <Route path="/board/write" exact >
              <Board board={board} write={true} boardTop={boardTop}  AddBoardItem={AddBoardItem}  />
            </Route>

            <Route path='/board/content/:slug'>
              <Board write={false} content={true}  />
            </Route>

            <Route path="/board" exact >
              <Board board={board} boardTop={boardTop}/>

              {/* 광고 컴포넌트 또는 글쓰기 컴포넌트 하나 만들자. */}
            </Route>
            <Route path="/">
              <Carousel />
              <ProductList />
            </Route>
          </Switch>

        </main>
        <Footer />

      </BrowserRouter>

    </div>
  );
}

export default App;
