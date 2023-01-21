import css from './Home.module.css';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const Home = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      <p className={css.listTitle}>Trending today</p>
      <ul className={css.filmList}>
        {movies.map(({ id, title, name }) => (
          <li key={id} className={css.listItem}>
            <Link
              to={`movies/${id}`}
              className={css.link}
              state={{ from: location }}
            >
              {title ?? name};
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

Home.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};
