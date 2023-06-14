import {Dimensions, StyleSheet} from 'react-native';
import {WP, colors, family, size} from '../../../../utilities';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.bgColor,
  },
  mainContainer: {
    flex: 1,
    width: width,
    height: WP('70'),
    paddingHorizontal: WP('4'),
    paddingVertical: WP('3'),
  },
  titleContainer: {
    paddingHorizontal: 0,
  },
  imgContainer: {
    flex: 0.4,
  },
  iconStyle: {
    width: WP('6'),
    height: WP('6'),
  },
  secondContainer: {
    flex: 0.6,
    marginHorizontal: WP('6'),
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: WP('10'),
  },
  btnStyle: {
    width: '33%',
    borderRadius: 100,
    marginHorizontal: WP('1'),
    height: WP('11'),
  },
  btn2Style: {
    width: '33%',
    backgroundColor: colors.bgColor,
    borderWidth: 1,
    borderColor: colors.p3,
    borderRadius: 100,
    marginHorizontal: WP('1'),
    height: WP('11'),
  },
  btn2Title: {
    color: colors.p3,
    fontFamily: family.workSans_medium,
    fontSize: size.small,
  },
  btnTitle: {
    fontFamily: family.workSans_medium,
    fontSize: size.small,
  },
  inputContainerStyle: {
    height: WP('22'),
    alignItems: 'flex-start',
    paddingVertical: WP('1'),
  },
  textStyle: {
    color: colors.r1,
    fontFamily: family.morkSans_regular,
    fontSize: size.small,
    marginVertical: WP('2'),
  },
});

export default styles;
