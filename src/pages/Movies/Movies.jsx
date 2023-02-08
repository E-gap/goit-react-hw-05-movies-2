import css from './Movies.module.css';
import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { key } from '../../services/data';

const Movies = () => {
  const [error, setError] = useState('');
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');

  const submitSearch = event => {
    event.preventDefault();
    setQuery(event.target.elements.query.value);
  };

  useEffect(() => {
    setSearchParams(query !== '' ? { query: query } : {});

    const reset = () => {
      document.querySelector('form').reset();
    };

    const searchMovieQuery = () => {
      setError('');
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${query}&language=en-US&page=1&include_adult=false`
      )
        .then(resp => resp.json())
        .then(resp => {
          if (resp.results.length === 0) {
            setError('Sorry, there are no movies for your request');
          }
          setMovies(resp.results);
        });
      reset();
    };

    if (query) {
      searchMovieQuery();
    }
  }, [query, setSearchParams]);

  return (
    <div>
      <form onSubmit={submitSearch}>
        <input className={css.input} name="query"></input>
        <button className={css.buttonSearch} type="submit">
          Search
        </button>
      </form>
      <ul className={css.filmList}>
        {movies.length > 0 && !error ? (
          movies.map(({ id, name, title }) => (
            <li key={id} className={css.listItem}>
              <Link
                to={`${id}`}
                className={css.link}
                state={{ from: location }}
              >
                {title ?? name}
              </Link>
            </li>
          ))
        ) : (
          <p>{error}</p>
        )}
      </ul>
    </div>
  );
};

export default Movies;
