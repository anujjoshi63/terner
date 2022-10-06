import { ITask } from '@types';
import { atom } from 'jotai';

const MOCK_DATA: ITask[] = [
  {
    backgroundColor: '#4BEED1',
    borderColor: '#1AA58C',
    labels: ['School', 'Everyday'],
    title: 'Finish this project',
    dateTime: new Date(),
    taskId: '1'
  },
  {
    backgroundColor: '#FCE114',
    borderColor: '#E1CB13',
    labels: ['Enjoy'],
    title: 'Eat some food',
    dateTime: new Date(),
    taskId: '2'
  },

  {
    backgroundColor: '#46D2EF',
    borderColor: '#59C7DE',
    labels: ['Life', 'Everyday'],
    title: 'Get some rest',
    dateTime: new Date(),
    taskId: '3'
  },
  {
    backgroundColor: '#B7ADFF',
    borderColor: '#A59CE6',
    labels: ['Study', 'University'],
    title: 'Go to College',
    dateTime: new Date(),
    taskId: '4'
  }
];

// Create your atoms and derivatives
export const tasksAtom = atom(MOCK_DATA);
