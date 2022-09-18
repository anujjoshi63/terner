import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { hp } from '@themes';

export const ProfilePic = () => {
  return (
    <View>
      <Image
        source={{
          uri: 'https://ui-avatars.com/api/?name=Mubin+Ansari&background=0D8ABC&color=fff'
        }}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: hp(30),
    width: hp(30),
    borderRadius: hp(20)
  }
});
