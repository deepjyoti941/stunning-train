import React from 'react';
import { shallow } from 'enzyme';
import { Search } from './containers';
import App from './App';

it('renders without crashing', () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(Search).length).toEqual(1);
});
