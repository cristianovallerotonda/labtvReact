import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

import "../../component/card/card.scss";

interface CardProps {
  title: string;
  year?: string;
  id: string;
  image: string;
  customClass?: string;
  link: string;
}

const Card: React.FC<CardProps> = ({
  title,
  year,
  id,
  image,
  link,
  customClass,
}) => {
  return (
    <Link to={link} className={classNames("card", customClass)}>
      <div className="card__media">
        <img src={image} loading="lazy" alt="Card image" />

        {year && (
          <div className="card__date">
            <span className="date__day">{year}</span>
          </div>
        )}
        <span className="card__id">{id}</span>
      </div>

      <div className="card__content">
        <h2 className="card__title">{title}</h2>
      </div>
    </Link>
  );
};

export default Card;
