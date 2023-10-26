import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import LoginProvider from './context/LoginContext';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-multi-carousel/lib/styles.css";

import { Provider } from 'react-redux';
import store from './components/redux/store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <LoginProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </LoginProvider>
      </BrowserRouter>
  </React.StrictMode>
);


