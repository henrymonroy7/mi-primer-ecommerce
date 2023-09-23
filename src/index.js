import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC8C-oTYRkToQoOh6qKY5cI4C8XG3cGbLY",
  authDomain: "corotos-ecommerce.firebaseapp.com",
  projectId: "corotos-ecommerce",
  storageBucket: "corotos-ecommerce.appspot.com",
  messagingSenderId: "149199444328",
  appId: "1:149199444328:web:5a38ba4d04e635abcb1edd"
};


initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
