import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {WP, colors} from '../../utilities';

const OutLineInput = ({secureTextEntry}) => {
  const [showPass, setShowPass] = React.useState(secureTextEntry);

  return (
    <View>
      <TextInput
        mode="outlined"
        label="Full Name"
        value="Hamza Habib Basra"
        activeOutlineColor={colors.p1}
        outlineColor="red"
        underlineColor="blue"
        outlineStyle={styles.outlineStyle}
        textColor={colors.p2}
        multiline
        contentStyle={styles.contentStyle}
        style={styles.inputStyle}
        editable
        theme={{colors: {primary: '#ff0000'}}}
      />
    </View>
  );
};

export {OutLineInput};

const styles = StyleSheet.create({
  outlineStyle: {
    borderColor: colors.p6,
    backgroundColor: colors.bgColor,
    borderWidth: 2,
  },
  contentStyle: {},
  inputStyle: {
    marginVertical: WP('2'),
  },
});
