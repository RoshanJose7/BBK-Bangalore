import { motion } from "framer-motion";
import MemberCard from "../../components/membercard/membercard.components";
import { bbList, jpList } from "../../utils/constants";
import { fadeOutExitAnimation } from "../../utils/variants";
import "./organization.styles.scss";

function OrganizationPage() {
  return (
    <motion.div exit={fadeOutExitAnimation} id="organization-page">
      <div id="organization-bod">
        <h2>Our Organization</h2>

        <MemberCard
          title="Derick Kishan Karkada"
          subtitle="Founder and Chief Instructor of BBK"
          imgUrl="/images/organization/bod/bod-1.png"
        />

        <div className="row">
          <MemberCard
            title="Viki Derick Karkada"
            subtitle="Technical Director of BBK"
            imgUrl="/images/organization/bod/bod-2.png"
          />
          <MemberCard
            title="Ashok Suvarna"
            subtitle="General Secretary & Assistant Chief Instructor"
            imgUrl="/images/organization/bod/bod-3.png"
          />
        </div>

        <MemberCard
          title="Dayanathan K"
          subtitle="Assistant Chief Instructor"
          imgUrl="/images/organization/bod/bod-4.png"
        />
      </div>

      <div id="organization-jp">
        <h2>Our Referee's and Judging Panel</h2>

        <div className="organization-jp-list">
          {jpList.map((jp, idx) => (
            <MemberCard
              key={idx}
              title={jp.title}
              subtitle={jp.subtitle}
              imgUrl={jp.imgUrl}
            />
          ))}
        </div>
      </div>

      <div id="organization-bb">
        <h2>Our Black Belts</h2>

        <div id="organization-bb-list">
          {bbList.map((bb, idx) => (
            <h4 key={idx}>{bb}</h4>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default OrganizationPage;
