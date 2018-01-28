/**
 * @file Layout
 * @description Creates basic layouts, example margin and padding.
 */

import { StyleSheet } from 'react-native';

const container = {
  margin: 10
};

/**
 * This handles the cover space between the tabs and scroll view
 */
const scrollViewTabs = {
  marginBottom: 100
};

/**
 * I'm not to sure why `Stylesheet.create` needs a object in a object, but whatevs.
 * I'll figure it out eventually
 */
const containerStyle = StyleSheet.create({container});
const scrollViewTabsStyle = StyleSheet.create({scrollViewTabs});

const layoutStyles = StyleSheet.create({container, scrollViewTabs});

export default layoutStyles;
