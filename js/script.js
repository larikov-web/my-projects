"use strict";

let numberOfFilms = prompt('Сколько фильмов вы посмотрели', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    private: false
};

let questionOne = prompt('Один из просмотренных фильмов?', ''),
    questionTwo = prompt('Его оценка?', ''),
    questionThree = prompt('Один из просмотренных фильмов?', ''),
    questionFour = prompt('Его оценка?', '');

personalMovieDB.movies[questionOne] = questionTwo;
personalMovieDB.movies[questionThree] = questionFour;

console.log(personalMovieDB123123);