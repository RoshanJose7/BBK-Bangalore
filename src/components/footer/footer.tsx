import { ReactComponent as InstaSVG } from "../../assets/vectors/insta.svg";
import { ReactComponent as FbSVG } from "../../assets/vectors/fb.svg";
import { ReactComponent as YtaSVG } from "../../assets/vectors/yt.svg";

import AltLogoImage from "../../assets/images/alt-logo.png";
import "./footer.styles.scss";

function Footer() {
  return (
    <footer>
      <img src={AltLogoImage} alt="Alternative Logo" />

      <h4>We are Hiring</h4>
      <h4>All rights reserved to BBK Bangalore</h4>

      <div id="socials">
        <h4>Follow us on</h4>

        <div id="socials-links">
          <InstaSVG />
          <FbSVG />
          <YtaSVG />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
