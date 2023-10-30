import React from 'react';
import AddDestination from './AddDestination';
import DestinationList from './DestinationList';
import AddRandomDes from './AddRandomDes';

function DestinationIndex() {
  return (
    <div>
      <p className="text-center mt-4 h2 text-info">TravelOpedia List</p>
      <AddDestination></AddDestination>
      <DestinationList></DestinationList>
      <AddRandomDes></AddRandomDes>
    </div>
  );
}

export default DestinationIndex;
