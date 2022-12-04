'use strict';
import axios from 'axios';


import { Notify } from 'notiflix/build/notiflix-notify-aio';
const MOVIE_KEY = "10612ebbbeaf2ad5999e09badf85e183";


export class queryToAPI {

  #page = 1;

  async fetchTrendingForWeek() {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${MOVIE_KEY}&page=${this.#page}`);
      return response.data;

    } catch (error) {
      console.error(error);
      Notify.failure(error.message, 'Oops ...something went wrong');
    }
  }

  async fetchTrendingForDay() {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${MOVIE_KEY}&page=${this.#page}`);
      return response.data;

    } catch (error) {
      console.error(error);
      Notify.failure(error.message, 'Oops ...something went wrong');
    }
  }


async fetchQueryResultsForGenres() {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${MOVIE_KEY}&language=en-US`
      );
      const genresData = response.data.genres;
      return genresData;
    } catch (error) {
      console.error(error);
    }
  }

}



