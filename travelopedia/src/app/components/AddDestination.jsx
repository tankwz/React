import React, { useState } from 'react';
import { useAddNewDesMutation } from '../../api/destinationApi';
function AddDestination() {
  const [add, result] = useAddNewDesMutation();

  const [city, editCity] = useState(() => '');
  const [day, editDay] = useState(() => '');
  const [price, editPrice] = useState(() => '');

  return (
    <div className="container border ">
      <div className="row justify-content-center my-4 ">
        <div className="col-3">
          <input
            className="form-control "
            placeholder="City Name..."
            value={city}
            onChange={(e) => {
              editCity(e.target.value);
            }}
          />
        </div>
        <div className="col-3">
          <input
            className="form-control "
            placeholder="Day..."
            value={day}
            onChange={(e) => editDay(e.target.value)}
          />
        </div>
        <div className="col-3">
          <input
            className="form-control "
            placeholder="Price..."
            value={price}
            onChange={(e) => editPrice(e.target.value)}
          />
        </div>
        <div className="col-3">
          <button
            className="btn btn-secondary form-control "
            onClick={() => {
              add({
                id: Math.random(),
                name: city,
                price: price,
                day: 7,
              });
              editCity('');
              editDay('');
              editPrice('');
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddDestination;
