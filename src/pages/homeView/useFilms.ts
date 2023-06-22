import { useEffect, useState } from "react";

interface FilmApiData {
  title: string;
  year?: string;
  id: string;
  image: string;
}

export function useFilms() {
  const [films, setFilms] = useState<FilmApiData[]>([]);

  useEffect(() => {
    fetch("https://imdb-api.com/it/API/MostPopularMovies/k_5kqh9fye")
      .then((res) => res.json())
      .then((res) => {
        setFilms(res.items);
      });
  }, []);

  return films;
}
