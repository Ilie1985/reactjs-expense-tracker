import React from "react";
import "../components/expenseItem.css";
const ExpenseItem = () => {
  const expenseDate = new Date(2022,5,27);
  const expenseTitle = "Car Insurance";
  const expensePrice = 294.67;
  return (
    <div className={"expense-item"}>
      <div>{expenseDate.toISOString()}</div>

      <div className={"expense-item_description"}>
        <h2>{expenseTitle}</h2>
        <div className={"expense-item_price"}>${expensePrice}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
