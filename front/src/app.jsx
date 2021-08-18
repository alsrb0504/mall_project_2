import Header from './components/header/header';
import Carousel from './components/carousel/carousel';
import ProductList from './components/product-list/product-list';
import Board from './components/board/board';
import Footer from './components/footer/footer';

import ProductPage from './components/product-page/product-page';


import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './styles/main.scss';
import { useState } from 'react';



function App({ boardClass, product_class }) {

  const [ board, setBoard ] = useState(boardClass.get_board());

  const AddBoardItem = (item) => {
  // boardClass의 board-item 배열에 내용 추가 후,
  // 결과 배열을 받아 복사한 후, board update.

    boardClass.add_board(item);
    const updated = [...boardClass.get_board()];
    setBoard(updated);
  }

  const AddCommentItem = (comment, id) => {
    // board-content의 state를 업데이트 하기 위한 변수.
    const updated_item = boardClass.add_comment(comment, id);

    // 현재 state의 board를 업데이트 하기 위한 변수.
    const updated = [...boardClass.get_board()];
    setBoard(updated);

    return updated_item;
  }


  return (
    <div className="App">

      <BrowserRouter>

        <Header />
        <main style={{backgroundColor: 'rgb(250, 250, 250)'}}>

          <Switch>
            <Route path="/product/:item" >
              {/* 나중에 item 주입 방법 수정 */}
              <ProductPage  item={product_class.product_list[0]}/>
            </Route>


            {/* 글쓰기시 */}
            <Route path="/board/write" exact >
              <Board board={board} write={true} boardTop={boardClass.board_top}  AddBoardItem={AddBoardItem}  />
            </Route>

            <Route path='/board/content/'>
              <Board write={false} content={true} AddCommentItem={AddCommentItem}  />
            </Route>

            <Route path="/board" exact >
              <Board board={board} boardTop={boardClass.board_top}/>

              {/* 광고 컴포넌트 또는 글쓰기 컴포넌트 하나 만들자. */}
            </Route>
            <Route path="/">
              <Carousel product_class={product_class}/>
              <ProductList product_class={product_class}/>
            </Route>
          </Switch>

        </main>
        <Footer />

      </BrowserRouter>

    </div>
  );
}

export default App;
