import {StyleSheet} from 'react-native';
import {WP, colors, family, size} from '../../../../utilities';
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.bgColor,
  },
  mainContainer: {
    paddingHorizontal: WP('4'),
    marginVertical: WP('6'),
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
  },
});

export default styles;
