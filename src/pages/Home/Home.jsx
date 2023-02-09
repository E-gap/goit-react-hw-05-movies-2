import PropTypes from 'prop-types';
import OneMovieLi from '../../components/OneMovieLi/OneMovieLi';
import css from './Home.module.css';

const Home = ({ movies }) => {
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

Home.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};
