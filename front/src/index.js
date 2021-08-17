import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './app';
import BoardClass from './services/board';
import Product from './services/product';

const boardClass = new BoardClass();
const product_class = new Product();


ReactDOM.render(
  <React.StrictMode>
    <App boardClass={boardClass} product_class={product_class} />
  </React.StrictMode>,
  document.getElementById('root')
);