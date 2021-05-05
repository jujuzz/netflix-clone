require('dotenv').config();

const NETFLIX_API = process.env.REACT_APP_NETFLIX_API_KEY;
const requests = {
  fetchTrending: `/trending/all/week?api_key=${NETFLIX_API}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${NETFLIX_API}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${NETFLIX_API}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${NETFLIX_API}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${NETFLIX_API}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${NETFLIX_API}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${NETFLIX_API}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${NETFLIX_API}&with_genres=99`,
};

export default requests;
