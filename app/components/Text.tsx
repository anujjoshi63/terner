import {
  StyleSheet,
  Text as BuiltInText,
  TextProps,
  TextStyle,
  View
} from 'react-native';
import React from 'react';
import { Colors, Fonts } from '@themes';

interface IProps {
  children: React.ReactNode;
  style?: TextStyle;
  props?: TextProps;
}

export const Text: React.FC<IProps> = ({ children, style, props }) => {
  return (
    <BuiltInText {...props} style={[styles.text, style]}>
      {children}
    </BuiltInText>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: Fonts.REGULAR,
    color: Colors.black
  }
});
