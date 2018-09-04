import React from 'react';
import { mount } from 'enzyme';
import { Search } from '../../containers';
import Root from '../../store/Root';
import { Address, Suggestions } from '../../components';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <Search />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('shows address box', () => {
  // console.log(wrapped.find(Address).debug());
  // console.log(wrapped.find(Address).length);
  // console.log(wrapped.find(Suggestions).length);

  expect(wrapped.find(Address).length).toEqual(1);
  expect(wrapped.find(Suggestions).length).toEqual(1);
});
