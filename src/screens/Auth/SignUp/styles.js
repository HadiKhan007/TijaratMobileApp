import {StyleSheet} from 'react-native';
import {WP, colors, family, size} from '../../../utilities';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.bgColor,
  },
  mainContainer: {
    paddingHorizontal: WP('4'),
    marginVertical: WP('2'),
  },
  titleText: {
    color: colors.p3,
    alignSelf: 'center',
    fontSize: size.large,
    fontFamily: family.workSans_bold,
    marginVertical: WP('3'),
    marginTop: WP('5'),
  },
  subTitle: {
    color: colors.p2,
    textAlign: 'center',
    fontFamily: family.workSans_light,
    fontSize: size.small,
    lineHeight: WP('5'),
  },
  accountText: {
    color: colors.p2,
    fontFamily: family.workSans_medium,
    fontSize: size.small,
    marginTop: WP('20'),
  },
  clickText: {
    color: colors.p4,
    fontFamily: family.workSans_medium,
    fontSize: size.medium,
  },
  contentContainer: {
    flexGrow: 1,
  },
  main: {
    flex: 1,
  },
  btnStyle: {
    marginTop: WP('5'),
  },
});

export default styles;
