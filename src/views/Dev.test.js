import React from 'react';
import Dev from './Dev';

import renderer from 'react-test-renderer';

describe('Dev View', () => {
  it('Should render correctly', () => {
    const rendered = renderer.create(<Dev />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
})

