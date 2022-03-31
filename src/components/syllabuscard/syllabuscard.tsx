import { useRef } from "react";
import { ReactComponent as ArrowDownSVG } from "../../assets/vectors/down-arrow.svg";

import "./syllabuscard.styles.scss";

function SyllabusCard({
  title,
  subtitle,
  left,
  right,
  imgUrl,
}: {
  title: string;
  subtitle: string;
  left: string;
  right: string;
  imgUrl: string;
}) {
  const CardRef = useRef<HTMLDivElement | null>(null);

  function toggleCard() {
    CardRef.current?.classList.toggle("open");
  }

  return (
    <div
      ref={CardRef}
      className="syllabus-card"
      style={{
        backgroundImage: `url('${imgUrl}')`,
      }}
    >
      <div className="syllabus-card-header">
        <h4>
          <span className="c-y">{title} |</span> {subtitle}
        </h4>

        <div className="svg" onClick={toggleCard}>
          <ArrowDownSVG />
        </div>
      </div>

      <div className="syllabus-card-content">
        <div
          className="left"
          dangerouslySetInnerHTML={{
            __html: left,
          }}
        ></div>

        <div
          className="right"
          dangerouslySetInnerHTML={{
            __html: right,
          }}
        ></div>
      </div>
    </div>
  );
}

export default SyllabusCard;
