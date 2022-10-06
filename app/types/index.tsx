/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams
} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootDrawerParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  AddTask: { mode: 'edit' | 'add'; taskId?: string };
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootDrawerParamList = {
  TabOne: undefined;
  TabTwo: undefined;
  TaskManager: undefined;
};

export type RootDrawerScreenProps<Screen extends keyof RootDrawerParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootDrawerParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export interface ITask {
  backgroundColor: string;
  borderColor: string;
  labels?: string[];
  title: string;
  dateTime: Date;
  taskId: string;
}
