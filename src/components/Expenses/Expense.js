import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "../components-styles/Expense.css";


const Expense = (props) => {

    const expenses = props.items;
    const [year, setYear] = useState("2021");
    const handleFilterChange = (value) => {
        setYear(value);
    }

    const filteredExpense = expenses.filter(expense => expense.date.getFullYear().toString() === year);

    return (

        <Card className={"expenses"}>
            <ExpenseFilter
                initialSelect={year}
                onChangeFilter={handleFilterChange}
            />
            { filteredExpense.length === 0 ? <p>No Expenses Found!</p>
                : filteredExpense.map(expense =>
                    <ExpenseItem
                       key={expense.id}
                       title={expense.title}
                       date={expense.date}
                       amount={expense.amount}
                    />
            )}
        </Card>
    );
}

export default Expense;