import "./searchView.scss";
import { SetStateAction, useEffect, useState } from "react";
import { useFilmSearch } from "./useFilmSearch";

function SearchView() {
  const [inputValue, setInputValue] = useState("");
  const [movies, setMovies] = useState([]);

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    console.log("aggiorno");
  }, [inputValue]);

  const handleClick = () => {};

  return (
    <div className="search">
      <input
        placeholder="Ricerca il film"
        type="text"
        id="message"
        name="message"
        onChange={handleChange}
      />
      <button onClick={handleClick} id="button_ricerca">
        <i className="fa fa-search"></i>
      </button>
    </div>
  );
}

export default SearchView;
