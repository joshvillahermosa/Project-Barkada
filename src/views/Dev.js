import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Text } from 'react-native-elements';

import devViewConfig from '../configs/dev.config'; 
import TEXT from '../services/text.constants';
import COLORS from '../styles/colors.constants';
import { createDevButton } from '../services/dev-view.service';
import layoutStyles from '../styles/layout';

export default class Dev extends Component {

  createDevButtonGroup() {
    const buttonColor = COLORS.AMBER;
    return devViewConfig.map(createDevButton(React, Button, buttonColor))
  }

  render() {
    return (
      <View style={layoutStyles.container}>
        <Text h1>{ TEXT.DEV_VIEW.HEADER }</Text>

        <Text style={{ marginBottom: 10 }}>{ TEXT.DEV_VIEW.HEADER_SUB_TEXT }</Text>
      
        <ScrollView style={layoutStyles.scrollViewTabs}>
          { this.createDevButtonGroup() }
        </ScrollView>
      </View>
    )
  }
}
