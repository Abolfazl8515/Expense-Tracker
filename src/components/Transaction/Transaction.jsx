import styles from "./transaction.module.css";

const Transaction = () => {
  return (
    <div className={styles.transaction}>
      <div className={styles.title}>
        <span className={styles.color}></span>
        <h2>Test</h2>
      </div>
      <div className={styles.detail}>
        <p className={styles.amount}>$2,300</p>
        <p className={styles.precent}>20%</p>
      </div>
    </div>
  );
};

export default Transaction;
