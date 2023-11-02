import React from "react";
import styles from "../styles/Total.module.css";
import { useValue } from "../ItemContext";

function Navbar() {
  const value = useValue()
  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {value.total}</h1>
      <h1>Items: {value.item}</h1>
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={()=>value.toggle()}>Cart</button>
        <button className={styles.button} onClick={() => value.resetAll()}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Navbar;
