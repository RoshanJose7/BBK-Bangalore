import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import EventCard from "../../components/eventcard/eventcard";
import { fadeOutExitAnimation } from "../utils/variants";
import {
  gallerySlides,
  pastEventsList,
  upcomingEventsList,
} from "../utils/constants";
import "./events.styles.scss";

function EventsPage() {
  const [slideCounter, setSlideCounter] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideCounter((prevCounter) => {
        if (prevCounter + 1 === gallerySlides.length) return 0;
        else return prevCounter + 1;
      });
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <motion.div exit={fadeOutExitAnimation} id="events-page">
      <div className="events">
        <h2>UPCOMING EVENTS</h2>

        <div className="events-list">
          {upcomingEventsList.length === 0 ? (
            <h4 className="empty">No Upcoming Events</h4>
          ) : (
            upcomingEventsList.map((ue: any, idx) => (
              <EventCard
                key={idx}
                title={ue.title}
                subtitle={ue.subtitle}
                time={ue.time}
                venue={ue.venue}
                imgUrl={ue.imgUrl}
              />
            ))
          )}
        </div>
      </div>

      <div className="events">
        <h2>PAST EVENTS</h2>

        <div className="events-list">
          {pastEventsList.map((pe, idx) => (
            <EventCard
              key={idx}
              title={pe.title}
              subtitle={pe.subtitle}
              time={pe.time}
              venue={pe.venue}
              imgUrl={pe.imgUrl}
            />
          ))}
        </div>
      </div>

      <div id="gallery">
        <h2>GALLERY</h2>

        <div id="gallery-img-wrapper">
          {gallerySlides.map((gallerySlide: { imgUrl: string }, idx) => (
            <div
              key={idx}
              className={`gallery-img-container ${
                idx !== slideCounter ? "hide" : ""
              }`}
              style={{
                backgroundImage: `url(${gallerySlide.imgUrl})`,
              }}
            ></div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default EventsPage;
