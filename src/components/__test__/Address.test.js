import React from 'react';
import { mount } from 'enzyme';
import { Address } from '../../components';
import Root from '../../store/Root';

let wrapped;

beforeEach(() => {
  const initialState = {
    suggestions: {
      address: {
        Field1: '30691782',
        BuildingName: 'Southwest',
        BuildingNumber: '34',
        SubBuilding: '',
        City: 'Wirral',
        Street: 'Shrewsbury Road',
        PostalCode: 'CH48 0QY',
        CountryName: 'United Kingdom',
        formattedAddress:
          'Southwest<br />34<br />Wirral<br />Shrewsbury Road<br />CH48 0QY<br />United Kingdom'
      }
    }
  };
  wrapped = mount(
    <Root initialState={initialState}>
      <Address />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('takes an address', () => {
  console.log(wrapped.find('.address-results').innerHTML());
  // expect(wrapped.find('.address-results'))
});
