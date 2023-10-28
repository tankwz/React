import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  multiply,
  divide,
} from '../../../redux/slice/counterSlice';
import { useState } from 'react';
function Counter() {
  //const count = useSelector((state) => state.counterStore.count);
  const count = useSelector((state) => state.counterStoreName.count);
  const disp = useDispatch();
  const [calNumber, changeCalNumber] = useState(() => 10);
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center mt-3">
          <p className="h3">Counter: {count}</p>
        </div>
        <div className="col-8 offset-2 ">
          <div className="row p-4 mt-3 ">
            <div className="col-4 offset-2">
              <div className="row  border border-2 py-3 ps-2 pe-3   ">
                <div className="col-6 text-end">
                  <button
                    onClick={() => disp(increment())}
                    type="button"
                    className="btn btn-info"
                  >
                    Increase
                  </button>
                </div>
                <div className="col-6">
                  <button
                    onClick={() => disp(decrement())}
                    type="button"
                    className="btn btn-danger"
                  >
                    Decrease
                  </button>
                </div>
              </div>
            </div>
            <div className="col-4 ms-2">
              <div className="row  border border-2 py-3 ps-2 pe-3   ">
                <div className="col-6 text-end">
                  <button
                    onClick={() => disp(multiply(calNumber))}
                    type="button"
                    className="btn btn-info"
                  >
                    Multiply
                  </button>
                </div>
                <div className="col-6">
                  <button
                    onClick={() => disp(divide(calNumber))}
                    type="button"
                    className="btn btn-danger"
                  >
                    Divide
                  </button>
                </div>
                <div className="col-12 mt-3">
                  <input
                    name=""
                    id=""
                    className="form-control pe-0 m-0"
                    value={calNumber}
                    onChange={(e) => changeCalNumber(() => e.target.value)}
                  ></input>
                  {calNumber}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
