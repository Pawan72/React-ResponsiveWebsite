import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

const routes = (
  <BrowserRouter>
   <App/>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('root'));
