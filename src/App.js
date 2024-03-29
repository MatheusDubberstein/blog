import React from 'react';
import { Router } from 'react-router-dom';

import './config/ReactotronConfig';
import Routes from './routes';
import history from './services/history';
import GlobalStyle from './styles/global';

export default function App() {
  // test
  return (
    <Router history={history}>
      <Routes />
      <GlobalStyle />
    </Router>
  );
}
