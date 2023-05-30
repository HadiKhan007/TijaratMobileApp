import {StyleSheet} from 'react-native';
import {WP, colors, family, size} from '../../../utilities';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.bgColor,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: WP('8'),
  },
  iconStyle: {
    width: WP('50'),
    height: WP('30'),
  },
  textStyle: {
    paddingHorizontal: WP('10'),
    color: colors.p1,
    textAlign: 'center',
    fontSize: size.small,
    lineHeight: WP('6'),
    fontFamily: family.workSans_medium,
  },
  btnStyle: {
    marginTop: WP('30'),
  },
});

export default styles;
