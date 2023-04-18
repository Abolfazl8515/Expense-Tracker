import styles from "./Filter.module.css";
import { FaCheck, FaTimes } from "react-icons/fa";

const Filter = ({
  value,
  setValue,
  tnx,
  setTnx,
  showDelete,
  setDelete,
}) => {
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
      <div className="search">
        <input
          type="text"
          placeholder="Search ..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="delete">
        {showDelete ? (
          <>
            <button onClick={deleteHandler}>
              <FaCheck />
            </button>
            <button onClick={cancelDeleteHandler}>
              <FaTimes />
            </button>
          </>
        ) : (
          <button onClick={() => setDelete(true)}>Delete Transactions</button>
        )}
      </div>
    </div>
  );
};

export default Filter;
