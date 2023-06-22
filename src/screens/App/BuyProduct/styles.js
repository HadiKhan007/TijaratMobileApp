import {StyleSheet} from 'react-native';
import {colors, family, size, WP} from '../../../utilities';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.bgColor,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mainContainer: {
    paddingHorizontal: WP('4'),
  },
  titleCon: {
    paddingHorizontal: 0,
  },
  btnStyle: {
    borderRadius: 100,
    marginVertical: WP('4'),
    backgroundColor: colors.bgColor,
    borderWidth: 1,
    borderColor: colors.p1,
    width: '85%',
  },
  btnText: {
    color: colors.p1,
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
  descStyle: {
    color: colors.p2,
    fontFamily: family.morkSans_regular,
    fontSize: size.small,
    marginVertical: WP('2'),
  },
  readStyle: {
    color: colors.p4,
    fontFamily: family.workSans_medium,
    fontSize: size.normal,
    textDecorationLine: 'underline',
    marginVertical: WP('3'),
  },
  iconStyle: {
    width: WP('10'),
    height: WP('10'),
  },
});

export default styles;
