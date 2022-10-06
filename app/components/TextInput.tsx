import {
  StyleSheet,
  TextInput as NativeTextInput,
  TextInputProps,
  TextStyle
} from 'react-native';
import React from 'react';
import { sharedStyles } from '@themes';

interface IProps {
  style?: TextStyle | TextStyle[];
  placeholder?: string;
}

export const TextInput: React.FC<IProps & TextInputProps> = ({
  style,
  placeholder,
  ...props
}) => {
  return (
    <NativeTextInput
      {...props}
      style={[sharedStyles.textInput, style]}
      placeholder={placeholder || 'Type something...'}
    />
  );
};

const styles = StyleSheet.create({});
