import { useState } from 'react';

import ExpenseDate from "./ExpenseDate";
import Card from "../ui/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) { // props (an object) scontains all attribute-value (key-value) pairs passed in component-call. By convention it's named "props"

    const [title, setTitle] = useState(props.title); // array destructuring here ([ , ]) lets us use the array elements as two separate const variables, title and setTitle

    function clickHandler() {
        setTitle('Updated!');
    }

    return (
        <Card className="expense-item">

            <ExpenseDate date={props.date} /> {/* There's no closing element tag because I have no inner HTML */}

            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">
                    ${props.amount}
                </div> {/* The '$' is literally just to have a $ appear in the text */}
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card > // end of component roots
    );
} // end of ExpenseItem()

export default ExpenseItem;