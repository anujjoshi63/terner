import { useAtom } from 'jotai';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { ITask, RootStackParamList } from 'types';

import {
  ColorCircle,
  Label,
  PrimaryButton,
  Text,
  TextInput
} from '@components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { tasksAtom } from '@stores';
import { Colors, hp, sharedStyles, TaskColors, wp } from '@themes';
import { formatDateTime } from '@utils/dateTime';

type TProps = NativeStackScreenProps<RootStackParamList, 'AddTask'>;

export const AddTaskScreen: React.FC<TProps> = ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'New Task'
    });
  }, []);

  const [tasks, setTasks] = useAtom(tasksAtom);

  const [taskTitle, setTaskTitle] = useState('');
  const [taskLabels, setTaskLabels] = useState('');
  const [date, setDate] = useState(new Date());
  const [taskColor, setTaskColor] = useState(TaskColors[0]);

  const [isAddDisabled, setIsAddDisabled] = useState(true);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    if (taskTitle !== '' && date) {
      setIsAddDisabled(false);
    }
  }, [taskTitle, setIsAddDisabled]);

  const taskTitleInputHander = (text: string) => {
    setTaskTitle(text);
  };

  const taskLabelsInputHander = (text: string) => {
    setTaskLabels(text);
  };

  const taskColorCircleHandler = (color: typeof TaskColors[0]) => {
    setTaskColor(color);
  };

  const addTaskHandler = () => {
    const labels = taskLabels.split(',').map(label => label.trim());

    const newTask: ITask = {
      title: taskTitle,
      dateTime: date,
      taskId: Math.random().toString(),
      backgroundColor: taskColor.backgroundColor,
      borderColor: taskColor.borderColor,
      labels
    };
    setTasks([...tasks, newTask]);
    Toast.show({
      type: 'success',
      text1: 'Task Added!🎉',
      text2: 'Keep the flow going.',
      position: 'bottom'
    });
    navigation.navigate('Root');
  };

  return (
    <View style={styles.screen}>
      <View>
        <Label text='My New Task' />
        <TextInput
          maxLength={50}
          autoFocus={true}
          onChangeText={taskTitleInputHander}
          value={taskTitle}
        />

        <Label text='Deadline' />
        <Pressable
          onPress={() => setVisible(true)}
          style={{ borderBottomColor: Colors.lightGray, borderBottomWidth: 1 }}
        >
          <Text style={sharedStyles.textInput}>{formatDateTime(date)}</Text>
        </Pressable>
        <DateTimePickerModal
          isVisible={isVisible}
          mode='datetime'
          onHide={() => setVisible(false)}
          onConfirm={date => {
            setVisible(false);
            setDate(date);
          }}
          onCancel={() => setVisible(false)}
          date={date}
        />
        <Label text='Labels' />
        <TextInput
          placeholder='Everyday, University'
          onChangeText={taskLabelsInputHander}
          value={taskLabels}
        />
        <Label text='Color Task' />
        <ScrollView horizontal style={styles.colorShadeContainer}>
          {TaskColors.map(color => (
            <ColorCircle
              backgroundColor={color.backgroundColor}
              selected={color.backgroundColor === taskColor.backgroundColor}
              onPress={() => taskColorCircleHandler(color)}
            />
          ))}
        </ScrollView>
      </View>

      <View>
        <PrimaryButton
          title='Add Task'
          style={[styles.addTaskButton, isAddDisabled && { opacity: 0.7 }]}
          disabled={isAddDisabled}
          onPress={addTaskHandler}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    marginVertical: hp(24),
    justifyContent: 'space-between',
    flex: 1
  },

  addTaskButton: {
    width: '100%',
    alignSelf: 'center',
    marginBottom: hp(24)
  },
  colorShadeContainer: {
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 1,
    paddingBottom: hp(20),
    marginVertical: 4
  }
});
