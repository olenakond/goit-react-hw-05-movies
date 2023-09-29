import { fetchCastById } from 'api/movies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [castInfo, setCastInfo] = useState(null);
  const [error, setError] = useState('');

  const { movieId } = useParams();

  useEffect(() => {
    const getCastById = async () => {
      try {
        setError('');
        const data = await fetchCastById(movieId);
        setCastInfo(data.cast);
      } catch (error) {
        setError(error.message);
        console.log(error.message);
      }
    };
    getCastById();
  }, [movieId]);

  return (
    <div>
      {error && <p>Sorry, something went wrong, try again.</p>}
      {castInfo && (
        <div>
          {castInfo.map(({ id, name, character, profile_path }) => (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={name}
                width="75"
              />
              <h3>{name}</h3>
              <p>{`Character: ${character}`}</p>
            </li>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cast;
