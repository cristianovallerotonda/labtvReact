import React from "react";
import InstagramLogo from "../../assets/images/instagram.png";
import FacebookLogo from "../../assets/images/facebook.png";
import TwitterLogo from "../../assets/images/twitter.png";
import "./footer.scss";

function FooterComponent() {
  return (
    <footer className="footer">
      <a target="_blank" href="https://www.facebook.com/" className="social">
        <img src={FacebookLogo} alt="facebook" />
      </a>
      <a target="_blank" href="https://www.instagram.com/" className="social">
        <img src={InstagramLogo} alt="instagram" />
      </a>
      <a target="_blank" href="https://twitter.com/" className="social">
        <img src={TwitterLogo} alt="twitter" />
      </a>
    </footer>
  );
}
export default FooterComponent;
