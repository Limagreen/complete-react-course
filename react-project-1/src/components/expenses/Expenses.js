import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../ui/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

function Expenses(props) {

    const [year, setYear] = useState("2020");
    function changeYearHandler(newYear) {
        setYear(newYear);
    }

    const filteredExpenses = props.expenseList.filter(expense => {
        return expense.date.getFullYear().toString() === year;
    });

    // proof of concept, you can store both pre-made and custom components in variables, along with function calls
    let expensesContent = <p>No expenses found.</p>; // default message

    // if a non-empty list, change expensesContent
    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map(expense =>
            <ExpenseItem
                key={expense.id} // add a unique id to the new expense for React to be able to track it
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        );
    }

    return (
        <Card className="expenses">
            <ExpensesFilter selected={year} onChangeFilter={changeYearHandler} />

            {/* if filteredExpenses is empty display a default message, else render the list */}
            {expensesContent}

        </Card>
    );
}

export default Expenses;