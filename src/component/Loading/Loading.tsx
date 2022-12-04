import React from "react";
import styles from "./loading.module.css";
import Layout from "../Layout/Layout";

const Loading = () => {
  return (
    <Layout centered>
      <div className={styles.spinner_square}>
        <div className={`${styles.square} ${styles.square_1}`} />
        <div className={`${styles.square} ${styles.square_2}`} />
        <div className={`${styles.square} ${styles.square_3}`} />
      </div>
    </Layout>
  );
};

export default Loading;
