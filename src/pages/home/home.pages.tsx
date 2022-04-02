import { useEffect, useRef } from "react";

import ElevatedButton from "../../components/ElevatedButton/elevatedbutton";
import Chief1Image from "../../assets/images/homepage/chief-1.png";
import Chief2Image from "../../assets/images/homepage/chief-2.png";
import Chief3Image from "../../assets/images/homepage/chief-3.png";
import HistorySectionImage from "../../assets/images/homepage/history-section-image.png";
import HistorySectionImage2 from "../../assets/images/homepage/history-section-image-2.png";
import MemberCard from "../../components/membercard/membercard.components";
import "./home.styles.scss";

function HomePage() {
  const img1Ref = useRef<HTMLImageElement | null>(null);
  const img2Ref = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      img1Ref.current?.classList.toggle("hide");
      img2Ref.current?.classList.toggle("hide");
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <main id="hero-section">
        <div className="left">
          <div>
            <div>
              <h1>Bangalore</h1>
              <h1>Budokan</h1>
            </div>

            <h5>
              Get Trained with the best trainer from Bangalore
              <br />
              and get your moves right
            </h5>

            <ElevatedButton text={"Register for upcoming batch"} />
          </div>

          <div id="hero-section-videos">
            <h5>Training Video/Hightlights</h5>

            <div id="hero-section-videos-section">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/ddkYMdcRAYA"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/uL-QEMtsuj0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        <div className="mobile-hero-img"></div>
      </main>

      <section id="history-section">
        <div className="left">
          <h2>History of BBK</h2>

          <h4>Our Bangalore Budokan was started in 2005.</h4>
          <br />

          <h4>
            We are having a successful run from the past 12years, since the past
            years we have trained over 10,000+ students and we currently have
            over 75+ in-practice Black Belt's, 15+ trained Instructors and over
            30+ certified District, State, National and International level
            Referees and Technical committee members.
          </h4>
          <br />

          <h4>
            BBK does not only expertise in Karate; we have trained personnel's
            and instructors in different forms of Martial Arts such as
            Taekwondo, Aikido, Judo and many more.
          </h4>
          <br />

          <h4>
            BBK has over 35+ branches in Bangalore and we presently have 3+
            branches in Udupi district. We have an aim of 100+ branches all over
            Karnataka State soon.
            <br />
            <br />
            As quoted by Bruce Lee - “A quality Martial Artist is always ready
            for any move, and trains oneself invincible".
            <br />
            <br />
            This is the main motto and vision of BBK. A Fit, Strong, Bold and
            Invincible Young India.
          </h4>
        </div>

        <div className="right">
          <img ref={img1Ref} src={HistorySectionImage} alt="History Section" />
          <img
            className="hide"
            ref={img2Ref}
            src={HistorySectionImage2}
            alt="History Section"
          />
        </div>
      </section>

      <section id="chief-section">
        <h2>Our Chief</h2>

        <div id="chief-section-content">
          <div className="top">
            <h4>
              Our Chief Instructor - cum - Founder of BBK SoShihan Derick Kishan
              Karkada has a vast experience of over 31years in the field of
              Martial Arts.
              <br />
              <br />
              This experience and Knowledge is the backbone of our institute.
              SoShihan Derick Kishan and BBK have participated and have
              conducted many State, National and International Championships,
              which make our training style and trainers approach very
              professional.
              <br />
              <br />
              He is a trained Instructor in Traditional and Modern Karate, Judo,
              Aikido, MMA, Street fight and many more styles of Martial Arts.
              SoShihan Derick Kishan is a Man of Commitment, deciation,
              discipline and laser-like focus. The driving power of BBK is his
              vision in making the Young India, fit and strong.
            </h4>
          </div>

          <div className="bottom">
            <MemberCard
              imgUrl={Chief1Image}
              title="Grand Master Chew Choo Soof"
              subtitle="Founder of Budokan Style and Karate Budokan International"
            />

            <MemberCard
              imgUrl={Chief2Image}
              title="Grand Master Richard T Soof"
              subtitle="Karate Budokan International - Australia"
            />

            <MemberCard
              imgUrl={Chief3Image}
              title="Jyoshi B Parameshwar"
              subtitle="Asia Chief of Karate Budokan International"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
