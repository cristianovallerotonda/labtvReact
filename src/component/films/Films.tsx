import Card from "../card/Card";

import "../../component/films/films.scss";

interface FilmData {
  title: string;
  year?: string;
  id: string;
  image: string;
}

interface Films {
  films: FilmData[];
}

// funzione classica senza necessità di children
// avrei anche potuto fare { films }: {films: filmData[]} senza dover creare l'interface per Films
function Films({ films }: Films) {
  if (!films) return null;

  return (
    <ul className="filmsList">
      {films.map((film, i) => (
        <li className="filmsList__item">
          <Card
            title={film.title}
            id={film.id}
            image={film.image}
            year={film.year}
            link={"film/" + film.id}
            key={i}
          ></Card>
        </li>
      ))}
    </ul>
  );
}

// NB: si può fare anche così utilizzando una "arrow function"

// const Films = ({ films }: Films ) => {
//   if (!films) return null;

//   return (
//     <>
//       <ul>
//         {films.map((film) => (
//           <li>
//             <Link to={film.id}>
//               <Card
//                 title={film.title}
//                 id={film.id}
//                 image={film.image}
//                 year={film.year}
//               ></Card>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// const Films: React.FC<Films> = ({ films }) => {
//   if (!films) return null;

//   return (
//     <>
//       <ul>
//         {films.map((film) => (
//           <li>
//             <Link to={film.id}>
//               <Card
//                 title={film.title}
//                 id={film.id}
//                 image={film.image}
//                 year={film.year}
//               ></Card>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

export default Films;
