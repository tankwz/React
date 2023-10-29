import React from 'react';
import AddDestination from './AddDestination';
import DestinationList from './DestinationList';

function DestinationIndex() {
  return (
    <div>
      <p className="text-center mt-4 h2 text-info">TravelOpedia List</p>
      <AddDestination></AddDestination>
      <DestinationList></DestinationList>
    </div>
  );
}

export default DestinationIndex;
