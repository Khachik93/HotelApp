import moment from 'moment';
import './EventCard.css';

const EventCard = ({
  name, description, imageUrl, date,
}) => {
  const eventName = name.slice(0, 25);
  const cutDdiscription = description.slice(0, 90) + "...";
  return (
    <div className="event-card">
      <img src={imageUrl} alt="alt img" />
      <div className="event-info">
        <div>
          <h2>{eventName}</h2>
        </div>
        <div className="description">
          <p>{cutDdiscription}</p>
        </div>
        <div className="day-time">
          <div className="day"><h3>{moment(date.number).format('MM.DD.YY')}</h3></div>
          <div className="time"><h3>{moment(date.number).format('h:mm')}</h3></div>
        </div>
      </div>
    </div>
  )

};

export default EventCard;
