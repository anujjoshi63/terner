import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors, hp, wp } from '@themes';

interface IProps {
  backgroundColor: string;
  selected: boolean;
  onPress: () => void;
}
export const ColorCircle: React.FC<IProps> = ({
  backgroundColor,
  selected,
  onPress
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.colorShade,
        { backgroundColor },
        selected && styles.selected,
        pressed && styles.pressed
      ]}
      onPress={onPress}
    />
  );
};

const styles = StyleSheet.create({
  colorShade: {
    width: hp(28),
    height: hp(28),
    borderRadius: hp(25),
    marginHorizontal: wp(7)
  },
  selected: {
    borderWidth: 2,
    borderColor: Colors.black
  },
  pressed: {
    opacity: 0.7
  }
});
