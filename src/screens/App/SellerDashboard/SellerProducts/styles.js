import {StyleSheet} from 'react-native';
import {WP, colors, family} from '../../../../utilities';
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.bgColor,
  },
  mainContainer: {
    paddingHorizontal: WP('4'),
    marginVertical: WP('6'),
  },
  subTextStyle: {
    color: colors.r1,
    fontFamily: family.morkSans_regular,
  },
  titleContainer: {
    paddingHorizontal: 0,
  },
});

export default styles;
