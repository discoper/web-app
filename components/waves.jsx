import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.scss";
function WavesLight({ children }) {
  return (
    <>
      <div className={`${styles.olas} ${styles.voltear}`}>
        <div className={`${styles.wavel1}`}></div>
        <div className={`${styles.wavel2}`}></div>
      </div>
      <div className={`${styles.waveContentW}`}>{children}</div>
      {/* <div className={`${styles.olasB}`}>
        <div className={`${styles.wavel1}`}></div>
        <div className={`${styles.wavel2}`}></div>
      </div> */}
    </>
  );
}

export default WavesLight;
