import "./ExpenseDate.css";

function ExpenseDate(props) {

    const locale = 'en-US'

    const expenseDate = {
        month: props.date.toLocaleString(locale, { month: 'long' }),
        year: props.date.toLocaleString(locale, { year: 'numeric' }),
        day: props.date.toLocaleString(locale, { day: 'numeric' }),
    };

    return (
        <div className="expense-date">
            <div className="expense-date__month">{expenseDate.month}</div>
            <div className="expense-date__year">{expenseDate.year}</div>
            <div className="expense-date__day">{expenseDate.day}</div>
        </div>
    );

}

export default ExpenseDate;