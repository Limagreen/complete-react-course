import "./ExpenseItem.css";

function ExpenseItem(props) { // props (an object) scontains all attribute-value (key-value) pairs passed in component-call. By convention it's named "props"

    return (
        <div className="expense-item">
            <div>{props.date.toISOString()}</div> {/* Date requires stringifying, hence the call to .toISOString() */}
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div> // end of component root

    );
}

export default ExpenseItem;