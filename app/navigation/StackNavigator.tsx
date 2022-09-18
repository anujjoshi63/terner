import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ModalScreen, NotFoundScreen } from '@screens';
import { RootStackParamList } from '../types';
import DrawerNavigator from './DrawerNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Root'
        component={DrawerNavigator}
        options={{ headerShown: false }}
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
