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
      id: 22,
      title: '가장 최근의 22 번째 게시글',
      userId: 'userId-4',
      createdAt: '2021-08-11',
      supervisor: false,
    },
    {
      id: 21,
      title: '21 번째 게시글',
      userId: 'userId',
      createdAt: '2021-08-11',
      supervisor: false,
    },
    { 
      id: 20,
      title: '20 번째 게시글',
      userId: 'userId-2',
      createdAt: '2021-08-11',
      supervisor: false,
    },
    {
      id: 19,
      title: '19 번째 게시글',
      userId: 'userId-3',
      createdAt: '2021-08-11',
      supervisor: false,
    },
    {
      id: 18,
      title: '18 번째 게시글',
      userId: 'userId-4',
      createdAt: '2021-08-11',
      supervisor: false,
    },
    {
      id: 17,
      title: '17 번째 게시글',
      userId: 'userId',
      createdAt: '2021-08-11',
      supervisor: false,
    },
    { 
      id: 16,
      title: '16 번째 게시글',
      userId: 'userId-2',
      createdAt: '2021-08-11',
      supervisor: false,
    },
    {
      id: 15,
      title: '15 번째 게시글',
      userId: 'userId-3',
      createdAt: '2021-08-11',
      supervisor: false,
    },
    {
      id: 14,
      title: '14 번째 게시글',
      userId: 'userId-4',
      createdAt: '2021-08-11',
      supervisor: false,
    },
    {
      id: 13,
      title: '13 번째 게시글',
      userId: 'userId-3',
      createdAt: '2021-08-11',
      supervisor: false,
    },
    {
      id: 12,
      title: '가장 최근의 12 번째 게시글',
      userId: 'userId-4',
      createdAt: '2021-08-11',
      supervisor: false,
    },
    {
      id: 11,
      title: '11 번째 게시글',
      userId: 'userId',
      createdAt: '2021-08-11',
      supervisor: false,
    },
    { 
      id: 10,
      title: '10 번째 게시글',
      userId: 'userId-2',
      createdAt: '2021-08-11',
      supervisor: false,
    },
    {
      id: 9,
      title: '9 번째 게시글',
      userId: 'userId-3',
      createdAt: '2021-08-11',
      supervisor: false,
    },
    {
      id: 8,
      title: '8 번째 게시글',
      userId: 'userId-4',
      createdAt: '2021-08-11',
      supervisor: false,
    },
    {
      id: 7,
      title: '7 번째 게시글',
      userId: 'userId',
      createdAt: '2021-08-11',
      supervisor: false,
    },
    { 
      id: 6,
      title: '6 번째 게시글',
      userId: 'userId-2',
      createdAt: '2021-08-11',
      supervisor: false,
    },
    {
      id: 5,
      title: '5 번째 게시글',
      userId: 'userId-3',
      createdAt: '2021-08-11',
      supervisor: false,
    },
    {
      id: 4,
      title: '4 번째 게시글',
      userId: 'userId-4',
      createdAt: '2021-08-11',
      supervisor: false,
    },
    {
      id: 3,
      title: '3 번째 게시글',
      userId: 'userId-3',
      createdAt: '2021-08-11',
      supervisor: false,
    },
    {
      id: 2,
      title: '2 번째 게시글',
      userId: 'userId-4',
      createdAt: '2021-08-11',
      supervisor: false,
    },
    {
      id: 1,
      title: '1 번째 게시글',
      userId: 'userId-4',
      createdAt: '2021-08-11',
      supervisor: false,
    },
  ]);


  return (
    <div className="App">

      <BrowserRouter>

        <Header />
        <main style={{backgroundColor: 'rgb(250, 250, 250)'}}>

          <Switch>
            <Route path="/board" exact >
              <Board board={board} boardTop={boardTop} />

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
