export const addToFavorites = movie => ({
  type: 'ADD_MOVIE',
  movie,
});

export const removeFromFavorites = id => ({
  type: 'DELETE_MOVIE',
  id,
});
