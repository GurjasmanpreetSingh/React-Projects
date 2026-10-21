import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div style={{textAlign : 'center',  }}>
      <h1>Counter Application</h1>
      <h2>Count : {count}</h2>

      <button onClick={() => setCount(count +1)} style={{padding : '9px', backgroundColor : 'red', }}>Increment</button>
      <button onClick={() => setCount(count -1)}style={{padding : '9px', backgroundColor : 'blue', }} >Decrement</button>
      <button onClick={() => setCount(0)} style={{padding : '9px', backgroundColor : 'green', }}>Reset</button>
    </div>
  );
};

export default Counter;
