import React from 'react';
import Configs from './static/postcode';
import './scss/app.scss';

const App = () => (
  <div className="app">
    <header className="App-header">
      <h1 className="App-title">{Configs.messages.title}</h1>
    </header>
    <input
      className="search-input"
      maxLength="128"
      name="searchInput"
      id="capture-plus"
      placeholder="E.g 'CR0 3RL' or '36 Factory Lane"
    />
    <div className="capture-plus-list-results">
      <h3 className="result-header">Found: </h3>
    </div>
    <div className="address-results">
      <span>{Configs.messages.sample_text}</span>
    </div>

  </div>
);
export default App;
