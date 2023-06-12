import {StyleSheet} from 'react-native';
import {WP, colors, family, size} from '../../../../utilities';
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.bgColor,
  },
  mainContainer: {
    paddingHorizontal: WP('4'),
    marginVertical: WP('0'),
  },
});

export default styles;
