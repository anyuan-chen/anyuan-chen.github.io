import React from "react";
import styles from "./DownArrow.module.css";

export default function DownArrow() {
  return (
    <div className={styles.arrowAnim}>
      <div className={styles.arrowSliding}>
        <div className={styles.arrow}></div>
      </div>
      <div className={styles.arrowSliding}>
        <div className={styles.arrow}></div>
      </div>
      <div className={styles.arrowSliding}>
        <div className={styles.arrow}></div>
      </div>
      <div className={styles.arrowSliding}>
        <div className={styles.arrow}></div>
      </div>
    </div>
  );
}
