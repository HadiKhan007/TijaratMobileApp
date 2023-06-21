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
  },
  btnStyle: {
    borderRadius: 100,
    marginVertical: WP('7'),
  },
  priceText: {
    color: colors.p3,
    fontFamily: family.morkSans_regular,
    fontSize: size.xxtiny,
  },
  numText: {
    color: colors.p3,
    fontFamily: family.workSans_semiBold,
    fontSize: size.medium,
  },
});

export default styles;
