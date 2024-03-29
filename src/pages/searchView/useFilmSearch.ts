import { useEffect, useState } from "react";

export function useFilmSearch(param: string) {
  const [search, setSearch] = useState<any>([]);

  console.log("entro qui?");

  const wsFilmSearch = "https://imdb-api.com/en/API/Search/k_5kqh9fye/" + param;

  useEffect(() => {
    fetch(wsFilmSearch)
      .then((res) => res.json())
      .then((res) => {
        setSearch(res);
      });
  }, []);

  return search;
}
