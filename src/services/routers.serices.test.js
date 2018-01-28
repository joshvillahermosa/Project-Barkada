import { createTabStyles } from './routers.service';

describe('Router Service', () => {
  describe('Creating Tab Styles', () => {
    it('should create tab styles', () => {
      const position = 'bottom';
      const color = '#000000'

      const expectedTabStyles = {
        tabBarPosition: position,
        animationEnabled: true,
        tabBarOptions: {
          activeTintColor: color,
        }
      };

      expect(createTabStyles(position, color)).toEqual(expectedTabStyles);
    });

    it('should throw error if position and/or color is not passed in', () => {
      expect(createTabStyles).toThrow('You are missing tabPosition or activeTintColor: tabPosition: undefined, activeTintColor: undefined')
    })
  });
});
