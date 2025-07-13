import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ Notice this
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store'; // ✅ CORRECT

import './index.css';

// ✅ This is the correct React 18+ method
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
