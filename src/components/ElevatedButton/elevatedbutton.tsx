import { useRef } from "react";
import "./elevatedbutton.styles.scss";

function ElevatedButton({ text, url }: { text: string; url: string }) {
  const redirecRef = useRef<HTMLAnchorElement | null>(null);

  function handleNavigate() {
    redirecRef.current?.click();
  }

  return (
    <button className="elevated-button" onClick={handleNavigate}>
      <h4>{text}</h4>

      <a ref={redirecRef} href={url} target="_blank" rel="noreferrer">
        x
      </a>
    </button>
  );
}

export default ElevatedButton;
