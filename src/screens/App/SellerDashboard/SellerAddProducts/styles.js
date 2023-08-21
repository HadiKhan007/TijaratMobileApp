import {StyleSheet} from 'react-native';
import {WP, colors, size} from '../../../../utilities';
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
    marginVertical: WP('2'),
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
    marginTop: WP('10'),
    marginBottom: WP('3'),
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
  errorMessage: {
    color: colors.r1,
    fontSize: size.xxsmall,
  },
  cardStyle: {
    borderRadius: 10,
    shadowColor: '#ffffff60',
    shadowOffset: {width: 0, height: 0.2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: colors.w1,
    padding: WP('2.5'),
  },
});

export default styles;
