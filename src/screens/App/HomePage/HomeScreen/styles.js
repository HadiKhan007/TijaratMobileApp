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
  fContainer: {
    backgroundColor: colors.s1,
    height: WP('50'),
    width: '100%',
    paddingHorizontal: WP('4'),
    paddingVertical: WP('2'),
  },
  titleStyle: {
    color: colors.s2,
    fontSize: size.medium,
    fontFamily: family.workSans_bold,
  },
  subTitle: {
    color: colors.s2,
    fontSize: size.normal,
    fontFamily: family.workSans_medium,
    marginVertical: WP('2'),
  },
  btnStyle: {
    backgroundColor: colors.s2,
    width: '28%',
    borderRadius: WP('8'),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: WP('4'),
  },
  btnText: {
    color: colors.w1,
    fontSize: size.tiny,
    fontFamily: family.workSans_medium,
  },
  imgStyle: {
    width: '100%',
    height: '30%',
  },
  contentContainer: {
    flexGrow: 1,
  },
  main: {
    flex: 1,
  },
});

export default styles;
