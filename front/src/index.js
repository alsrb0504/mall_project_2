import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './app';
import BoardClass from './services/board';
import Product from './services/product';
import Auth from './services/auth';

const boardClass = new BoardClass();
const product_class = new Product();
const auth = new Auth();

ReactDOM.render(
  <React.StrictMode>
    <App boardClass={boardClass} product_class={product_class} auth={auth} />
  </React.StrictMode>,
  document.getElementById('root')
);