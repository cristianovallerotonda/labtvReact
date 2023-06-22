import "./navbar.scss";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "/Users/cristianovallerotonda/Desktop/LAB TV React/labtv/src/App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";

import DarkMode from "../DarkMode/DarkMode";

function Navbar() {
  // const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  // const toggledTheme = () => {
  //   if (theme === "light") {
  //     setTheme("dark");
  //   } else {
  //     setTheme("light");
  //   }
  // };
  // useEffect(() => {
  //   localStorage.setItem("theme", theme);
  //   document.body.className = theme;
  // }, [theme]);

  // const animation = gsap.timeline({
  //   paused: true,
  //   reversed: true,
  //   ease: "expo.inOut",
  //   duration: 0.01,
  // });

  return (
    <nav className="menu">
      <div className="menu__container">
        <div className="menu__item">
          <Link to="/">
            <FontAwesomeIcon icon={faHouse} /> Home/Catalogo
          </Link>
        </div>
        <div className="menu__item">
          <a className="nav-link">
            <FontAwesomeIcon icon={faArrowRightToBracket} /> Login/Registrazione
          </a>
        </div>
        <div className="menu__item">
          <a>
            <FontAwesomeIcon icon={faAt} /> Contatti
          </a>
        </div>
        <div className="menu__item">
          <Link to="/search">
            <FontAwesomeIcon icon={faMagnifyingGlass} /> Ricerca
          </Link>
        </div>
        <div className="menu__item">
          <DarkMode></DarkMode>
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
