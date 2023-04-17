import Transaction from "../Transaction/Transaction";
import styles from "./TransactionList.module.css";

const TransactionList = ({ tnx }) => {
  return (
    <div className={styles.transactionList}>
      {tnx.map((t) => (
        <Transaction transaction={t} key={t.id} />
      ))}
    </div>
  );
};

export default TransactionList;
