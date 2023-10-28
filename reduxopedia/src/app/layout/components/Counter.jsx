import React from 'react';
import { useSelector } from 'react-redux';
function Counter() {
  const count = useSelector((state) => state.counterStore.count);
  return <div>Counter: {count}</div>;
}

export default Counter;
