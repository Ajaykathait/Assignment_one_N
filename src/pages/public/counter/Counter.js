import React, { useState } from "react";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <button className="btn"
        onClick={() => {
          count > 0
            ? setCount(count - 1)
            : alert("you can not decrease it after 0");
        }}>
        -
      </button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
