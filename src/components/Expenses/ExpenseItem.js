import React from "react";
import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "../Expenses/expenseItem.css";

//access the data needeed from App.js with the help of props
//obtain th data in <ExpenseDate> with help of props

const ExpenseItem = (props) => {
  const [changeTitle, setChangeTitle] = useState(props.title);

  const clickHandler = () => {
    setChangeTitle("updated");
    console.log(changeTitle);
  };

  return (
    <Card className={"expense-item"}>
      <ExpenseDate date={props.date} />

      <div className={"expense-item_description"}>
        <h2>{changeTitle}</h2>
        <div className={"expense-item_price"}>${props.amount}</div>
      </div>
      <button
        onClick={() => {
          clickHandler();
        }}
      >
        Change title
      </button>
    </Card>
  );
};

export default ExpenseItem;
