import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { FontSize, hp } from '@themes';

interface IProps {
  text: string;
  borderColor: string;
}

export const Pill: React.FC<IProps> = ({ text, borderColor }) => {
  return (
    <View>
      <View style={[styles.pillContainer, { borderColor }]}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pillContainer: {
    borderWidth: 1,
    alignSelf: 'flex-start',
    paddingVertical: 2,
    paddingHorizontal: 12,
    borderRadius: hp(30),
    marginRight: 10
  },
  text: {
    fontSize: FontSize.tiny
  }
});
