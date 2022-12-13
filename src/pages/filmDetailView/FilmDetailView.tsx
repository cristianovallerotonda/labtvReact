import { useParams } from "react-router-dom";
import { useFilmDetail } from "./useFilmDetail";
import "./filmDetailView.scss";

function FilmDetailView() {
  const filmDetails = useFilmDetail();

  if (!filmDetails) return null;

  return (
    <div className="detail">
      <div className="detail__card">
        <div className="detail__photo">
          <img src={filmDetails.image} alt="filmPoster" />
        </div>

        <div className="detail__content">
          <h3 className="detail__title">{filmDetails.fullTitle}</h3>
          <h4 className="detail__id">{filmDetails.id}</h4>
          <p className="detail__plot">{filmDetails.plotLocal}</p>

          <button className="detail__shopButton">
            <i className="fa fa-shopping-cart"></i>
            Acquista ora
          </button>
        </div>
      </div>
      <div className="detail__video" id="frame">
        <iframe
          // src={}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="detail__info">
        <h3>Informazioni sul film</h3>
        <dl className="detail__list">
          <dt>Regista</dt>
          <dd>{filmDetails.directors}</dd>
          <dt>Genere</dt>
          <dd>{filmDetails.genres}</dd>
          <dt>Cast</dt>
          <dd></dd>
          <dt>Film correlati</dt>
          <dd>{/* <a target="_blank">{filmDetails.similars}</a> */}</dd>
        </dl>
      </div>
    </div>
  );
}

export default FilmDetailView;
