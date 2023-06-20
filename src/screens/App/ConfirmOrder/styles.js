import {StyleSheet} from 'react-native';
import {colors, WP} from '../../../utilities';
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.bgColor,
  },
  mainContainer: {
    paddingHorizontal: WP('4'),
  },
  titleCon: {
    paddingHorizontal: 0,
  },
  btnStyle: {
    borderRadius: 100,
    marginVertical: WP('7'),
  },
});

export default styles;
