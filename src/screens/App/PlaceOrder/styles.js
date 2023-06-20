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
    width: '90%',
    alignSelf: 'center',
  },
  lineStyle: {
    marginVertical: WP('4'),
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
  contentContainer: {
    flexGrow: 1,
  },
  main: {
    flex: 1,
  },
});

export default styles;
