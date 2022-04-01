import EventCard from "../../components/eventcard/eventcard";
import { pastEventsList, upcomingEventsList } from "../../constants";
import "./events.styles.scss";

function EventsPage() {
  return (
    <div id="events-page">
      <div className="events">
        <h2>UPCOMING EVENTS</h2>

        <div className="events-list">
          {upcomingEventsList.map((ue) => (
            <EventCard
              title={ue.title}
              subtitle={ue.subtitle}
              time={ue.time}
              venue={ue.venue}
              imgUrl={ue.imgUrl}
            />
          ))}
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

        <div id="gallery-img-1-container"></div>
        <div id="gallery-img-2-container"></div>
      </div>
    </div>
  );
}

export default EventsPage;
