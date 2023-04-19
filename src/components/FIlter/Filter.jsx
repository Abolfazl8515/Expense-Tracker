import styles from "./Filter.module.css";
import { FaCheck, FaTimes } from "react-icons/fa";

const Filter = ({ value, setValue, tnx, setTnx, showDelete, setDelete }) => {
  const deleteHandler = () => {
    const checkedTnx = tnx.filter((t) => t.check === false);
    setTnx(checkedTnx);
    setDelete(false);
  };
  const cancelDeleteHandler = () => {
    setDelete(false);
    const allTnx = [...tnx];
    allTnx.forEach((t) => (t.check = false));
    setTnx(allTnx);
  };
  return (
    <div className={styles.filter}>
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Search ..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className={styles.delete}>
        {showDelete ? (
          <>
            <button onClick={deleteHandler} className={`${styles.btn} ${styles.confirm}`}>
              <FaCheck />
            </button>
            <button onClick={cancelDeleteHandler} className={`${styles.btn} ${styles.cancel}`}>
              <FaTimes />
            </button>
          </>
        ) : (
          <button onClick={() => setDelete(true)} className={styles.deleteBtn}>
            Delete Transactions
          </button>
        )}
      </div>
    </div>
  );
};

export default Filter;
