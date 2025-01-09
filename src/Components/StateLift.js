import React, { useState } from "react";

function ParentComponent() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <div>
      <h1>Parent Component</h1>
      <Counter onIncrement={increment} />
      <Display count={count} />
    </div>
  );
}

function Counter({ onIncrement }) {
  return (
    <div>
      <h2>Counter Component</h2>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
}

function Display({ count }) {
  return (
    <div>
      <h2>Display Component</h2>
      <p>Current Count: {count}</p>
    </div>
  );
}

export default ParentComponent;
