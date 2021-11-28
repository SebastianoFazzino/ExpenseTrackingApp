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

    return (

        <Card className={"expenses"}>
            <ExpenseFilter
                initialSelect={year}
                onChangeFilter={handleFilterChange}
            />
            { props.items.map( item =>
                <ExpenseItem
                    key={item.id}
                    title={item.title}
                    amount={item.amount}
                    date={item.date}
                />
            )}
        </Card>
    );
}

export default Expense;