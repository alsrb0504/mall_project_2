import {BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react';

import Header from './components/header/header';
import Carousel from './components/carousel/carousel';
import ProductList from './components/product-list/product-list';
import Board from './components/board/board';
import Footer from './components/footer/footer';
import ProductPage from './components/product-page/product-page';

import './styles/main.scss';
import LoginPage from './components/login-page/login-page';

function App({ boardClass, product_class }) {


  // const location = useLocation();
  // const history = useHistory();

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
            <Route path="/" exact>
              <Carousel product_class={product_class}/>
              <ProductList product_class={product_class}/>
            </Route>

            {/* 로그인 */}
            <Route path="/login" exact>
              <LoginPage />
            </Route>

            {/* 회원가입 */}
            <Route path="/login/join" exact>
              <LoginPage join={true} />
            </Route>/


            <Route path="/board/write" exact >
              <Board board={board} write={true} boardTop={boardClass.board_top}  AddBoardItem={AddBoardItem}  />
            </Route>

            <Route path='/board/content/'>
              <Board write={false} content={true} AddCommentItem={AddCommentItem}  />
            </Route>

            <Route path="/board" exact >
              <Board board={board} boardTop={boardClass.board_top}/>
              {/* 나중에 광고 compoent 하나 추가 고려. */}
            </Route>

            <Route path="/product/:item" >
              <ProductPage />
            </Route>
            
          </Switch>

        </main>
        <Footer />

      </BrowserRouter>

    </div>
  );
}

export default App;
