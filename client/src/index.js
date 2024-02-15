import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'; 
import rootReducer from '../src/redux/reducers';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './App';

// Создаем хранилище Redux
const store = configureStore({
  reducer: rootReducer
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

