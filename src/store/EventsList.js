import React from 'react';

import './EventsList.css';

function EventsList(props) {
  const { match } = props;
  const { entityId } = match.params;

  const events = [
    {
      version: 1,
      type: 'AccountOpened',
      data: '{ "currency": "CAD" }'
    },
    {
      version: 2,
      type: 'AmountDeposited',
      data: '{ "amount": 200000 }'
    },
    {
      version: 3,
      type: 'AmountWidthdrawn',
      data: '{ "amount": 95000 }'
    },
    {
      version: 4,
      type: 'AccountClosed',
      data: '{ }'
    }
  ].reverse();


  const rows = events.map((event) => (
    <div className="events-page__event-row" key={event.version}>
      <div className="events-page__event-version">
        {event.version}
      </div>
      <div className="events-page__event-type">
        {event.type}
      </div>
      <div className="events-page__event-data">
        <pre>{event.data}</pre>
      </div>
    </div>
  ));

  return (
    <div>
      <h1>{entityId}</h1>
      <div className="events-page__event-list">
        {rows}
      </div>
    </div>
  );
}

export default EventsList;
