import React from 'react';
import { View } from 'react-native';
import renderer from 'react-test-renderer';
import { Button } from 'react-native-elements';
import { createDevButton } from './dev-view.service';

describe('Dev View Service', () => {
  describe('Creating Dev View Buttons', () => {
    const devViewButtonConfig = [{
      name: 'View One',
      view: null,
      enabled: false,
    }, {
      name: 'View One',
      view: null,
      enabled: true,
    }]

    it('Should render button components based on configs', () => {
      const mapFunction = createDevButton(React, Button, '#000');
      const tree = renderer.create(<View>{devViewButtonConfig.map(mapFunction)}</View>).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
