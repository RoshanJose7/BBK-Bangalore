import SyllabusCard from "../../components/syllabuscard/syllabuscard";
import { syllabus } from "../../constants";
import "./syllabus.styles.scss";

function SyllabusPage() {
  return (
    <div id="syllabus-page">
      {syllabus.map((syllabii) => (
        <SyllabusCard
          title={syllabii.title}
          subtitle={syllabii.subtitle}
          left={syllabii.left}
          right={syllabii.right}
          imgUrl={syllabii.imgUrl}
        />
      ))}
    </div>
  );
}

export default SyllabusPage;
