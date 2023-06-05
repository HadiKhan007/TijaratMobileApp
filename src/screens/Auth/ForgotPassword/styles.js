import {StyleSheet} from 'react-native';
import {WP, colors, family, size} from '../../../utilities';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.bgColor,
  },
  mainContainer: {
    paddingHorizontal: WP('6'),
    marginVertical: WP('5'),
  },
  titleText: {
    color: colors.p3,
    alignSelf: 'center',
    fontSize: size.large,
    fontFamily: family.workSans_bold,
    marginVertical: WP('3'),
    marginTop: WP('40'),
  },
  subTitle: {
    color: colors.p2,
    textAlign: 'center',
    fontFamily: family.workSans_light,
    fontSize: size.small,
    lineHeight: WP('5'),
  },
  titleStyle: {
    marginTop: WP('8'),
  },
  btnStyle: {
    marginTop: WP('5'),
  },
  contentContainer: {
    flexGrow: 1,
  },
  main: {
    flex: 1,
  },
});

export default styles;
