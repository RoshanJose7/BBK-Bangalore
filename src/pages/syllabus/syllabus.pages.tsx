import { motion } from "framer-motion";
import SyllabusCard from "../../components/syllabuscard/syllabuscard";
import { syllabus } from "../../utils/constants";
import { fadeOutExitAnimation } from "../../utils/variants";
import "./syllabus.styles.scss";

function SyllabusPage() {
  return (
    <motion.div exit={fadeOutExitAnimation} id="syllabus-page">
      {syllabus.map((syllabii) => (
        <SyllabusCard
          title={syllabii.title}
          subtitle={syllabii.subtitle}
          left={syllabii.left}
          right={syllabii.right}
          imgUrl={syllabii.imgUrl}
        />
      ))}
    </motion.div>
  );
}

export default SyllabusPage;
