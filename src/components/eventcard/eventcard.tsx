import { ReactComponent as CalendarSVG } from "../../assets/vectors/calendar.svg";
import { ReactComponent as MapSVG } from "../../assets/vectors/map.svg";

import "./eventcard.styles.scss";

function EventCard({
  imgUrl,
  title,
  subtitle,
  time,
  venue,
}: {
  imgUrl: string;
  title: string;
  subtitle: string;
  time: string;
  venue: string;
}) {
  return (
    <div className="event-card">
      <img src={imgUrl} alt="Upcoming Event Card" />

      <h5>{title}</h5>
      <h5>{subtitle}</h5>

      <div className="event-time">
        <CalendarSVG />
        <h6>{time}</h6>
      </div>

      <div className="event-venue">
        <MapSVG />
        <h6>{venue}</h6>
      </div>
    </div>
  );
}

export default EventCard;
