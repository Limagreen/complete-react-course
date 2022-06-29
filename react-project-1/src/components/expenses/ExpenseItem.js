import { useState } from 'react';

import ExpenseDate from "./ExpenseDate";
import Card from "../ui/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {

    return (
        <Card className="expense-item">

            <ExpenseDate date={props.date} />

            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">
                    ${props.amount}
                </div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card >
    );
} // end of ExpenseItem()

export default ExpenseItem;