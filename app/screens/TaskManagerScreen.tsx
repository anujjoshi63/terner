import { ScrollView, StyleSheet, View } from 'react-native';
import { PrimaryButton, Text } from '@components';
import { AddTask, Colors, Fonts, FontSize, hp, sharedStyles } from '@themes';
import { TaskCard } from '@components';
import Toast from 'react-native-toast-message';
import { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ITask, RootStackParamList } from '@types';
import { useAtom } from 'jotai';
import { tasksAtom } from '@stores';

type TProps = NativeStackScreenProps<RootStackParamList, 'AddTask'>;

export const TaskManagerScreen: React.FC<TProps> = ({ navigation }) => {
  const [tasks, setTasks] = useAtom(tasksAtom);

  const deleteTaskHandler = (taskId: string) => {
    setTasks(tasks.filter(task => task.taskId !== taskId));
    Toast.show({
      type: 'success',
      text1: 'Yoohoo!🥳',
      text2: 'Task completed!',
      position: 'bottom'
    });
  };

  const editTaskHandler = (taskId: string) => {
    navigation.navigate('AddTask', {
      mode: 'edit',
      taskId
    });
  };

  return (
    <View style={styles.screen}>
      <Text style={sharedStyles.h3}>Hello Mubin!</Text>
      <Text style={sharedStyles.h1}>Here's The Update.</Text>
      <ScrollView style={styles.tasksContainer}>
        {tasks.map(task => (
          <TaskCard
            task={task}
            key={task.title}
            onDeleteTask={deleteTaskHandler}
            onEditTask={editTaskHandler}
          />
        ))}
      </ScrollView>
      <PrimaryButton
        title='Add Task'
        style={styles.addTaskButton}
        icon={<AddTask />}
        onPress={() => navigation.navigate('AddTask', { mode: 'add' })}
      />
      <View style={styles.navigationContainer}>
        <PrimaryButton title='Today' textStyle={styles.navigationButtonText} />
        <PrimaryButton
          title='Upcoming'
          textStyle={[
            styles.navigationButtonText,
            styles.navigationNonActiveButtonText
          ]}
          style={styles.navigationNonActiveButton}
        />
        <PrimaryButton
          title='Done'
          textStyle={[
            styles.navigationButtonText,
            styles.navigationNonActiveButtonText
          ]}
          style={styles.navigationNonActiveButton}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    marginVertical: hp(12)
  },
  tasksContainer: {
    marginTop: hp(16),
    height: hp(490)
  },
  addTaskButton: {
    alignSelf: 'center',
    marginTop: hp(12)
  },
  navigationContainer: {
    marginTop: hp(12),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  navigationNonActiveButton: {
    backgroundColor: '#fff'
  },
  navigationNonActiveButtonText: {
    color: Colors.black
  },
  navigationButtonText: {
    fontFamily: Fonts.REGULAR,
    fontSize: FontSize.medium
  }
});
