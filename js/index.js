"use strict";

const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt('Один из последних просмотреных фильмов?', ''),
  b = prompt('На сколько оцените его?', '8.1'),
  c = prompt('Один из последних просмотреных фильмов?', ''),
  d = prompt('На сколько оцените его?', '8.1');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
