import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Charts from "./components/Charts/Charts";
import TransactionForm from "./components/TransactionForm/TransactionForm";
import TransactionList from "./components/TransactionList/TransactionList";
import { useState } from "react";

const App = () => {
  const [isShowAdd, setIsShowAdd] = useState(false);
  return (
    <div className="App">
      <NavBar setIsShowAdd={setIsShowAdd} />
      <TransactionForm isShowAdd={isShowAdd} setIsShowAdd={setIsShowAdd} />
      <Charts />
      <TransactionList />
    </div>
  );
};

export default App;
