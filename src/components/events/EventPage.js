import React from 'react';

import EventDetails from './EventDetails';

function EventPage(props) {
  const { eventId } = props.match.params;

  const event = {
    eventId: eventId,
    type: 'AccountOpened',
    data: '{ "accountId": "d4b70306-c470-4586-b2c9-e2f9fb6056ae", "currency": "CAD" }'
  };

  return (<EventDetails event={event} />);
}

export default EventPage;
