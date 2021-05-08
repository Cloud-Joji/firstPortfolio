import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// Firebase
import './firebase';

// Bootswatch
import 'bootswatch/dist/minty/bootstrap.min.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
