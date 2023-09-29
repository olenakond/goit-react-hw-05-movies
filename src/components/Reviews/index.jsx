import { fetchReviewsById } from 'api/movies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviewsInfo, setReviewsInfo] = useState([]);
  const [error, setError] = useState('');

  const { movieId } = useParams();

  useEffect(() => {
    const getReviewsById = async () => {
      try {
        setError('');
        const data = await fetchReviewsById(movieId);
        setReviewsInfo(data.results);
      } catch (error) {
        setError(error.message);
        console.log(error.message);
      }
    };
    getReviewsById();
  }, [movieId]);

  return (
    <div>
      {error && <p>Sorry, something went wrong, try again.</p>}
      {reviewsInfo.length > 0 ? (
        <div>
          {reviewsInfo.map(({ author, content, id }) => (
            <li key={id}>
              <h4>{`Author: ${author}`}</h4>
              <p>{content}</p>
            </li>
          ))}
        </div>
      ) : (
        <p>We don't have any reviews for this film.</p>
      )}
    </div>
  );
};

export default Reviews;
