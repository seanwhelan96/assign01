import React, { useState, useEffect } from "react";
import { getMovie } from "../api";
import { useQuery } from "react-query";

const MovieDetails = (props) => {
  const { id } = props.match.params;
  const [movie, setMovie] = useState(null);

  useEffect(() => {
      fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`)
      .then(response => response.json())
      .then(json => {
          setMovie(json);
      });
  }, []);

  return (
    <>
    <h1>Movie Details</h1>
    <pre>{JSON.stringify(movie, null, 2)}</pre>;
   </>
    )
};

export default MovieDetails;
