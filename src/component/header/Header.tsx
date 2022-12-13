import React from "react";
import labTvLogo from "../../assets/images/logo-tipo.png";
import "../../component/header/header.scss";

function HeaderComponent() {
  return (
    <header>
      <img src={labTvLogo} alt="logoAppTV" />
    </header>
  );
}

export default HeaderComponent;
