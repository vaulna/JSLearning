'use strict';
let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
let personalMovieDB={
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};

let lastMovieName=prompt('Один из последних просмотренных фильмов?',''),
    movieScore=+prompt('На сколько оцените его?',''),
    lastMovieName2=prompt('Один из последних просмотренных фильмов?',''),
    movieScore2=+prompt('На сколько оцените его?','');

    personalMovieDB.movies[lastMovieName]=movieScore;
    personalMovieDB.movies[lastMovieName2]=movieScore2;

    console.log(personalMovieDB);
