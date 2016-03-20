'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Counts } from './reducers';

let store = createStore(Counts);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
	document.getElementById('mount')
);
