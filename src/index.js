import React from 'react';
import ReactDOM from 'react-dom';
import './sass/index.scss';
import Extension from './Extension';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Extension />, document.getElementById('root'));

serviceWorker.unregister();
