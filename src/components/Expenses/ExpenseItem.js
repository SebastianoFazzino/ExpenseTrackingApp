import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "../components-styles/ExpenseItem.css";

const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle("updated!");
    }

    return (
        <Card className={"expense-item"}>
            <div className={"expense-item__description"}>
                <ExpenseDate
                    date={props.date}
                />
                <h2>
                    {title}
                </h2>
                <div className={"expense-item__price"}>
                    {props.amount}
                </div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;