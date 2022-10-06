import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ModalScreen, NotFoundScreen, AddTaskScreen } from '@screens';
import { RootStackParamList } from '../types';
import DrawerNavigator from './DrawerNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: '#fff' },

        headerTitleAlign: 'center',
        headerBackTitle: ''
      }}
    >
      <Stack.Screen
        name='Root'
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='AddTask'
        component={AddTaskScreen}
        options={{ animation: 'slide_from_bottom' }}
      />
      <Stack.Screen
        name='NotFound'
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name='Modal' component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default StackNavigator;
