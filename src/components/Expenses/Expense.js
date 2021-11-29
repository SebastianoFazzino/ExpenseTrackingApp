import React, { useState } from "react";
import ExpenseList from "./ExpenseList";
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
            <ExpenseList
                expenses={filteredExpense}
            />

        </Card>
    );
}

export default Expense;