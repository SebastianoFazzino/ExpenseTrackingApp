import React, { useState } from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
import {expenseList} from "./components/Expenses/ExpenseList";

const EXPENSES = expenseList;

function App() {

    const [expenses, setExpenses] = useState(EXPENSES);

    const addExpenseHandler = newExpense => {
        setExpenses( prevExpenses => {
            return [newExpense, ...prevExpenses]
        });
    }

  return (
      <div>
          <NewExpense
            onAddExpense={addExpenseHandler}
          />
          <Expense
              items={expenses}
          />
      </div>

  );
}

export default App;
