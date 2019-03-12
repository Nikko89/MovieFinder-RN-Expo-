/* eslint-disable import/prefer-default-export */
import { AsyncStorage } from 'react-native';

export const loadState = async () => {
  try {
    const serializedState = await AsyncStorage.getItem('state');
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = async (state) => {
  try {
    const serializedState = await AsyncStorage.setItem('state', JSON.stringify(state));
    return serializedState;
  } catch (err) {
    return undefined;
  }
};
