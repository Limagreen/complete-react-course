import ExpenseDate from "./ExpenseDate"
import "./ExpenseItem.css";

function ExpenseItem(props) { // props (an object) scontains all attribute-value (key-value) pairs passed in component-call. By convention it's named "props"

    const expenseDate = {
        locale: 'en-us',
        month: props.date.toLocaleString(locale, { month: 'long' }),
        year: props.date.toLocaleString(locale, { year: 'numeric' }),
        day: props.date.toLocaleString(locale, { day: 'numeric' }),
    }

    return (
        <div className="expense-item">
            <div>
                <div>{expenseDate.month}</div>
                <div>{expenseDate.year}</div>
                <div>{expenseDate.day}</div>
            </div>

            <ExpenseDate date={props.date} /> {/* My attempt at a date component. There's no closing element tag because I have no inner HTML */}

            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div> // end of component root

    );
}

export default ExpenseItem;