import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './suggestions.scss';
import { getAddress } from '../../actions';

class Suggestions extends Component {
  constructor(props) {
    super(props);
    this.getAddressDetails = this.getAddressDetails.bind(this);
  }

  getAddressDetails = (item) => {
    const { getAddress } = this.props;
    getAddress(item);
  }


  render() {
    const { suggestionsList: { Items } = {} } = this.props || {};
    return (
      <React.Fragment>
        {Items
          ? Items.map(item => (
            <div
              key={item.Id}
              tabIndex="0"
              role="button"
              className="address-item"
              onClick={() => this.getAddressDetails(item)}
              onKeyUp={() => { }}>
              {item.Id}
              {item.Text}
            </div>
          ))
          : (
            <div className="address-item">No Address Found</div>
          )}
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  console.log('suggestions component mapStateToProps =>', state);
  const { suggestionsList } = state.suggestions;
  return { suggestionsList };
}

Suggestions.propTypes = {
  getAddress: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  {
    getAddress
  }
)(Suggestions);
