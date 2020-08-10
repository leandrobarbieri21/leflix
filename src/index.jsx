import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';

import App from './App';
import Video from './pages/Video';
import Category from './pages/Category';
import Error404 from './pages/errors/Error404';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/register/video" component={Video} />
        <Route path="/register/category" component={Category} />
        <Route component={Error404} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
