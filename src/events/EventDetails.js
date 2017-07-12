import React from 'react';

import './EventDetails.css';

function EventDetails(props) {
  return (
    <div>
      <h1>{props.event.eventId}</h1>
      <p>Type: {props.event.type}</p>
      <pre className="event-details__data">{JSON.stringify(JSON.parse(props.event.data), null, 2)}</pre>
    </div>
  );
}

export default EventDetails;
