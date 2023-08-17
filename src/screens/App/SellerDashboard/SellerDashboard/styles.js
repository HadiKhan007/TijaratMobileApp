import {StyleSheet} from 'react-native';
import {WP, colors} from '../../../../utilities';
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.bgColor,
  },
  mainContainer: {
    paddingHorizontal: WP('4'),
    marginVertical: WP('0'),
  },
  positionCon: {
    position: 'absolute',
    right: WP('0'),
    bottom: WP('0'),
    zIndex: WP('2'),
  },
});

export default styles;
