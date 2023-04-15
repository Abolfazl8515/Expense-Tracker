import { useState } from "react";
import styles from "./TransactionForm.module.css";

const TransactionForm = ({ isShowAdd, setIsShowAdd }) => {
  return (
    <>
      <div
        className={isShowAdd ? `${styles.backDrop}` : `${styles.hidden}`}
        onClick={() => setIsShowAdd(false)}
      ></div>
      <div className={isShowAdd ? `${styles.tnxForm}` : `${styles.hidden}`}>
        <div className={styles.tnxFormContent}>
          <form>
            <div className={styles.titleModal}>
              <h2>Add Todo</h2>
            </div>
            <div className={styles.tnxInfo}>
              <label>Title</label>
              <input type="text" />
            </div>
            <div className={styles.tnxInfo}>
              <label>amount</label>
              <input type="number" />
            </div>
            <div className={styles.checkType}>
              <input type="radio" id="income" name="type" />
              <label htmlFor="income">Income</label>
              <input type="radio" id="expense" name="type" />
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
