import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectDes } from '../../../redux/slice/destinationSlice';

function Destination() {
  const destination = useSelector((state) => state.desStoreName.destination);
  const dispack = useDispatch();
  console.log(destination);
  return (
    <div className="row justify-content-center ">
      <div className="col-6 ">
        <ul className="list-group">
          {destination.map((item, index) => {
            return (
              <li className="list-group-item d-flex" key={index}>
                {item.name}{' '}
                <button
                  type="button"
                  onClick={() => dispack(setSelectDes(item))}
                  className="ms-auto btn btn-primary"
                >
                  Detail
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Destination;
