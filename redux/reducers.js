import { combineReducers } from 'redux';
import { Constants } from 'expo';

const apiKey = Constants.manifest.extra.API_KEY;
const baseUrl = 'https://api.themoviedb.org/3/';

const DEFAULT_FAVORITES = [];

const DEFAULT_SEARCH = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

const DEFAULT_GENRES = [];

const favoriteListReducer = (state = DEFAULT_FAVORITES, action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [...state, action.movie];
    case 'DELETE_MOVIE':
      return state.filter(movie => movie.id !== action.id);
    default:
      return state;
  }
};

const genreListReducer = (state = DEFAULT_GENRES, action) => {
  switch (action.type) {
    case 'ADD_GENRES':
      return [...action.query.genres];
    default:
      return state;
  }
};

const queryReducer = (state = DEFAULT_SEARCH, action) => {
  switch (action.type) {
    case 'UPDATE_SEARCH':
      return `${baseUrl}search/movie?api_key=${apiKey}&language=en-US&query=${
        action.query
      }&page=1&include_adult=false`;
    case 'RESET_SEARCH':
      return DEFAULT_SEARCH;
    case 'GENRE_SEARCH':
      return `${DEFAULT_SEARCH}&with_genres=${action.genreId}`;
    case 'DATE_SEARCH':
      return `${DEFAULT_SEARCH}&primary_release_year=${action.year}`;
    case 'GENRE_AND_DATE_SEARCH':
      return `${DEFAULT_SEARCH}&primary_release_year=${action.year}&with_genres=${action.genreId}`;
    default:
      return state;
  }
};

const movieListReducer = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_MOVIELIST':
      return [...action.list];
    default:
      return state;
  }
};

const reducers = combineReducers({
  favoriteList: favoriteListReducer,
  genreList: genreListReducer,
  searchQuery: queryReducer,
  movieList: movieListReducer,
});
export default reducers;
