import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {

    const [formFields, setFormFields] = useState({
        title: "",
        amount: "",
        date: ""
    });

    /* Event listeners */
    function titleChangeHandler(event) {
        setFormFields((prevState) => {
            return {
                ...prevState,
                title: event.target.value
            };
        });
    }

    function changeAmountHandler(event) {
        setFormFields((prevState) => {
            return {
                ...prevState,
                amount: event.target.value
            };
        });
    }

    function changeDateHandler(event) {
        setFormFields((prevState) => {
            return {
                ...prevState,
                date: event.target.value
            };
        });
    }
    // new Date(formFields.date) // at submission we want an actual Date object
    function submitHandler(event) {
        event.preventDefault(); // used here to prevent the form from refreshing the page

        props.onSubmission(formFields); // tell the parent (NewExpense) the submission details

        // user submitted -> reset form fields in the input elements
        setFormFields({
            title: "",
            amount: "",
            date: ""
        });
    }

    /* Component */
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">

                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={formFields.title} onChange={titleChangeHandler} />
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={formFields.amount} onChange={changeAmountHandler} />
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={formFields.date} onChange={changeDateHandler} />
                </div>

            </div>

            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;