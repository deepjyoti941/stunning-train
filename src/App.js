import React from 'react';
import { Search } from './containers';
import './scss/App.scss';
import Config from './config/postcode';
import * as configs from './services/configService';

console.log('i am from App component');
console.log('configs in App =>', configs.get('configs'));
const data = configs.get('configs');
const App = () => (
  <React.Fragment>
    <header>
      <h1>{data.messages.title}</h1>
    </header>
    <Search />
  </React.Fragment>
);
export default App;
