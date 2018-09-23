import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import axios from 'axios';
import * as config from './services/configService';
import localConfigs from './config/postcode';

// import App from './App';
import Root from './store/Root';
// import registerServiceWorker from './registerServiceWorker';

console.log('i am from Bootstrap file');
// console.log(LoadableComponent());
console.log('configs =>>', config);

const configFromApi = {
  messages: {
    title: 'POSTCODE FINDER'
  }
};

const LoadableComponent = Loadable({
  loader: () => import('./App'),
  loading() {
    return <div>Loading...</div>;
  },
  delay: 900
});

function renderApp() {
  ReactDOM.render(
    <Root>
      <LoadableComponent />
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
        .then((response) => {
          config.set({
            configs: configFromApi
          });
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
          console.log(' Unable to contact front-end services ', error);
        });
    } else {
      config.set({
        configs: localConfigs
      });
      resolve('with local config data');
    }
  });
}
setDataConfigs()
  .then((resp) => {
    console.log('response =>>>', resp);
    renderApp();
  })
  .catch((err) => {
    console.log(' SetDataConfigs error ', err);
    renderApp();
  });
