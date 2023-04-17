import styles from "./transaction.module.css";

const Transaction = ({ transaction }) => {
  return (
    <div className={styles.transaction}>
      <div className={styles.title}>
        <span className={styles.color}></span>
        <h2>{transaction.title}</h2>
      </div>
      <div className={styles.detail}>
        <p className={styles.amount}>${transaction.amount}</p>
        <p className={styles.precent}>{transaction.precent}</p>
      </div>
    </div>
  );
};

export default Transaction;
