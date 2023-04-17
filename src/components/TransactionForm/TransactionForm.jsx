import { useRef, useState } from "react";
import styles from "./TransactionForm.module.css";

const TransactionForm = ({ isShowAdd, setIsShowAdd, tnx, setTnx }) => {
  const [formValues, setFormValues] = useState({
    title: "",
    type: "",
    amount: 0,
  });
  const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const transactions = [...tnx];
    const tnxInfo = {
      id: Math.floor(Math.random() * 1000),
      title: formValues.title,
      amount: formValues.amount,
      type: formValues.type,
      precent: "10%",
    };
    transactions.push(tnxInfo);
    setTnx(transactions);
    setIsShowAdd(false);
  };
  return (
    <>
      <div
        className={isShowAdd ? `${styles.backDrop}` : `${styles.hidden}`}
        onClick={() => setIsShowAdd(false)}
      ></div>
      <div className={isShowAdd ? `${styles.tnxForm}` : `${styles.hidden}`}>
        <div className={styles.tnxFormContent}>
          <form onSubmit={submitHandler}>
            <div className={styles.titleModal}>
              <h2>Add Transaction</h2>
            </div>
            <div className={styles.tnxInfo}>
              <label>Title</label>
              <input type="text" name="title" onChange={changeHandler} />
            </div>
            <div className={styles.tnxInfo}>
              <label>amount</label>
              <input type="number" name="amount" onChange={changeHandler} />
            </div>
            <div className={styles.checkType}>
              <input
                type="radio"
                value="income"
                id="income"
                name="type"
                onChange={changeHandler}
              />
              <label htmlFor="income">Income</label>
              <input
                type="radio"
                value="expense"
                id="expense"
                name="type"
                onChange={changeHandler}
              />
              <label htmlFor="expense">Expense</label>
            </div>
            <div className={styles.btns}>
              <button type="submit" className={styles.add}>
                Add
              </button>
              <button
                type="button"
                className={styles.cancel}
                onClick={() => setIsShowAdd(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default TransactionForm;
