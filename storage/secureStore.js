/* eslint-disable import/prefer-default-export */
import { SecureStore } from 'expo';

export const loadState = () => {
  try {
    const serializedState = SecureStore.getItemAsync('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    SecureStore.setItemAsync('state', serializedState);
  } catch (err) {
    return undefined;
  }
};
