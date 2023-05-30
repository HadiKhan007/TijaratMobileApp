import {StyleSheet} from 'react-native';
import {WP, colors} from '../../../../utilities';
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.bgColor,
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: WP('6'),
  },
});

export default styles;
