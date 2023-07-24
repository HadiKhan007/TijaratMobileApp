import React, {Fragment, useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {WP, colors, family} from '../../utilities';

const CustomDropdown = ({items, setItems, title}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  return (
    <Fragment>
      {title && <Text style={[styles.titleStyle]}>{title}</Text>}
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={styles.dropDownStyle}
        dropDownContainerStyle={styles.dropDownContainerStyle}
      />
    </Fragment>
  );
};

export {CustomDropdown};

const styles = StyleSheet.create({
  dropDownStyle: {
    borderColor: colors.p2,
    backgroundColor: null,
  },
  titleStyle: {
    color: colors.p3,
    fontFamily: family.workSans_medium,
    marginVertical: WP('1.5'),
  },
  dropDownContainerStyle: {
    backgroundColor: colors.w1,
  },
});
