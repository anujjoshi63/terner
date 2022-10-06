import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { hp, sharedStyles } from '@themes';

interface IProps {
  text: string;
}

export const Label: React.FC<IProps> = ({ text }) => {
  return <Text style={[sharedStyles.faded, styles.label]}>{text}</Text>;
};

const styles = StyleSheet.create({
  label: {
    marginVertical: hp(10)
  }
});
