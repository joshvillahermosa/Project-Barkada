/**
 * @file Router Services
 * @description Router Services
 */


/**
 * @function createTabStyles
 * @description Creates basic tab style
 * @param {String} tabPosition Position of where the tabs should be located.
 * @param {String} activeTintColor Set active tint color
 * @return {Object} Object of general tab styles. This has been ripped off https://reactnavigation.org/docs/navigators/tab
 * @todo Define General Schema
 */
const createTabStyles = function(tabPosition, activeTintColor) {
  if (!tabPosition || !activeTintColor) {
    throw new Error(`You are missing tabPosition or activeTintColor: tabPosition: ${tabPosition}, activeTintColor: ${activeTintColor}`);
  }

  return {
    tabBarPosition: tabPosition,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: activeTintColor,
    }
  }
}

export { createTabStyles };
