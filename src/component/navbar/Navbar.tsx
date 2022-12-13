import "./navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function Navbar() {
  return (
    <nav className="menu">
      <div className="menu__container">
        <div className="menu__item">
          <i className="fa-solid fa-house"></i>
          <Link to="/"> Home/Catalogo </Link>
        </div>
        <div className="menu__item">
          <a className="nav-link">
            <i className="fa-solid fa-arrow-right-to-bracket"></i>{" "}
            Login/Registrazione
          </a>
        </div>
        <div className="menu__item">
          <a className="nav-link">
            <i className="fa-solid fa-at"></i> Contatti
          </a>
        </div>
        <div className="menu__item">
          <i className="fa-solid fa-magnifying-glass"></i>
          <Link to="/search">Ricerca </Link>
        </div>
      </div>
    </nav>

    //         <nav className="menu">
    //   <div className="menu__container">
    //     <div className="menu__item">
    //       <a className="nav-link"
    //         ><i className="fa-solid fa-house"></i> Home/Catalogo</a
    //       >
    //     </div>
    //     <div className="menu__item">
    //       <a className="nav-link" [routerLink]="['/login']"
    //         ><i className="fa-solid fa-arrow-right-to-bracket"></i> Login/Registrazione</a
    //       >
    //     </div>
    //     <div className="menu__item">
    //       <a className="nav-link" [routerLink]="['/contact']"
    //         ><i className="fa-solid fa-at"></i> Contatti</a
    //       >
    //     </div>
    //     <div className="menu__item">
    //       <a className="nav-link" [routerLink]="['/search']"><i className="fa-solid fa-magnifying-glass"></i> Ricerca</a>
    //     </div>
    //   </div>
    // </nav>
  );
}

export default Navbar;
