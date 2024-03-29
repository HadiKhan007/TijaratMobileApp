import {StyleSheet} from 'react-native';
import {WP, colors} from '../../../utilities';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.bgColor,
  },
  mainContainer: {
    paddingHorizontal: WP('4'),
  },
  titleContainer: {
    paddingHorizontal: 0,
  },
  btnStyle: {
    borderRadius: 100,
    position: 'absolute',
    bottom: WP('4'),
    alignSelf: 'center',
    width: '94%',
  },
});

export default styles;
