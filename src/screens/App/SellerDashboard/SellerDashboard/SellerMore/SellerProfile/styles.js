import {StyleSheet} from 'react-native';
import {WP, colors, family, size} from '../../../../../../utilities';
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.bgColor,
  },
  mainContainer: {
    paddingHorizontal: WP('4'),
    marginVertical: WP('6'),
  },
  titleContainer: {
    flexDirection: 'row',
    marginVertical: WP('3'),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleStyle: {
    color: colors.p1,
    fontSize: size.large,
    fontFamily: family.workSans_bold,
  },
});

export default styles;
