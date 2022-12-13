import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface FilmDetailApiData {
  title: string;
  year?: string;
  id: string;
  image: string;
  fullTitle: string;
  plotLocal: string;
  directors: string;
  genres: string;
}

export function useFilmDetail() {
  const [detail, setDetail] = useState<FilmDetailApiData>();

  const { id } = useParams();
  const wsFilmDetail = "https://imdb-api.com/it/API/Title/k_pfx1xif6/" + id;

  useEffect(() => {
    fetch(wsFilmDetail)
      .then((res) => res.json())
      .then((res) => {
        setDetail(res);
        console.log(res);
      });
  }, []);

  return detail;
}
