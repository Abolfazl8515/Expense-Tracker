import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Charts from "./components/Charts/Charts";
import TransactionForm from "./components/TransactionForm/TransactionForm";
import TransactionList from "./components/TransactionList/TransactionList";
import { useEffect, useState } from "react";
import saveLocalStorage from "./utils/saveLocalStorage";

const App = () => {
  const [tnx, setTnx] = useState(saveLocalStorage.getAllTransactions());
  const [isShowAdd, setIsShowAdd] = useState(false);
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
      <div className="box">
        <Charts tnx={tnx} />
        <TransactionList setIsShowAdd={setIsShowAdd} tnx={tnx} />
      </div>
    </div>
  );
};

export default App;
