import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Root from './store/Root';
// import registerServiceWorker from './registerServiceWorker';

// registerServiceWorker();

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.querySelector('#root')
);
