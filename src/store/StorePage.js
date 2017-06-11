import React from 'react';
import { Route, Link } from 'react-router-dom';

import EventsList from './EventsList';
import EntitiesList from './EntitiesList';

function StorePage(props) {
  const { storeId } = props.match.params;

  const entityCount = 134;

  return (
    <div>
      <h1>{storeId}</h1>
      <p><Link to={"/"+storeId+"/entities"}>{entityCount} entities</Link></p>
      <Route path="/:storeId/entities" component={EntitiesList} />
      <Route path="/:storeId/entities/:entityId/events" component={EventsList} />
    </div>
  );
}

export default StorePage;
