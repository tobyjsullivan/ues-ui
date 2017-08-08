import React from 'react';
import { Route, Link } from 'react-router-dom';

import EventsList from './EventsList';

function StorePage(props) {
  const { storeId } = props.match.params;

  const eventCount = 6;

  return (
    <div>
      <h1>{storeId}</h1>
      <p><Link to={"/"+storeId+"/events"}>{eventCount} events</Link></p>
      <Route path="/:storeId" component={EventsList} />
    </div>
  );
}

export default StorePage;
