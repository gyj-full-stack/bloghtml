import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyRouter from './router/index'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<MyRouter />, document.getElementById('root'));

serviceWorker.unregister();
