import React from "react";
import ExpensesChart from "./ExpensesChart";
import "./expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [expenseFilteredYear, setExpenseFilteredYear] = useState("2022");

  const changedYear = (chosenYear) => {
    setExpenseFilteredYear(chosenYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === expenseFilteredYear;
  });

  return (
    <div>
      <Card className={"expenses"}>
        <ExpensesFilter
          selectedYear={expenseFilteredYear}
          onYearChange={changedYear}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
