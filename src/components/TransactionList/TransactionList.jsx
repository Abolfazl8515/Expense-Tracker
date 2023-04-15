import Transaction from "../Transaction/Transaction";
import styles from "./TransactionList.module.css";

const TransactionList = () => {
  return (
    <div className={styles.transactionList}>
      <Transaction />
    </div>
  );
};

export default TransactionList;
