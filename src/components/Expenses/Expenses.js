import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

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
        ~
        {filteredExpenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })}
        {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        /> */}
      </Card>
    </div>
  );
};

export default Expenses;
