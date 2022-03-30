import { useRef } from "react";
import LogoImg from "../../assets/images/logo.png";
import "./navbar.styles.scss";

function Navbar() {
  const icon1Ref = useRef<HTMLDivElement | null>(null);
  const icon2Ref = useRef<HTMLDivElement | null>(null);
  const icon3Ref = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);
  const navLinksRef = useRef<HTMLDivElement | null>(null);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100 && !navRef.current?.classList.contains("back"))
      navRef.current?.classList.add("back");
    if (window.scrollY <= 100 && navRef.current?.classList.contains("back"))
      navRef.current?.classList.remove("back");
  });

  function handleClick() {
    icon1Ref.current?.classList.toggle("a");
    icon2Ref.current?.classList.toggle("c");
    icon3Ref.current?.classList.toggle("b");
    navLinksRef.current?.classList.toggle("show");
  }

  return (
    <nav ref={navRef}>
      <img id="nav-logo" src={LogoImg} alt="Logo" />

      <div className="hamburger-icon" id="icon" onClick={handleClick}>
        <div ref={icon1Ref} className="icon-1" id="a"></div>
        <div ref={icon2Ref} className="icon-2" id="b"></div>
        <div ref={icon3Ref} className="icon-3" id="c"></div>
        <div className="clear"></div>
      </div>

      <div ref={navLinksRef} className="nav-hide">
        <p>Organization</p>
        <p>Our Dojo's</p>
        <p>Syllabus</p>
        <p>Events & Gallery</p>
      </div>
    </nav>
  );
}

export default Navbar;
