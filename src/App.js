import React, {useState} from "react";
import './App.css';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  // {
  //   id: 'e1', 
  //   title: 'Toilet Paper', 
  //   amount: 94.32, 
  //   date: new Date(2022, 4, 3)
  // },
  // {
  //   id: 'e2', 
  //   title: 'TV', 
  //   amount: 9.32, 
  //   date: new Date(2022, 7, 2)
  // },
  // {
  //   id: 'e3', 
  //   title: 'Bikes', 
  //   amount: 93.32, 
  //   date: new Date(2022, 12, 11)
  // },
  // {
  //   id: 'e2', 
  //   title: 'Car', 
  //   amount: 900.32, 
  //   date: new Date(2022, 6, 1)
  // },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />      
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
