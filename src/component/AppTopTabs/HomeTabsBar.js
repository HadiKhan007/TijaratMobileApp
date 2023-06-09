import React, {useRef} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Animated,
  Image,
} from 'react-native';
import {colors, family, size, WP, appIcons} from '../../utilities';

const HomeTabsBar = ({state, descriptors, navigation}) => {
  let scrollview_ref = useRef(null);

  const tabIcons = [appIcons.wCategory, appIcons.selling, appIcons.deal];

  return (
    <View style={styles.tabStyle}>
      <ScrollView
        ref={scrollview_ref}
        horizontal
        showsHorizontalScrollIndicator={false}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
          const isFocused = state.index === index;
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          if (isFocused) {
            return (
              <View
                key={`tab-${label}`}
                testID={options.tabBarTestID}
                style={[
                  styles.singleTabFocused,
                  // {borderColor: isFocused ? colors.p1 : colors.white},
                ]}
                onLayout={event => {
                  const layout = event.nativeEvent.layout;
                  scrollview_ref.current.scrollTo({
                    x: layout.x,
                    y: 0,
                    animated: false,
                  });
                }}>
                <Image
                  resizeMode="contain"
                  source={tabIcons[index]}
                  style={[
                    styles.iconStyle,
                    {tintColor: isFocused ? colors.w1 : colors.p1},
                  ]}
                />
                <Animated.Text style={[styles.text, {color: colors.w1}]}>
                  {label}
                </Animated.Text>
              </View>
            );
          } else {
            return (
              <TouchableOpacity
                key={index}
                accessibilityRole="button"
                accessibilityState={isFocused ? {selected: true} : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                style={[styles.singleTab]}
                onLongPress={onLongPress}>
                <Image
                  resizeMode="contain"
                  source={tabIcons[index]}
                  style={[styles.iconStyle]}
                />
                <Animated.Text numberOfLines={1} style={[styles.text]}>
                  {label}
                </Animated.Text>
              </TouchableOpacity>
            );
          }
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  tabStyle: {
    flexDirection: 'row',
    height: WP('14'),
    // backgroundColor: colors.bgColor,
    marginBottom: WP('2'),
    paddingHorizontal: WP('2'),
  },
  text: {
    fontFamily: family.workSans_medium,
    fontSize: size.small,
    color: colors.p1,
  },
  singleTab: {
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 100,
    padding: WP('3'),
    marginVertical: WP('1'),
    marginLeft: WP('2'),
    marginRight: WP('1'),
    backgroundColor: colors.g1,
  },
  singleTabFocused: {
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 35,
    borderColor: colors.g1,
    paddingVertical: WP('2'),
    paddingHorizontal: WP('3'),
    marginVertical: WP('2'),
    marginLeft: WP('2'),
    marginRight: WP('1'),
    backgroundColor: colors.p1,
  },
  iconStyle: {
    width: WP('4'),
    height: WP('4'),
    marginHorizontal: WP('1'),
  },
});

export {HomeTabsBar};
