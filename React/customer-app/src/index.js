import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//Virtual DOM is created here for index.html file.
//Root is set to App
const root = ReactDOM.createRoot(document.getElementById('root'));//root is the ID of index.html

//HTML DOM & REACT DOM are related to each other using the root

//At root we are rendering the app
root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
