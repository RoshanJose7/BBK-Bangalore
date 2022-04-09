import AltLogoImage from "../../assets/images/alt-logo.png";
import { ReactComponent as FbSVG } from "../../assets/vectors/fb.svg";
import { ReactComponent as YtSVG } from "../../assets/vectors/yt.svg";
import { ReactComponent as TgSVG } from "../../assets/vectors/tg.svg";
import { ReactComponent as MapSVG } from "../../assets/vectors/map.svg";
import { ReactComponent as PhoneSVG } from "../../assets/vectors/phone.svg";
import { ReactComponent as InstaSVG } from "../../assets/vectors/insta.svg";
import { ReactComponent as WhatsAppSVG } from "../../assets/vectors/whatsapp.svg";
import { ReactComponent as TwitterSVG } from "../../assets/vectors/twitter.svg";
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
            <h5 className="link">
              Derick Kishan Karkada
              <br />
              +91 97432 03432
            </h5>
          </div>
        </div>
      </div>

      <div className="footer-socials">
        <h4>Follow us on</h4>

        <a
          href="https://www.instagram.com/bangalorebudokan_/"
          target="_blank"
          rel="noreferrer"
          className="footer-row"
        >
          <InstaSVG />
          <h5 className="link">bangalorebudokan_</h5>
        </a>

        <a
          href="https://www.facebook.com/BangaloreBudokanKarateAndMartialartsTrust/"
          target="_blank"
          rel="noreferrer"
          className="footer-row"
        >
          <FbSVG />
          <h5 className="link">Bangalore Budokan</h5>
        </a>

        <a
          href="https://www.youtube.com/channel/UCf5RZy3Ys5kiJhxHjFYg1Zg"
          target="_blank"
          rel="noreferrer"
          className="footer-row"
        >
          <YtSVG />
          <h5 className="link">Bangalore Budokan</h5>
        </a>

        <a
          href="https://t.me/bangalore_budokan"
          target="_blank"
          rel="noreferrer"
          className="footer-row"
        >
          <TgSVG />
          <h5 className="link">Bangalore Budokan Karate</h5>
        </a>

        <a
          href="https://www.instagram.com/bangalorebudokan_/"
          target="_blank"
          rel="noreferrer"
          className="footer-row"
        >
          <TwitterSVG />
          <h5 className="link">BBudokan</h5>
        </a>

        <div className="footer-row">
          <WhatsAppSVG />
          <h5>+91 97432 03432</h5>
        </div>
      </div>

      <div className="footer-more-links">
        <h4>More Links</h4>

        <h5 className="link">
          <a
            href="https://forms.gle/NqBKQ85tT3HYZs7j8"
            target="_blank"
            rel="noreferrer"
          >
            We're Hiring
          </a>
        </h5>
        <h5 className="link">
          <a
            href="https://forms.gle/NqBKQ85tT3HYZs7j8"
            target="_blank"
            rel="noreferrer"
          >
            Collaboration with BBK
          </a>
        </h5>
        <h5 className="link">
          <a
            href="https://forms.gle/NqBKQ85tT3HYZs7j8/"
            target="_blank"
            rel="noreferrer"
          >
            Get Affiliated to BBK
          </a>
        </h5>
      </div>
    </footer>
  );
}

export default Footer;
