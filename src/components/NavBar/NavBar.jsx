import styles from "./NavBar.module.css";

const NavBar = ({ setIsShowAdd }) => {
  return (
    <>
      <h1>Expense Tracker</h1>
      <div className={styles.navbar}>
        <div className={styles.income}>
          <p className={styles.incomeCost}>$45,213</p>
          <p className={styles.title}>Income</p>
        </div>
        <div className={styles.expense}>
          <p className={styles.expenseCost}>$34,200</p>
          <p className={styles.title}>Expense</p>
        </div>
        <div className={styles.balance}>
          <p className={styles.balanceCost}>$34,200</p>
          <p className={styles.title}>Balance</p>
        </div>
        <div className={styles.transactions}>
          <p className={styles.transCost}>1200</p>
          <p className={styles.title}>Transactions</p>
        </div>
        <div>
          <button
            type="button"
            className={styles.addBtn}
            onClick={() => setIsShowAdd(true)}
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
