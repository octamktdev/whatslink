import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './style/index.scss'
import '@popperjs/core/dist/cjs/popper'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

