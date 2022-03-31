import { ReactComponent as MapSVG } from "../../assets/vectors/map.svg";
import { ReactComponent as PhoneSVG } from "../../assets/vectors/phone.svg";
import { ReactComponent as InstaSVG } from "../../assets/vectors/insta.svg";
import { ReactComponent as FbSVG } from "../../assets/vectors/fb.svg";
import { ReactComponent as YtSVG } from "../../assets/vectors/yt.svg";
import { ReactComponent as TgSVG } from "../../assets/vectors/tg.svg";
import { ReactComponent as WhatsAppSVG } from "../../assets/vectors/whatsapp.svg";
import { ReactComponent as TwitterSVG } from "../../assets/vectors/twitter.svg";

import AltLogoImage from "../../assets/images/alt-logo.png";
import "./footer.styles.scss";

function Footer() {
  return (
    <footer>
      <img src={AltLogoImage} alt="Alternative Logo" />

      <div className="footer-contact">
        <h4>Contact Us</h4>

        <div className="footer-row">
          <MapSVG />

          <div className="footer-col">
            <h5>
              Sri lakshmi Nilaya,
              <br />
              No. 11&12 3rd Main Road,
              <br />
              Devarchikkanahalli,
              <br />
              Bengaluru - 560076
            </h5>
          </div>
        </div>

        <div className="footer-row">
          <PhoneSVG />

          <div className="footer-col">
            <h5>
              Derick Kishan Karkada
              <br />
              +91 97432 03432
            </h5>
          </div>
        </div>
      </div>

      <div className="footer-socials">
        <h4>Follow us on</h4>

        <div className="footer-row">
          <InstaSVG />
          <h5>bangalorebudokan_</h5>
        </div>
        <div className="footer-row">
          <FbSVG />
          <h5>Bangalore Budokan</h5>
        </div>
        <div className="footer-row">
          <YtSVG />
          <h5>Bangalore Budokan</h5>
        </div>
        <div className="footer-row">
          <TgSVG />
          <h5>Bangalore Budokan Karate</h5>
        </div>
        <div className="footer-row">
          <WhatsAppSVG />
          <h5>+91 97432 03432</h5>
        </div>
        <div className="footer-row">
          <TwitterSVG />
          <h5>BBudokan</h5>
        </div>
      </div>

      <div className="footer-more-links">
        <h4>More Links</h4>

        <h5>We're Hiring</h5>
        <h5>Collaboration with BBK</h5>
        <h5>Get Affiliated to BBK</h5>
      </div>
    </footer>
  );
}

export default Footer;
