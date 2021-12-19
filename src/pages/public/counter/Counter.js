import React, { useState } from "react";
import "./Counter.css";

export default function Counter() {
  const [count, setcount] = useState(0);

  return (
    <div className="counter">
      <button
        onClick={() => {
          count > 0
            ? setcount((ppre) => ppre - 1)
            : alert("you can not decrease it after 0");
        }}>
        -
      </button>
      <h1>{count}</h1>
      <button onClick={() => setcount((ppre) => ppre + 1)}>+</button>
    </div>
  );
}
