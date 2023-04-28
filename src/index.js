import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import setupStore from './redux/store';
import './index.css';
import App from './App';
// import worker from './mocks/browser';
// // Start the mocking conditionally.
// if (process.env.NODE_ENV === 'development') {
//   worker.start();
// }
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={setupStore({})}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
