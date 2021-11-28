import ExpenseForm from "./ExpenseForm";
import "../components-styles/NewExpense.css";

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString().substring(2)
        };
        props.onAddExpense(expenseData);
    }

    return (
        <div className={"new-expense"}>
            <ExpenseForm
                onSaveExpenseData={saveExpenseDataHandler}
            />
        </div>
    )
};

export default NewExpense;