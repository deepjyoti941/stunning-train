import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSuggestions } from '../../actions';
import { Address, Suggestions } from '../../components';
import './search.scss';

class Search extends Component {
  state = {
    query: '',
    showSuggestions: true
  };

  getInfo = () => {
    const { getSuggestions } = this.props;
    const { query } = this.state;
    getSuggestions(query);
  };

  handleInputChange = (e) => {
    this.setState(
      {
        query: e.target.value
      },
      () => {
        const { query } = this.state;
        if (query && query.length > 1) {
          if (query.length % 2 === 0) {
            this.getInfo();
          }
        }
      }
    );
  };

  render() {
    const { showSuggestions } = this.state;
    const {
      ContainerCount,
      suggestionsList: { Items } = {},
      address: { formattedAddress } = {}
    } = this.props || {};
    return (
      <div>
        <div className="capture-plus-select">
          <input
            className="capture-plus-widget"
            maxLength="128"
            name="capture-plus"
            id="capture-plus"
            placeholder="E.g 'CR0 3RL' or '36 Factory Lane"
            onChange={this.handleInputChange} />
          {showSuggestions ? (
            <div className="capture-plus-list-results">
              <h3 className="result-header">
                Found :
                {ContainerCount}
              </h3>
              <Suggestions results={Items} />
            </div>
          ) : null}
          <Address address={formattedAddress || null} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('Search container mapStateToProps =>', state);
  const { suggestionsList, address } = state.suggestions;
  return { suggestionsList, address };
};

Search.propTypes = {
  getSuggestions: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  {
    getSuggestions
  }
)(Search);
