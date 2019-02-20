export const searchMovies = query => ({
  type: "SEARCH_MOVIES",
  query
});

export const resetSearch = () => ({
  type: "RESET_SEARCH"
});

export const addToFavorites = movie => ({
  type: "ADD_MOVIE",
  movie
});

export const removeFromFavorites = id => ({
  type: "DELETE_MOVIE",
  id
});
