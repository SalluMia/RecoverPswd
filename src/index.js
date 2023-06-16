import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router> {/* Wrap your App component with the Router */}
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
