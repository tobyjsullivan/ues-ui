import React from 'react';
import { Link } from 'react-router-dom';

import './StoresList.css';

function StoresList(props) {
  const stores = [
    {
      id: "my-example-app"
    },
    {
      id: "another-cool-app"
    }
  ];

  const rows = stores.map((store) => (
    <div className="stores-list__row" key={store.id}>
      <Link to={"/"+store.id}>{store.id}</Link>
    </div>
  ));

  return (
    <div>
      <h1>Your Event Logs</h1>
      {rows}
    </div>
  );
}

export default StoresList;
