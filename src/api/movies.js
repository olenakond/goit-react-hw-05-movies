import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchPopularMovies = async () => {
  const response = await axios(
    '/trending/movie/day?language=en-US&api_key=492f31ee414458c3f1e9e8619db62132'
  );
  return response.data;
};
