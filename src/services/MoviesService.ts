import axios from 'axios';

export class MoviesService {
  static apiKey = 'd416af5d4faee64e25ab001d87aab5c3';

  static _withBaseUrl(path : string, query : string = '') {
    return `https://api.themoviedb.org/3/${path}?${query}&api_key=${MoviesService.apiKey}`;
  }

  static getPopularMovies() {
    return axios(MoviesService._withBaseUrl('movie/popular'));
  }

  static getMovieById(movieId : string) {
    return axios(MoviesService._withBaseUrl(`movie/${movieId}`));
  }

  static getGenres() {
    return axios(MoviesService._withBaseUrl(`genre/movie/list`));
  } 

}