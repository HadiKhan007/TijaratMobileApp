import React, {useRef} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Animated,
} from 'react-native';
import {colors, family, size, WP} from '../../utilities';

const OrdersTabsBar = ({state, descriptors, navigation}) => {
  let scrollview_ref = useRef(null);

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
                style={[styles.singleTabFocused]}
                onLayout={event => {
                  const layout = event.nativeEvent.layout;
                  scrollview_ref.current.scrollTo({
                    x: layout.x,
                    y: 0,
                    animated: false,
                  });
                }}>
                <Animated.Text
                  style={[isFocused ? styles.focusText : styles.text]}>
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
    marginBottom: WP('2'),
    paddingHorizontal: WP('2'),
  },
  text: {
    fontFamily: family.workSans_medium,
    fontSize: size.small,
    color: colors.p2,
  },
  focusText: {
    fontFamily: family.workSans_medium,
    fontSize: size.small,
    color: colors.gr1,
  },
  singleTab: {
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 100,
    padding: WP('3'),
    marginVertical: WP('1'),
    marginLeft: WP('5'),
  },
  singleTabFocused: {
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: colors.g1,
    paddingVertical: WP('2'),
    paddingHorizontal: WP('3'),
    marginVertical: WP('2'),
    marginLeft: WP('5'),
  },
  iconStyle: {
    width: WP('4'),
    height: WP('4'),
    marginHorizontal: WP('1'),
  },
  tabIndicator: {
    backgroundColor: 'blue', // Customize the color of the bottom line
    height: 2, // Customize the height of the bottom line
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export {OrdersTabsBar};
