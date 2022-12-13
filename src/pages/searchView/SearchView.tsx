import { useState } from "react";
import Films from "../../component/films/Films";
import SearchBox from "../../component/searchBox/SearchBox";

function SearchView() {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);

  const getMovieRequest = async () => {
    const url = "https://imdb-api.com/en/API/Search/k_0a9so352/" + searchValue;
    const response = await fetch(url);
    const responseJSON = await response.json();

    if (responseJSON.results) {
      setMovies(responseJSON.results);
    }
  };

  return (
    <>
      <SearchBox handleChange={setSearchValue} onClick={getMovieRequest} />
      {movies ? <Films films={movies}></Films> : null}
    </>
  );
}

export default SearchView;
