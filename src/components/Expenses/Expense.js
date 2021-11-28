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
            <ExpenseItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}
            />
            <ExpenseItem
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date}
            />
            <ExpenseItem
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date}
            />
            <ExpenseItem
                title={props.items[3].title}
                amount={props.items[3].amount}
                date={props.items[3].date}
            />
            {/*{expenses.map(( expense, index ) => {*/}
            {/*    return <ExpenseItem key={index} {...expense} />*/}
            {/*})}*/}

        </Card>
    );
}

export default Expense;