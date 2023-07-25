import {StyleSheet} from 'react-native';
import {WP, colors} from '../../../utilities';
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
  inputTitle: {
    color: colors.p3,
  },
  inputContainerStyle: {
    height: WP('22'),
    alignItems: 'flex-start',
    paddingVertical: WP('1'),
  },
  contentContainer: {
    flexGrow: 1,
  },
  main: {
    flex: 1,
  },
});

export default styles;
