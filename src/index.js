import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './style.css'
import Context from './utils/Context';


ReactDOM.render(
  <BrowserRouter>
    <Context>
      <App/>
    </Context>
  </BrowserRouter>,
document.getElementById('root'));