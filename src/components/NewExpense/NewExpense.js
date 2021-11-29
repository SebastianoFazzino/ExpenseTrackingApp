import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "../components-styles/NewExpense.css";

const NewExpense = (props) => {

    const [expand, setExpand] = useState(false);
    const handleExpand = () => setExpand(!expand);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString().substring(2)
        };
        props.onAddExpense(expenseData);
    }

    return (

        <div className={"new-expense"}>

        { !expand && <button onClick={handleExpand}>Add New Expense</button> }

        { expand &&
            <ExpenseForm
                onSaveExpenseData={saveExpenseDataHandler}
                buttonClicked={handleExpand}
            />
        }
        </div>
    )
};

export default NewExpense;