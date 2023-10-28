import React from 'react';
import { useDispatch } from 'react-redux';
import { resetAction } from '../../../redux/action/resetAction';

function Reset() {
  const disp = useDispatch();
  const reset = () => {
    disp(resetAction());
  };
  return (
    <div className=" row d-flex  mt-3 ">
      <div className="rol-4  text-center ">
        <button
          onClick={reset}
          type="button"
          className="btn btn-primary text-center"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Reset;
