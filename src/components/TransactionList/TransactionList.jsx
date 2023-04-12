import styles from "./TransactionList.module.css";

const TransactionList = () => {
  return (
    <div className={styles.TransactionList}>
      <div className={styles.title}>
        <span className={styles.color}></span>
        <h4>Test</h4>
      </div>
      <div className={styles.title}>
        <p>$2,300</p>
        <p>20%</p>
      </div>
    </div>
  );
};

export default TransactionList;
