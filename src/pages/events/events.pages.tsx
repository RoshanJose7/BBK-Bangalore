import { useEffect, useRef } from "react";
import EventCard from "../../components/eventcard/eventcard";
import { pastEventsList, upcomingEventsList } from "../../constants";
import "./events.styles.scss";

function EventsPage() {
  const img1Ref = useRef<HTMLDivElement | null>(null);
  const img2Ref = useRef<HTMLDivElement | null>(null);

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
    <div id="events-page">
      <div className="events">
        <h2>UPCOMING EVENTS</h2>

        <div className="events-list">
          {upcomingEventsList.length === 0 ? (
            <h4 className="empty">No Upcoming Events</h4>
          ) : (
            upcomingEventsList.map((ue: any) => (
              <EventCard
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
          {pastEventsList.map((pe) => (
            <EventCard
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
          <div ref={img1Ref} className="gallery-img-container"></div>
          <div ref={img2Ref} className="gallery-img-container hide"></div>
        </div>
      </div>
    </div>
  );
}

export default EventsPage;
