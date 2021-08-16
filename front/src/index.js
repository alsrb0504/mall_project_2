import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './app';
import BoardClass from './services/board';

const boardClass = new BoardClass();

ReactDOM.render(
  <React.StrictMode>
    <App boardClass={boardClass} />
  </React.StrictMode>,
  document.getElementById('root')
);