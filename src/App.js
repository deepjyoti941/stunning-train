import React from 'react';
import { Search } from './containers';
import './scss/App.scss';
import Config from './config/postcode';

const App = () => (
  <React.Fragment>
    <header>
      <h1>{Config.messages.title}</h1>
    </header>
    <Search />
  </React.Fragment>
);
export default App;
