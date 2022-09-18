import { StyleSheet, View } from 'react-native';
import { Text } from '@components';
import { hp, sharedStyles } from '@themes';

export function TaskManagerScreen() {
  return (
    <View style={styles.screen}>
      <Text style={sharedStyles.h3}>Hello Mubin!</Text>
      <Text style={sharedStyles.h1}>Here's The Update.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    marginVertical: hp(28)
  }
});
