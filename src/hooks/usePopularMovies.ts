import { useEffect, useState } from 'react';
import { MoviesService } from '../services/MoviesService';

export interface Movie {
    poster_path : string | null,
    overview : string,
    id: number,
    genre_ids: number[],
    title: string,
}

export const usePopularMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    MoviesService.getPopularMovies()
      .then((res) => setMovies(res.data.results))
  }, []);

  return movies;
}

