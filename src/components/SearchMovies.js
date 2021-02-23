import React, { useState, Fragment } from 'react';
import MovieCard from './MovieCard';

export default function SearchMovies() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();

    const API_KEY = '052ce0ce36d817ba76dcc79da15402e5';
    const URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(URL);
      const data = await res.json();
      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Fragment>
      <form className='form' onSubmit={searchMovies}>
        <div className='form-group'>
          <label htmlFor='query' className='label'></label>
          <input
            type='text'
            className='input'
            name='query'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Search by movie title'
          ></input>
          <button className='button' type='submit'>
            <i className='fas fa-search'></i>
          </button>
        </div>
      </form>

      <div className='card-list'>
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </div>
    </Fragment>
  );
}
