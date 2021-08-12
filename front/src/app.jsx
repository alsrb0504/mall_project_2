// import './app.scss';
import Header from './components/header/header';
import Carousel from './components/carousel/carousel';
import ProductList from './components/product-list/product-list';
import Board from './components/board/board';
import Footer from './components/footer/footer';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './styles/main.scss';
import { useState } from 'react';

function App() {
  const [ boardTop, setBoardTop ] = useState({
    id: 999,
    title: '제목',
    userId: '글쓴이',
    createdAt: '작성일',
    supervisor: true,
  })

  const [ board, setBoard ] = useState([
    {
      id: 1,
      title: '첫 번째 게시글',
      userId: 'userId',
      createdAt: '2021-08-11',
      supervisor: false,
    },
    { 
      id: 2,
      title: '두 번째 게시글',
      userId: 'userId-2',
      createdAt: '2021-08-11',
      supervisor: false,
    },
    {
      id: 3,
      title: '다섯 번째 게시글',
      userId: 'userId-3',
      createdAt: '2021-08-11',
      supervisor: false,
    },
    {
      id: 4,
      title: '네 번째 게시글',
      userId: 'userId-4',
      createdAt: '2021-08-11',
      supervisor: false,
    },
    {
      id: 5,
      title: '첫 번째 게시글',
      userId: 'userId',
      createdAt: '2021-08-11',
      supervisor: false,
    },
    { 
      id: 6,
      title: '두 번째 게시글',
      userId: 'userId-2',
      createdAt: '2021-08-11',
      supervisor: false,
    },
    {
      id: 7,
      title: '다섯 번째 게시글',
      userId: 'userId-3',
      createdAt: '2021-08-11',
      supervisor: false,
    },
    {
      id: 8,
      title: '네 번째 게시글',
      userId: 'userId-4',
      createdAt: '2021-08-11',
      supervisor: false,
    },
    {
      id: 9,
      title: '다섯 번째 게시글',
      userId: 'userId-3',
      createdAt: '2021-08-11',
      supervisor: false,
    },
    {
      id: 10,
      title: '네 번째 게시글',
      userId: 'userId-4',
      createdAt: '2021-08-11',
      supervisor: false,
    }
  ]);


  return (
    <div className="App">

      <BrowserRouter>

        <Header />
        <main style={{backgroundColor: 'rgb(250, 250, 250)'}}>

          <Switch>
            <Route path="/board" exact >
              <Board board={board} boardTop={boardTop} />
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
