import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import TransactionForm from "./components/TransactionForm/TransactionForm";
import TransactionList from "./components/TransactionList/TransactionList";
import { useEffect, useState } from "react";
import saveLocalStorage from "./utils/saveLocalStorage";
import Filter from "./components/FIlter/Filter";

const App = () => {
  const [tnx, setTnx] = useState(saveLocalStorage.getAllTransactions());
  const [searchValue, setSearchValue] = useState("");
  const [isShowAdd, setIsShowAdd] = useState(false);
  const [isShowDeleteCheckBox, setIsShowDeleteCheckBox] = useState(false);
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(tnx));
  }, [tnx]);
  return (
    <div className="App">
      <NavBar setIsShowAdd={setIsShowAdd} tnx={tnx} />
      <TransactionForm
        isShowAdd={isShowAdd}
        setIsShowAdd={setIsShowAdd}
        tnx={tnx}
        setTnx={setTnx}
      />
      <div className="filter-box">
        <Filter
          showDelete={isShowDeleteCheckBox}
          setDelete={setIsShowDeleteCheckBox}
          tnx={tnx}
          setTnx={setTnx}
          value={searchValue}
          setValue={setSearchValue}
        />
      </div>
      <div className="box">
        <TransactionList
          value={searchValue}
          setIsShowAdd={setIsShowAdd}
          tnx={tnx}
          setTnx={setTnx}
          showDelete={isShowDeleteCheckBox}
          setDelete={setIsShowDeleteCheckBox}
        />
      </div>
    </div>
  );
};

export default App;
