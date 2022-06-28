import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {

    function saveExpenseDataHandler(expenseData) {
        const data = {
            ...expenseData,
            id: Math.random().toString() // add a unique id to the new expense
        };

        props.onAddExpense(data);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSubmission={saveExpenseDataHandler} /> {/* onSubmission is a custom prop I made to trigger the handler. The event is simply when the child calls props.onSubmission() */}
        </div>
    );
}

export default NewExpense;