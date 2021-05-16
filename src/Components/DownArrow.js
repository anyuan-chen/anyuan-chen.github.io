import React from "react";
import styles from "./DownArrow.module.css";

export default function DownArrow() {
  return (
    <div className={styles.arrowAnim}>
      <div className={styles.delay1}>
        <div className={styles.arrow}></div>
      </div>
      <div className={styles.delay2}>
        <div className={styles.arrow}></div>
      </div>
      <div className={styles.delay3}>
        <div className={styles.arrow}></div>
      </div>
    </div>
  );
}
