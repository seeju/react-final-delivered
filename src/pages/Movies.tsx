import React from 'react';
import { Genre, useGenres } from '../hooks/useGenres'
import { Movie, usePopularMovies } from '../hooks/usePopularMovies'
import ListItem from '../components/ListItem'

function Movies() {
  const genres : Genre[] = useGenres();
  const movies : Movie[] = usePopularMovies();
  return (
    <>
        {
          movies.length > 0 &&  genres.length > 0 && 
          movies.map((movie: Movie, index : number) => {
            return <ListItem 
                      key={index}
                      id={movie.id}
                      imagePath={
                        movie.poster_path ?
                         `https://image.tmdb.org/t/p/original${movie.poster_path}`:
                          null
                      }
                      tittle={movie.title}
                      subtitle={movie.overview}
                      footer={
                        movie.genre_ids.map((id: number) => {
                          return genres.find((genre : Genre) => genre.id === id)?.name
                        })
                          .filter((str: string | undefined) => {
                            return str != null
                          })
                          .join(',')
                      }
                      />
          })
        }
    </>
  );
}

export default Movies;
