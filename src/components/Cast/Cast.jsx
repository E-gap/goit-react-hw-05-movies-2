import { useState, useEffect } from 'react';
import css from './Cast.module.css';
import { BsFillCircleFill } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import { key } from '../../services/data';

const Cast = () => {
  const [credits, setCredits] = useState([]);
  const { movieId } = useParams();

  const searchMovieCredits = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${key}&language=en-US`
    )
      .then(resp => resp.json())
      .then(resp => {
        setCredits(resp.cast);
      });
  };

  useEffect(() => {
    searchMovieCredits();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const basic = 'https://image.tmdb.org/t/p/w500';
  const noPosterImg =
    'https://freedesignfile.com/upload/2018/11/Characters-in-film-design-elements-background-vector-graphic-715.jpg';

  return (
    <div>
      <ul className={css.castList}>
        {credits.map(({ id, profile_path, name, character }) => (
          <li key={id}>
            <img
              src={profile_path ? `${basic}${profile_path}` : noPosterImg}
              className={css.profile}
              alt="actor face"
            />
            <p className={`${css.text} ${css.displayFlex}`}>
              <BsFillCircleFill
                style={{
                  height: '10px',
                  width: '10px',
                  marginRight: '10px',
                }}
              />
              {name}
            </p>

            <p className={css.text}>Character: {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
