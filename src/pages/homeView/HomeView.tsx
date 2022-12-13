import { useFilms } from "./useFilms";

import Films from "../../component/films/Films";

import "./homeView.scss";

function HomeView() {
  const films = useFilms();

  return <Films films={films}></Films>;
}

export default HomeView;
