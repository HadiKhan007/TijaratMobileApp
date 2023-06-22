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
    backgroundColor: colors.bgColor,
    borderWidth: 1,
    borderColor: colors.p1,
    marginVertical: WP('3'),
  },
  btnText: {
    color: colors.p1,
  },
  bottomCon: {
    position: 'absolute',
    width: '100%',
    alignSelf: 'center',
    bottom: WP('3'),
    paddingHorizontal: WP('4'),
  },
});

export default styles;
