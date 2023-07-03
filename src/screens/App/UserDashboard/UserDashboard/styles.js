import {Dimensions, StyleSheet} from 'react-native';
import {WP, colors} from '../../../../utilities';
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
    position: 'absolute',
    width: '90%',
    top: WP('60'),
  },
});

export default styles;
