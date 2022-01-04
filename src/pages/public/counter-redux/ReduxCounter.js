import React from "react";

import dispatch from "@redux/dispatchers/appDispatcher";
import { useSelector } from "react-redux";
import styles from "../counter/Counter.module.css";

export default function Counter() {
  const myValue = useSelector((state) => state.UpdateNum);

  return (
    <div className={styles.counter}>
      <button
        className={styles.btn}
        onClick={() => {
          dispatch.updateDec();
        }}>
        -
      </button>
      <h1>{myValue}</h1>
      <button
        className={styles.btn}
        onClick={() => {
          dispatch.updateInc();
        }}>
        +
      </button>
    </div>
  );
}
