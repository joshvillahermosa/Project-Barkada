import React from 'react';
import { Text, View } from 'react-native';

import Router from'./src/routes/Router';

export default class App extends React.Component {
  render() {
    return (
      <Router />
    );
  }
}
