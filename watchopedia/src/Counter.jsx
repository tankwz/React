import { useState } from 'react';

const Counter = () => {
  const [counterState, setCounter] = useState(() => {
    return {
      counter: 10,
    };
  });
  const [titleState, setTitle] = useState(() => ({
    title: 'Fun',
  }));

  const increment = () => {
    setCounter((prevC) => {
      return { ...prevC, counter: prevC.counter + 1 };
    });
  };
  const decrement = () => {
    setCounter((prevC) => ({ ...prevC, counter: prevC.counter - 1 }));
  };

  return (
    <div className="col-12 col-md-4 offset-md-4 border">
      <span className="h2"> {titleState.title} Counter</span>
      <br />
      <button className="btn btn-danger m-1" onClick={() => decrement()}>
        -1
      </button>
      <button className="btn btn-success m-1" onClick={increment}>
        +1
      </button>

      <br />
      <span className="h4">Counter &nbsp;</span>
      <span className="text-success">{counterState.counter}</span>
    </div>
  );
};

export default Counter;
