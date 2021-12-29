import React from "react";

import dispatch from "@redux/dispatchers/appDispatcher";
import { useSelector } from "react-redux";

export default function Counter() {
  const myValue = useSelector((state) => state.UpdateNum);

  return (
    <div className="counter">
      <button
        onClick={() => {
          dispatch.updateDec();
        }}>
        -
      </button>
      <h1>{myValue}</h1>
      <button
        onClick={() => {
          dispatch.updateInc();
        }}>
        +
      </button>
    </div>
  );
}
