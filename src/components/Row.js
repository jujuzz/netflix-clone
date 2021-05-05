import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./Row.css";
import Youtube from "react-youtube";

const baseImgUrl = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const handleClick = async (movie) => {
    const api_key = process.env.REACT_APP_TMDB_API;
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      let trailerurl = await axios.get(
        `/movie/${movie.id}/videos?api_key=${api_key}`
      );
      setTrailerUrl(trailerurl.data.results[0]?.key);
    }
  };
  if (isLargeRow) {
    console.log(movies)
  }
  
  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map(
            (movie) => 
            (
              (isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)
            ) && (
              <img
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`${baseImgUrl}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
                key={movie.id}
                onClick={() => handleClick(movie)}
              />
            )
        )}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;