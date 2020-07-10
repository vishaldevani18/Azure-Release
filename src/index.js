import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Home from './Components/Home';
ReactDOM.render(
    <Home/>, document.getElementById('root'));
serviceWorker.unregister();
    