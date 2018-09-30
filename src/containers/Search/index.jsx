import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSuggestions } from '../../actions';
import { Address, Suggestions, MapView } from '../../components';
import './search.scss';

console.log('i am from Search component');
const initiaLocations = [
  {
    latitude: 19.256292770833003,
    longitude: 73.14348888416284,
    altitude: 0,
    altitudeReference: -1
  },
  {
    latitude: 19.158723714016585,
    longitude: 72.85000981925405,
    altitude: 0,
    altitudeReference: -1
  },
  {
    latitude: 19.06555758005571,
    longitude: 73.12917816471031,
    altitude: 0,
    altitudeReference: -1
  },
  {
    latitude: 19.419837116515474,
    longitude: 73.16990883470437,
    altitude: 0,
    altitudeReference: -1
  },
  {
    latitude: 19.060568068582878,
    longitude: 72.79079653150914,
    altitude: 0,
    altitudeReference: -1
  }
];
const newLocations = [
  {
    latitude: 19.327158850763844,
    longitude: 72.84716298553404,
    altitude: 0,
    altitudeReference: -1
  },
  {
    latitude: 18.964912112287983,
    longitude: 72.99827038558304,
    altitude: 0,
    altitudeReference: -1
  },
  {
    latitude: 19.1868959090133,
    longitude: 72.87961268001087,
    altitude: 0,
    altitudeReference: -1
  },
  {
    latitude: 19.377432936895655,
    longitude: 73.07558350297288,
    altitude: 0,
    altitudeReference: -1
  },
  {
    latitude: 19.28075150539127,
    longitude: 73.16270970833585,
    altitude: 0,
    altitudeReference: -1
  }
];
class Search extends Component {
  state = {
    query: '',
    showSuggestions: true,
    initiaLocations
  };

  getInfo = () => {
    const { getSuggestions } = this.props;
    const { query } = this.state;
    getSuggestions(query);
  };

  getRandomLocations() {
    return Microsoft.Maps.TestDataGenerator.getLocations(5, map.getBounds());
  }

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
          <button
            type="button"
            onClick={() => this.setState({ initiaLocations: newLocations })}>
            Get locations
          </button>
          <MapView locations={this.state.initiaLocations} />
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
