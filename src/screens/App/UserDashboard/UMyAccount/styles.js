import {Dimensions, StyleSheet} from 'react-native';
import {WP, colors, family, size} from '../../../../utilities';
const {width, height} = Dimensions.get('window');

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
    marginTop: WP('30'),
  },
  btnStyle: {
    width: '30%',
    borderRadius: 100,
    marginHorizontal: WP('1'),
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
  inputStyle: {
    backgroundColor: colors.bgColor,
    marginVertical: WP('2.5'),
    paddingHorizontal: WP('2'),
  },
});

export default styles;
