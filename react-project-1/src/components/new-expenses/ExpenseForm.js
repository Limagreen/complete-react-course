import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {


    const [formFields, setFormFields] = useState({
        title: "",
        amount: "",
        date: ""
    })

    /* Event listeners */
    function titleChangeHandler(event) {
        setFormFields({
            // you must still refresh the other two to prevent the new object from erasing them entirely. Do this first so that you don't overwrite the new title
            ...formFields,
            title: event.target.value
        })
    }

    function changeAmountHandler(event) {
        setFormFields({
            ...formFields,
            amount: event.target.value
        })
    }

    function changeDateHandler(event) {
        setFormFields({
            ...formFields,
            date: event.target.value
        })
    }

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control"> {/* this is a differnet css class -> control is singular, not plural*/}
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={changeAmountHandler} />
                    {/* min sepcifies a minimum value for the input and step specifies the interval for acceptable input values. For example, a step of "3" would only allow 
                    ..., -3, 0, 3, 6, ...*/}
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={changeDateHandler} /> {/* the date type gives us a date picker*/}
                </div>
            </div>

            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;