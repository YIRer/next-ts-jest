/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';

import Header from '../Header';

describe('Header', () => {
  it('renders the h1 title', () => {
    const header = shallow(<Header />);
    expect(header.find('a'));
    expect(header).toMatchSnapshot();
  });
});
