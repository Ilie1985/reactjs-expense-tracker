import React from "react";
import "../components/expenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

//access the data needeed from App.js with the help of props
//obtain th data in <ExpenseDate> with help of props

const ExpenseItem = (props) => {
  return (
    <Card className={"expense-item"}>
      <ExpenseDate date={props.date} />

      <div className={"expense-item_description"}>
        <h2>{props.title}</h2>
        <div className={"expense-item_price"}>${props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
