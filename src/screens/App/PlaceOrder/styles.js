import {StyleSheet} from 'react-native';
import {colors, family, size, WP} from '../../../utilities';
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
    marginVertical: 0,
    marginTop: WP('10'),
  },
  btnStyle: {
    borderRadius: 100,
    marginVertical: WP('7'),
  },
  lineStyle: {
    marginVertical: 0,
  },
  titleStyle: {
    color: colors.p1,
    fontFamily: family.workSans_bold,
    fontSize: size.medium,
    alignSelf: 'center',
    marginVertical: WP('3'),
  },
  inputTitle: {
    color: colors.p3,
  },
});

export default styles;
