import styles from "./transaction.module.css";

const Transaction = ({ setTnx, tnx, transaction, showDelete }) => {
  const changeHandler = (id) => {
    const transactions = [...tnx];
    const findedTnx = transactions.find((t) => t.id === id);
    console.log(findedTnx);
    findedTnx.check = !findedTnx.check;
    setTnx(transactions);
    console.log(tnx);
  };
  return (
    <div className={styles.transaction}>
      <div className={styles.title}>
        <span
          className={styles.color}
          style={
            transaction.type == "expense"
              ? { background: "#ec4899" }
              : { background: "#3b82f6" }
          }
        ></span>
        <h2>{transaction.title}</h2>
      </div>
      <div className={styles.detail}>
        <p className={styles.amount}>${transaction.amount}</p>
        <p className={styles.precent}>{transaction.precent}</p>
        <input
          type="checkbox"
          className={showDelete ? styles.checkDelete : styles.hidden}
          onChange={() => changeHandler(transaction.id)}
          checked={transaction.check}
        />
      </div>
    </div>
  );
};

export default Transaction;
