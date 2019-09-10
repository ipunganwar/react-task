import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import stores from './store';
import './index.css';
import Calculator from './pages/calculator';
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={stores}>
    <Calculator />
  </Provider>,
  rootElement,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
