import { combineReducers } from 'redux';

const INITIAL_FAVORITES = [
  {
    title: 'trymovie',
    id: 'try1234',
  },
  {
    title: 'trymovie',
    id: 'try12345',
  },
];

const favoriteListReducer = (state = INITIAL_FAVORITES, action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return state;
    case 'DELETE_MOVIE':
      return state;
    default:
      return state;
  }
};

export default combineReducers({
  favoriteList: favoriteListReducer,
});
