import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform,
  ActivityIndicator,
} from 'react-native';
import React, {Fragment} from 'react';
import {colors, family, HP, size, WP} from '../../utilities';

const AppButton = ({
  title,
  backgroundColor = colors.p1,
  icon,
  onPress,
  containerStyle,
  titleStyle,
  loading,
  loaderColor = colors.white,
  disabled,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.mainContainer, containerStyle]}>
      {loading ? (
        <ActivityIndicator size={'small'} color={loaderColor} />
      ) : (
        <Fragment>
          {icon && <Image source={icon} style={styles.iconStyle} />}
          <Text style={[styles.textStyle, titleStyle]}>{title}</Text>
        </Fragment>
      )}
    </TouchableOpacity>
  );
};

export {AppButton};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    backgroundColor: colors.p1,
    width: '100%',
    padding: 10,
    marginVertical: WP('1.5'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  textStyle: {
    color: colors.w1,
    textAlign: 'center',
    fontFamily: family.workSans_medium,
    marginLeft: WP('2'),
    fontSize: Platform.OS === 'ios' ? size.large : size.normal,
  },
  iconStyle: {
    width: WP('6'),
    height: HP('3'),
    resizeMode: 'contain',
  },
});
