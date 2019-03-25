const console = require('console');

const prova = 'https://api.themoviedb.org/3/discover/movie?api_key=55&language=en-US&sort_by=popularity.desc&include_adult=false&page=1';

console.log(prova.replace(/page=\d+/, 'page=2'));
