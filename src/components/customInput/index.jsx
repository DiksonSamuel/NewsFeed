import * as React from 'react';
import { View, Text, TextInput } from 'react-native';
import colors from '../../utils/colors';
import styles from './styles';
import {HelperText} from 'react-native-paper';

const CustomInput = ({style, value, onChangeText, placeholder, keyboardType, secureTextEntry, isError, errorMsg}) => {

  return(
    <View>
      <TextInput
        style={[styles.inputStyle, style]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.lightGrey}
        showSoftInputOnFocus={true}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        autoCorrect={false}
        />
      {isError ? <HelperText type="error">{errorMsg}</HelperText> : null}
    </View>
  )
}

export default CustomInput;