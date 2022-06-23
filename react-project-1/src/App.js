import ExpenseItem from "./components/ExpenseItem";

function App() {

  const tempArgs = {
    date: new Date(2021, 3, 28),
    title: "Car",
    amount: 294.67
  }

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem date={tempArgs.date} title={tempArgs.title} amount={tempArgs.amount} />
    </div >
  );
}

export default App;
