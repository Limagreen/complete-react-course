import "./ExpenseDate.css";

function ExpenseDate() {

    const expenseDate = {
        locale: 'en-us',
        month: props.date.toLocaleString(locale, { month: 'long' }),
        year: props.date.toLocaleString(locale, { year: 'numeric' }),
        day: props.date.toLocaleString(locale, { day: 'numeric' }),
    }

    return (
        <div>
            <div>{expenseDate.month}</div>
            <div>{expenseDate.year}</div>
            <div>{expenseDate.day}</div>
        </div>
    );

}

export default ExpenseDate;