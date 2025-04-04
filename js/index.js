"use strict";

const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};


for (let i = 0; i < 2; i++) {
  const a = prompt('Один из последних просмотреных фильмов?', ''),
    b = prompt('На сколько оцените его?', '8.1');

  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
  } else {
    i--;
  }
}

if (personalMovieDB.count < 10) {
  console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log('Вы классический зритель');
} else if (personalMovieDB >= 30) {
  console.log('Вы киноман');
} else {
  console.log('Error');
}

console.log(personalMovieDB);
