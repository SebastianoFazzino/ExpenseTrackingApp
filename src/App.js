import React, { useState } from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
import {expenseList, addExpense} from "./components/Expenses/ExpenseList";

function App() {

    const initialList = expenseList;
    const [expenses, setExpenses] = useState(initialList);

    const addExpenseHandler = (enteredExpenseData) => {
        setExpenses( ...initialList, enteredExpenseData);
    }

  return (
      <div>
          <NewExpense
            onAddExpense={addExpenseHandler}
          />
          <Expense
              items={initialList}
          />
      </div>

  );
}

export default App;
