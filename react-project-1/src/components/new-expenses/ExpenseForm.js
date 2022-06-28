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
                date: new Date(event.target.value)
            };
        });

        console.log(formFields.date);
    }

    function submitHandler(event) {
        event.preventDefault(); // used here to prevent the form from refreshing the page

        console.log(formFields.date);

    }

    /* Component */
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={changeAmountHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={changeDateHandler} />
                </div>
            </div>

            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;