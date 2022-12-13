import "./searchBox.scss";
import { useState } from "react";

interface SearchBoxProps {
  handleChange: any; // todo tipizzare correttamente
  onClick: () => void;
}

function SearchBox({ handleChange, onClick }: SearchBoxProps) {
  const [inputValue, setInputValue] = useState("");
  const [movies, setMovies] = useState([]);

  //   const handleChange2 = (event: {
  //     target: { value: SetStateAction<string> };
  //   }) => {
  //     setInputValue(event.target.value);
  //   };

  return (
    <div className="search">
      <input
        placeholder="Ricerca il film"
        type="text"
        id="message"
        name="message"
        onChange={(event) => handleChange(event.target.value)}
      />
      <button onClick={onClick} id="button_ricerca">
        <i className="fa fa-search"></i>
      </button>
    </div>
  );
}
export default SearchBox;
