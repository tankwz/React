import { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(() => {
    return {
      counter: 10,
    };
  });

  const increment = () => {
    setCounter((prevC) => {
      return { counter: prevC.counter + 1 };
    });
  };
  const decrement = () => {
    setCounter((prevC) => ({
      counter: prevC.counter - 1,
    }));
  };

  return (
    <div className="col-12 col-md-4 offset-md-4 border">
      <span className="h2">Counter</span>
      <br />
      <button className="btn btn-danger m-1" onClick={() => decrement()}>
        -1
      </button>
      <button className="btn btn-success m-1" onClick={increment}>
        +1
      </button>

      <br />
      <span className="h4">Counter &nbsp;</span>
      <span className="text-success">{counter}</span>
    </div>
  );
};

export default Counter;
