import { combineReducers } from "redux";

const INITIAL_SEARCH = ["hi"];
const INITIAL_FAVORITES = ["hi"];

const searchListReducer = (state = INITIAL_SEARCH, action) => {
  switch (action.type) {
    case "SEARCH_MOVIES":
      break;
    case "RESET_LIST":
      break;
    default:
      return state;
  }
};

const favoriteReducer = (state = INITIAL_FAVORITES, action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      break;
    case "DELETE_MOVIE":
      break;
    default:
      return state;
  }
};

export default combineReducers({
  searchResults: searchListReducer,
  favoriteList: favoriteReducer
});
