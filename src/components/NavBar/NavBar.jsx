import styles from "./NavBar.module.css";

const NavBar = ({ setIsShowAdd, tnx }) => {
  let incomeTotal = 0;
  let expenseTotal = 0;
  tnx.forEach((t) => {
    if (t.type === "income") {
      incomeTotal += parseFloat(t.amount);
    } else {
      expenseTotal += parseFloat(t.amount);
    }
  });
  const balanceTotal = incomeTotal - expenseTotal;
  return (
    <>
      <h1>Expense Tracker</h1>
      <div className={styles.navbar}>
        <div className={styles.income}>
          <p className={styles.incomeCost}>${incomeTotal}</p>
          <p className={styles.title}>Income</p>
        </div>
        <div className={styles.expense}>
          <p className={styles.expenseCost}>${expenseTotal}</p>
          <p className={styles.title}>Expense</p>
        </div>
        <div className={styles.balance}>
          <p className={styles.balanceCost}>${balanceTotal}</p>
          <p className={styles.title}>Balance</p>
        </div>
        <div className={styles.transactions}>
          <p className={styles.transCost}>{tnx.length}</p>
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
