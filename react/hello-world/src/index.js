import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyComp from './MyComp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<MyComp name = "James" />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
