class saveLocalStorage {
  static getAllTransactions() {
    const transactions = JSON.parse(localStorage.getItem("transactions")) || [];
    return transactions;
  }
}

export default saveLocalStorage;
