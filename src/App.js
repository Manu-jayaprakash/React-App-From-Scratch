import React from "react";
import styles from './style.css';

export default function App({ title }) {
  return (
    <div className={styles.heading}>
      {title}
    </div>
  );
}
