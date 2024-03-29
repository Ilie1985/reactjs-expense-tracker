import React from "react";
// import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "../Expenses/expenseItem.css";

//access the data needeed from App.js and Expenses.js with the help of props

const ExpenseItem = (props) => {
  // const [changeTitle, setChangeTitle] = useState(props.title);

  // const clickHandler = () => {
  //   setChangeTitle("updated");
  //   console.log(changeTitle);
  // };

  return (
    <li>
      <Card className={"expense-item"}>
        <ExpenseDate date={props.date} />

        <div className={"expense-item_description"}>
          {/* <h2>{changeTitle}</h2> */}
          <h2>{props.title}</h2>
          <div className={"expense-item_price"}>£{props.amount}</div>
        </div>
        {/* <button
        onClick={() => {
          clickHandler();
        }}
      >
        Change title
      </button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
