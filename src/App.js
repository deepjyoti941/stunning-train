import React from 'react';
import { connect } from 'react-redux';
import { Search } from './containers';
import './scss/App.scss';

const App = (props) => {
  const {
    messages: { title }
  } = props;

  return (
    <React.Fragment>
      <header>
        <h1>{title}</h1>
      </header>
      <Search />
    </React.Fragment>
  );
};

const mapStateToProps = ({ configs }) => {
  console.log('App props =>', configs);
  const { messages } = configs;
  return { messages };
};
export default connect(mapStateToProps)(App);
