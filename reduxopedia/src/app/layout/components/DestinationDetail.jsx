import React from 'react';
import { useSelector } from 'react-redux';

function DestinationDetail() {
  const desDetail = useSelector(
    (state) => state.desStoreName.selectedDestination
  );
  console.log(desDetail);
  return (
    <div>
      <h3 className="text-center mt-3"> DestinationDetail</h3>
      {desDetail && (
        <div className="col-6 offset-3  rounded-5 row">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Name: {desDetail.name}</li>
            <li className="list-group-item">Day recommend: {desDetail.day}</li>
            <li className="list-group-item">Fact: {desDetail.fact}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default DestinationDetail;
