import {StyleSheet} from 'react-native';
import {WP, colors, family, size} from '../../../utilities';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.bgColor,
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: WP('8'),
  },
  iconStyle: {
    width: WP('50'),
    height: WP('30'),
  },
  textStyle: {
    color: colors.p1,
    fontSize: size.small,
    lineHeight: WP('6'),
    fontFamily: family.workSans_medium,
    marginVertical: WP('8'),
    alignSelf: 'center',
    textAlign: 'center',
  },
  btnStyle: {
    marginTop: WP('30'),
  },
});

export default styles;
