import { ScrollView, StyleSheet, View } from 'react-native';
import { Text } from '@components';
import { hp, sharedStyles } from '@themes';
import { TaskCard } from '@components';

const MOCK_DATA = [
  {
    backgroundColor: '#4BEED1',
    borderColor: '#1AA58C',
    labels: ['School', 'Everyday'],
    title: 'Finish this project',
    date: '17 September 2022',
    time: '03:32 pm'
  },
  {
    backgroundColor: '#FCE114',
    borderColor: '#E1CB13',
    labels: ['Enjoy'],
    title: 'Eat some food',
    date: '17 September 2022',
    time: '03:32 pm'
  },
  {
    backgroundColor: '#46D2EF',
    borderColor: '#59C7DE',
    labels: ['Life', 'Everyday'],
    title: 'Get some rest',
    date: '17 September 2022',
    time: '03:32 pm'
  }
];

export function TaskManagerScreen() {
  return (
    <View style={styles.screen}>
      <Text style={sharedStyles.h3}>Hello Mubin!</Text>
      <Text style={sharedStyles.h1}>Here's The Update.</Text>
      <ScrollView style={styles.tasksContainer}>
        {MOCK_DATA.map(task => (
          <TaskCard {...task} key={task.title} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    marginVertical: hp(28)
  },
  tasksContainer: {
    marginTop: hp(16),
    height: hp(490)
  }
});
