import React, { useState, useEffect } from "react";
import FilteredMovieList from "../components/filteredMovieList";
import { getMovies } from "../api";
import { useQuery } from "react-query";
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites'


const HomePage = () => {
  const [searchText, setSearchText] = useState("");

  const [movies, setMovies] = useState([]);

  useEffect(async () => {
    getMovies().then((response) => {
      setMovies(response.results);
    });
  }, []);

  const filterChange = (event) => {
    event.preventDefault();
    setSearchText(event.target.value.toLowerCase());
  };
  const filteredList = movies.filter((movie) => {
    const title = movie.title.toLowerCase();
    return title.search(searchText) !== -1;
  });

  return (
    <PageTemplate
      title="Discover Movies"
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
);


};

export default HomePage;
