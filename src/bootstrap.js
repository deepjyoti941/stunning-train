import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import localConfigs from './config/postcode';
import configFromApi from './config/postcodeFromServer';
import App from './App';
import Root from './store/Root';

console.log('i am from Bootstrap file');

function renderApp(config) {
  ReactDOM.render(
    <Root initialState={{ configs: config }}>
      <App />
    </Root>,
    document.querySelector('#root')
  );
}

function setDataConfigs() {
  return new Promise((resolve, reject) => {
    if (document.getElementById('config')) {
      console.log('href =>', document.getElementById('config').href);
      axios
        .get(document.getElementById('config').href)
        .then(() => {
          resolve(configFromApi);
        })
        .catch((error) => {
          reject(error);
          console.log(' Unable to contact front-end services ', error);
        });
    } else {
      resolve(localConfigs);
    }
  });
}
setDataConfigs()
  .then((resp) => {
    console.log('response =>>>', resp);
    renderApp(resp);
  })
  .catch((err) => {
    console.log(' SetDataConfigs error ', err);
    // renderApp();
  });
