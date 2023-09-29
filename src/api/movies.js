import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchPopularMovies = async () => {
  const response = await axios(
    '/trending/movie/day?language=en-US&api_key=492f31ee414458c3f1e9e8619db62132'
  );
  return response.data;
};

export const fetchMoviesById = async id => {
  const response = await axios(
    `/movie/${id}?language=en-US&api_key=492f31ee414458c3f1e9e8619db62132`
  );
  return response.data;
};

export const fetchCastById = async id => {
  const response = await axios(
    `/movie/${id}/credits?language=en-US&api_key=492f31ee414458c3f1e9e8619db62132`
  );
  return response.data;
};

export const fetchReviewsById = async id => {
  const response = await axios(
    `/movie/${id}/reviews?language=en-US&api_key=492f31ee414458c3f1e9e8619db62132`
  );
  return response.data;
};

export const fetchMoviesBySearch = async searchQuery => {
  const response = await axios(
    `/search/movie?query=${searchQuery}&include_adult=false&page=1&language=en-US&api_key=492f31ee414458c3f1e9e8619db62132`
  );
  return response.data;
};
