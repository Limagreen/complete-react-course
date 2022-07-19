import { useState } from "react";

import Card from "../ui/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

function Expenses(props) {

    const [year, setYear] = useState("2020");
    function changeYearHandler(newYear) {
        setYear(newYear);
    }

    const filteredExpenses = props.expenseList.filter(expense => {
        return expense.date.getFullYear().toString() === year;
    });


    return (
        <Card className="expenses">
            <ExpensesFilter selected={year} onChangeFilter={changeYearHandler} />

            {/* if filteredExpenses is empty display a default message, else render the list */}
            <ExpensesList expenseList={filteredExpenses} />

        </Card>
    );
}

export default Expenses;