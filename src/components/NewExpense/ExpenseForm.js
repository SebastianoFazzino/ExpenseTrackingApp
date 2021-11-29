import React, { useState } from "react";
import "../components-styles/ExpenseForm.css";

const initialInputState = {
    title: "",
    amount: "",
    date: ""
}

const ExpenseForm = (props) => {

    const [userInput, setUserInput] = useState(initialInputState);

    const titleChangeHandler = event => {
        setUserInput((prevState) => {
            return { ...prevState, title: event.target.value };
        });
    }

    const amountChangeHandler = event => {
        setUserInput((prevState) => {
            return { ...prevState, amount: event.target.value };
        });
    }

    const dateChangeHandler = event => {
        setUserInput((prevState) => {
            return { ...prevState, date: event.target.value };
        });
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: userInput.title,
            amount: userInput.amount,
            date: new Date(userInput.date)
        };

        props.onSaveExpenseData(expenseData);
        setUserInput(initialInputState);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className={"new-expense__controls"}>
                 <div className={"new-expense__control"}>
                     <label>Title</label>
                     <input value={userInput.title} type="text" onChange={titleChangeHandler}/>
                 </div>
                <div className={"new-expense__control"}>
                     <label>Amount</label>
                     <input value={userInput.amount} type="number" min={"0.01"} step={"0.01"} onChange={amountChangeHandler}/>
                 </div>
                <div className={"new-expense__control"}>
                     <label>Date</label>
                     <input value={userInput.date} type="date" min={"2020-01-01"} max={"2022-12-31"} onChange={dateChangeHandler}/>
                 </div>
            </div>
            <div className={"new-expense__actions"}>
                <button type={"button"} onClick={props.buttonClicked}>Cancel</button>
                <button type={"submit"}>Add Expense</button>
            </div>
        </form>
    )
};

export default ExpenseForm;