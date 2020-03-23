import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import {createStore, } from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './store/rootReducer'

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
