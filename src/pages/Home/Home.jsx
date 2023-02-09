import { useState, useEffect } from 'react';
import OneMovieLi from '../../components/OneMovieLi/OneMovieLi';
import { key } from '../../services/data';
import css from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const searchTrendingMovies = () => {
      try {
        fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`)
          .then(response => {
            if (!response.ok) {
              throw new Error(Response.status);
            }
            return response.json();
          })
          .then(resp => {
            setMovies(resp.results);
          });
      } catch (error) {
        console.log(error.message);
      }
    };

    if (movies.length === 0) {
      searchTrendingMovies();
    }
  }, [movies.length]);

  return (
    <div>
      <p className={css.listTitle}>Trending today</p>
      <ul className={css.filmList}>
        {movies.map(({ id, title, name }) => (
          <OneMovieLi key={id} name={name} title={title} to={`movies/${id}`} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
