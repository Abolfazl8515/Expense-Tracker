import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.income}>
        <p>$45,213</p>
        <p>Income</p>
      </div>
      <div className={styles.expense}>
        <p>$34,200</p>
        <p>Expense</p>
      </div>
      <div className={styles.balance}>
        <p>$34,200</p>
        <p>Balance</p>
      </div>
      <div className={styles.transactions}>
        <p>1200</p>
        <p>Transactions</p>
      </div>
      <div className={styles.btnbox}>
        <button type="button">Add</button>
      </div>
    </div>
  );
};

export default NavBar;
