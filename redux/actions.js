// favorite list methods

export const addToFavorites = movie => ({
  type: 'ADD_MOVIE',
  movie,
});

export const removeFromFavorites = id => ({
  type: 'DELETE_MOVIE',
  id,
});

// genre list fetcher

export const fetchGenreList = query => ({
  type: 'ADD_GENRES',
  query,
});

// search query methods

export const updateSearchQuery = query => ({
  type: 'UPDATE_SEARCH',
  query,
});

export const genreSearch = genreId => ({
  type: 'GENRE_SEARCH',
  genreId,
});

export const dateSearch = year => ({
  type: 'DATE_SEARCH',
  year,
});

export const genreAndDateSearch = (year, genreId) => ({
  type: 'GENRE_AND_DATE_SEARCH',
  year,
  genreId,
});

// movie list fetcher

export const fetchMovieList = list => ({
  type: 'UPDATE_MOVIELIST',
  list,
});
