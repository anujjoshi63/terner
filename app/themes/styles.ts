import { StyleSheet } from 'react-native';
import { Fonts } from './typography';
import { FontSize } from './typography';

const sharedStyles = StyleSheet.create({
  h1: {
    fontSize: FontSize.h1,
    fontFamily: Fonts.BOLD,
    marginVertical: 4
  },
  h3: {
    fontSize: FontSize.h3,
    fontFamily: Fonts.SEMIBOLD,
    marginVertical: 2
  }
});

export { sharedStyles };
