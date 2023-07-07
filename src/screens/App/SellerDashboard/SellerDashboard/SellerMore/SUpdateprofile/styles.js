import {StyleSheet} from 'react-native';
import {WP, colors, family, size} from '../../../../../../utilities';
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.bgColor,
  },
  mainContainer: {
    paddingHorizontal: WP('4'),
    marginVertical: WP('0'),
  },
  titleCon: {
    paddingHorizontal: 0,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: WP('5'),
  },
  btnStyle: {
    width: '30%',
    borderRadius: 100,
    marginHorizontal: WP('1'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn2Style: {
    width: '30%',
    backgroundColor: colors.bgColor,
    borderWidth: 1,
    borderColor: colors.p3,
    borderRadius: 100,
    marginHorizontal: WP('1'),
  },
  btn2Title: {
    color: colors.p3,
  },
  titleStyle: {
    color: colors.p1,
    fontFamily: family.workSans_semiBold,
    fontSize: size.normal,
  },
});

export default styles;
