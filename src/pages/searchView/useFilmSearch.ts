import { useEffect, useState } from "react";

export function useFilmSearch(param: string) {
  const [search, setSearch] = useState<any>();

  const wsFilmSearch = "https://imdb-api.com/en/API/Search/k_0a9so352/" + param;

  useEffect(() => {
    fetch(wsFilmSearch)
      .then((res) => res.json())
      .then((res) => {
        setSearch(res);
      });
  }, []);

  return search;
}
