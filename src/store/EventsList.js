import React from 'react';

import './EventsList.css';

function EventsList(props) {
  const { match } = props;
  const { entityId } = match.params;

  const events = [
    {
      eventId: 'fc318bd1b7674a52b36bacc2d3797d1e',
      type: 'AccountOpened',
      data: '{ "accountId": "d4b70306-c470-4586-b2c9-e2f9fb6056ae", "currency": "CAD" }'
    },
    {
      eventId: '180176efa6954721b1231ce1e0b6c695',
      type: 'AmountDeposited',
      data: '{ "accountId": "d4b70306-c470-4586-b2c9-e2f9fb6056ae", "amount": 200000 }'
    },
    {
      eventId: 'bbe7ead277e64249a7be1df8068485f6',
      type: 'AccountOpened',
      data: '{ "accountId": "512b0d4c-853c-443a-b22b-ed0b2cfbfc06", "currency": "CAD" }'
    },
    {
      eventId: 'cf443178154549b99063befae88b0ceb',
      type: 'AmountDeposited',
      data: '{ "accountId": "512b0d4c-853c-443a-b22b-ed0b2cfbfc06", "amount": 200000 }'
    },
    {
      eventId: '8be78f02b94c4b4598721591ea8823fd',
      type: 'AmountWidthdrawn',
      data: '{ "accountId": "d4b70306-c470-4586-b2c9-e2f9fb6056ae", "amount": 95000 }'
    },
    {
      eventId: '1ecb86f6cf94498688245c444d10ca53',
      type: 'AccountClosed',
      data: '{ "accountId": "d4b70306-c470-4586-b2c9-e2f9fb6056ae" }'
    }
  ].reverse();


  const rows = events.map((event) => (
    <div className="events-page__event-row" key={event.version}>
      <div className="events-page__event-version">
        {event.eventId}
      </div>
      <div className="events-page__event-data">
        {event.type} {event.data}
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
