
import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './app';
import $ from 'jquery';
import './styles/main.css';
import './styles/style.css';
import './styles/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'toastify-js/src/toastify.css';
import axiosConfig from './config/axios';
import loadAuthStatus from './middlewares/loadAuthStatus';

axiosConfig();
loadAuthStatus().then(() => {
  ReactDOM.render(
  <Landing />
    , document.getElementById('app')
    );
});
