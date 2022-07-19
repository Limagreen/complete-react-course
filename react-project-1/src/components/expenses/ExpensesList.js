import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList(props) {

    if (props.expenseList.length === 0) {
        return <h2 className="expenses-list__fallback">No expenses found.</h2>;
    }

    return <ul className="expenses-list">
        {props.expenseList.map(expense =>
            <ExpenseItem
                key={expense.id} // add a unique id to the new expense for React to be able to track it
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        )}
    </ul>;
};

export default ExpensesList;