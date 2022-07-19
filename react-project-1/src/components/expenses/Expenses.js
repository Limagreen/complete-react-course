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

    return (
        <Card className="expenses">
            <ExpensesFilter selected={year} onChangeFilter={changeYearHandler} />
            {
                filteredExpenses.map(expense =>
                    <ExpenseItem
                        key={expense.id} // add a unique id to the new expense for React to be able to track it
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                )
            }
        </Card>
    );
}

export default Expenses;