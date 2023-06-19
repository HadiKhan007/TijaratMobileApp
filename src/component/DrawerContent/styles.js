import {Platform, StyleSheet} from 'react-native';
import {colors, family, size, WP} from '../../utilities';

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.bgColor,
    paddingHorizontal: WP('4'),
  },
  firstContainer: {
    backgroundColor: colors.bgColor,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: WP('8'),
    paddingTop: Platform.OS === 'ios' ? WP('15') : WP('8'),
  },
  secondContainer: {
    alignItems: 'flex-start',
  },
  textStyle: {
    color: colors.p3,
    fontFamily: family.workSans_medium,
    fontSize: size.h5,
    width: '70%',
  },
  titleText: {
    color: colors.p3,
    fontFamily: family.workSans_bold,
    fontSize: size.large,
    marginLeft: WP('8'),
    marginVertical: WP('3'),
  },
  listFooterComponentStyle: {
    paddingVertical: WP('20'),
  },
  contentContainerStyle: {
    paddingBottom: WP('20'),
    flex: 1,
  },
  container: {
    paddingBottom: WP('1'),
  },
  flatlistStyle: {
    flex: 1,
    paddingBottom: WP('20'),
  },
});

export default styles;
