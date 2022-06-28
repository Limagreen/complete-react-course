import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {

    function saveExpenseDataHandler(expenseData) {
        const data = {
            ...expenseData,
            id: Math.random().toString() // add a unique id to the new expense
        };

        props.onAddExpense(data); // passs to App
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSubmission={saveExpenseDataHandler} />
        </div>
    );
}

export default NewExpense;