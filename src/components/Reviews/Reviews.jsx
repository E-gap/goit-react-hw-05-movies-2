import { useState, useEffect } from 'react';
import css from './Reviews.module.css';
import { useParams } from 'react-router-dom';
import { key } from '../../services/data';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const searchMovieReviews = () => {
      fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${key}&language=en-US&page=1`
      )
        .then(resp => resp.json())
        .then(resp => {
          setReviews(resp.results);
        });
    };
    searchMovieReviews();
  }, [movieId]);

  return (
    <div>
      <ul className={css.reviewList}>
        {reviews.length > 0 ? (
          reviews.map(({ id, author, content }) => (
            <li key={id}>
              <p className={css.author}>{`Author: ${author}`}</p>
              <p className={css.text}>{content}</p>
            </li>
          ))
        ) : (
          <p className={css.text}>We don't have any reviews for this movie</p>
        )}
      </ul>
    </div>
  );
};

export default Reviews;
