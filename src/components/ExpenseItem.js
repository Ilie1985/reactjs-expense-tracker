import React from "react";
import "../components/expenseItem.css";
const ExpenseItem = () => {
  return (
    <div className={"expense-item"}>
      <div>June 27th 2022</div>

      <div className={"expense-item_description"}>
        <h2>Car Insurance</h2>
        <div className={"expense-item_price"}>$294.67</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
