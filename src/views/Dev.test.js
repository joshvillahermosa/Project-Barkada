import React from 'react';
import Dev from './Dev';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<Dev />).toJSON();
  expect(rendered).toMatchSnapshot();;
});
