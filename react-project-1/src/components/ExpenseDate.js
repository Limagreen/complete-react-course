import "./ExpenseDate.css";

function ExpenseDate(props) {

    // in order to use the 'this' keyword, the expressions to define month, year, and day needed to be functions
    const expenseDate = {
        locale: 'en-us',
        month: () => { return props.date.toLocaleString(this.locale, { month: 'long' }) },
        year: () => { return props.date.toLocaleString(this.locale, { year: 'numeric' }) },
        day: () => { return props.date.toLocaleString(this.locale, { day: 'numeric' }) },
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