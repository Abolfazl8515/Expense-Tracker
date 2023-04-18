import Transaction from "../Transaction/Transaction";
import styles from "./TransactionList.module.css";

const TransactionList = ({ setTnx, tnx, showDelete }) => {
  return (
    <div className={styles.transactionList}>
      {tnx.map((t) => (
        <Transaction
          transaction={t}
          key={t.id}
          showDelete={showDelete}
          tnx={tnx}
          setTnx={setTnx}
        />
      ))}
    </div>
  );
};

export default TransactionList;
