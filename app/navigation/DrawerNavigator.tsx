import { Pressable } from 'react-native';
import { RootTabParamList, RootTabScreenProps } from 'types';

import { FontAwesome } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import { ProfilePic } from '@components';
import { TabOneScreen, TaskManagerScreen } from '@screens';
import { Hamburger } from '@themes';

const Drawer = createDrawerNavigator<RootTabParamList>();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName='TaskManager'
      screenOptions={({ navigation }) => ({
        sceneContainerStyle: { backgroundColor: '#fff' },
        h: { paddingBottom: 12 },
        headerTitleAlign: 'center',
        headerLeft: () => (
          <Pressable
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            style={({ pressed }) => pressed && { opacity: 0.5 }}
          >
            <Hamburger />
          </Pressable>
        ),
        headerRight: () => <ProfilePic />
      })}
    >
      <Drawer.Screen
        name='TaskManager'
        component={TaskManagerScreen}
        options={{
          title: 'Task Manager',
          drawerIcon: ({ color }) => <TabBarIcon name='check' color={color} />
        }}
      />
      <Drawer.Screen
        name='TabOne'
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: 'Tab One',
          drawerIcon: ({ color }) => <TabBarIcon name='code' color={color} />
        })}
      />
    </Drawer.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

export default DrawerNavigator;