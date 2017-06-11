import React from 'react';
import { Link } from 'react-router-dom';

import './EntitiesList.css';

function EntitiesList(props) {
  const { match } = props;
  const { storeId } = match.params;

  const entities = [
    {
      id: "0f6df22b-6f32-42ff-8131-8710bc87fd96",
      eventCount: 12
    },
    {
      id: "924ca9a3-d105-4d19-875d-64ebb73a3a6f",
      eventCount: 35
    },
    {
      id: "fe5c3dd3-308a-42fd-a792-3c2782e703ee",
      eventCount: 145
    },
    {
      id: "7fa7477f-d6e4-4ff0-bf3d-3e210f21dcf4",
      eventCount: 9451
    },
  ];

  const rows = entities.map((entity) => {
    return (
      <div key={entity.id} className="entities-page__entity_row">
        <div className="entities-page__entity_id">
          {entity.id}
        </div>
        <div className="entities-page__event-count">
          <Link to={"/"+storeId+"/entities/"+entity.id+"/events"}>{entity.eventCount} events</Link>
        </div>
      </div>
    );
  });

  return (
    <div>

      <p>Search IDs: <input type="text" /></p>
      <div className="entitites-page__entity-list">
        {rows}
      </div>
    </div>
  );
}

export default EntitiesList;
