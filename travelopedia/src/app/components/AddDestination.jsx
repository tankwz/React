import React from 'react';

function AddDestination() {
  return (
    <div className="container border ">
      <div className="row justify-content-center my-4 ">
        <div className="col-3">
          <input
            className="form-control "
            type="text"
            placeholder="Enter city..."
          />
        </div>
        <div className="col-3">
          <input
            className="form-control "
            type="text"
            placeholder="Enter country..."
          />
        </div>
        <div className="col-3">
          <button className="btn btn-secondary form-control ">Add</button>
        </div>
      </div>
    </div>
  );
}

export default AddDestination;
