import { fetchCastById } from 'api/movies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import defaultImg from 'img/not_found.jpg';

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
      {castInfo &&
        (castInfo.length > 0 ? (
          <div>
            {castInfo.map(({ id, name, character, profile_path }) => {
              const img = profile_path
                ? `https://image.tmdb.org/t/p/w500${profile_path}`
                : defaultImg;
              return (
                <li key={id}>
                  <img src={img} alt={name} width="75" />
                  <h3>{name}</h3>
                  <p>{`Character: ${character}`}</p>
                </li>
              );
            })}
          </div>
        ) : (
          <p>We don't have information about cast of this movie.</p>
        ))}
    </div>
  );
};

export default Cast;
