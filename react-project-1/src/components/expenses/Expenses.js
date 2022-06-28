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

    return (
        <Card className="expenses">
            <ExpensesFilter selected={year} onChangeFilter={changeYearHandler} />
            <ExpenseItem
                title={props.expenseList[0].title}
                amount={props.expenseList[0].amount}
                date={props.expenseList[0].date}
            />
            <ExpenseItem
                title={props.expenseList[1].title}
                amount={props.expenseList[1].amount}
                date={props.expenseList[1].date}
            />
            <ExpenseItem
                title={props.expenseList[2].title}
                amount={props.expenseList[2].amount}
                date={props.expenseList[2].date}
            />
            <ExpenseItem
                title={props.expenseList[3].title}
                amount={props.expenseList[3].amount}
                date={props.expenseList[3].date}
            />
        </Card>
    );
}

export default Expenses;