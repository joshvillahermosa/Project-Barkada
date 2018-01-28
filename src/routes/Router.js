import { TabNavigator } from 'react-navigation';

import Home from '../views/Home';
import Dev from '../views/Dev';

import { createTabStyles } from '../services/routers.service';
import CONSTANTS from '../services/constants';
import COLORS from '../styles/colors.constants';

const TAB_POSITION = CONSTANTS.TABS.BOTTOM_POSITION;
const ACTIVE_TINT_COLOR = COLORS.RUBY;
const tabStyle = createTabStyles(TAB_POSITION, ACTIVE_TINT_COLOR)

export default TabNavigator({
  Home: {screen: Home},
  Dev: {screen: Dev},
}, tabStyle);
