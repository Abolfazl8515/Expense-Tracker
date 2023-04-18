import Transaction from "../Transaction/Transaction";
import styles from "./TransactionList.module.css";

const TransactionList = ({ value, setTnx, tnx, showDelete }) => {
  const filtredTnx = tnx.filter((t) => t.title.includes(value));
  return (
    <div className={styles.transactionList}>
      {filtredTnx.map((t) => (
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
