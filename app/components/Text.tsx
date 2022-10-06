import {
  StyleSheet,
  Text as NativeText,
  TextProps,
  TextStyle,
  View
} from 'react-native';
import React from 'react';
import { Colors, Fonts } from '@themes';

interface IProps {
  children: React.ReactNode;
  style?: TextStyle | TextStyle[];
}

export const Text: React.FC<IProps & TextProps> = ({
  children,
  style,
  ...props
}) => {
  return (
    <NativeText {...props} style={[styles.text, style]}>
      {children}
    </NativeText>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: Fonts.REGULAR,
    color: Colors.black
  }
});
