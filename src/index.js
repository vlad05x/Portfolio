import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./css/reset.css"
import "./css/adapt.css"
import "./css/style.scss"
const app = ReactDOM.createRoot(document.getElementById('app'));
app.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

