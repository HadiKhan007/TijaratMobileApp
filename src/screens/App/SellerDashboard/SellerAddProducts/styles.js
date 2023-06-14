import {StyleSheet} from 'react-native';
import {WP, colors} from '../../../../utilities';
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: colors.bgColor,
  },
  mainContainer: {
    paddingHorizontal: WP('6'),
    marginVertical: WP('6'),
  },
  titleContainer: {
    paddingHorizontal: WP('0'),
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
  btnStyle: {
    borderRadius: 100,
  },
  btn2Style: {
    backgroundColor: colors.bgColor,
    borderWidth: 1,
    borderColor: colors.p3,
    borderRadius: 100,
  },
  btn2Title: {
    color: colors.p3,
  },
});

export default styles;
