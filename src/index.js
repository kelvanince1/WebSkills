import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './Components/Homepage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Homepage />, document.getElementById('root'));
registerServiceWorker();
