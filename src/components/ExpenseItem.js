import React from "react";
import "../components/expenseItem.css";



//access the data needeed from App.js with the help of props



const ExpenseItem = (props) => {
 

  return (
    <div className={"expense-item"}>
      <div>{props.date.toISOString()}</div>

      <div className={"expense-item_description"}>
        <h2>{props.title}</h2>
        <div className={"expense-item_price"}>${props.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
