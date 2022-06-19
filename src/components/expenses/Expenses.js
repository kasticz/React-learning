/* eslint-disable eqeqeq */
import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
  function onFilterChange(year) {
    setYear(year);
  }
  const [currYear, setYear] = useState(`2020`);
  const filteredExpenses = props.expenses.filter(
    (item) => item.date.getFullYear() == currYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={currYear} onFilterChange={onFilterChange} />
        <ExpensesChart expenses={filteredExpenses}/>        
        <ExpensesList items = {filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
