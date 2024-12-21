import React, { useState } from 'react';

const StatefulCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ border: '1px solid black', padding: '10px' }}>
      <h1>Statefull Counter</h1>
      <button onClick={increment}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
}

export default StatefulCounter;