import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Charts from "./components/Charts/Charts";
import TransactionForm from "./components/TransactionForm/TransactionForm";
import TransactionList from "./components/TransactionList/TransactionList";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Charts />
      <TransactionForm />
      <TransactionList />
    </div>
  );
};

export default App;
