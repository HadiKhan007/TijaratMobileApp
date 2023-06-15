import {StyleSheet} from 'react-native';
import {WP, colors} from '../../../../utilities';
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.bgColor,
  },
  mainContainer: {
    marginVertical: WP('0'),
  },
  titleContainer: {
    paddingHorizontal: 0,
  },
  headerContainer: {
    paddingHorizontal: WP('4'),
  },
  btnStyle: {
    width: '30%',
    borderRadius: 100,
    marginHorizontal: WP('1'),
    marginVertical: WP('10'),
    alignSelf: 'center',
  },
});

export default styles;
