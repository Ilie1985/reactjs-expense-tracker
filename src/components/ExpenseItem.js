import React from "react";
import "../components/expenseItem.css";

//access the data needeed from App.js with the help of props
//use a built in method which is accesible on all date objects in javascript-> toLocaleString() to output the date in a readable format
//toLocaleString() holds two arguments, first argument is the language "en-US", second argument is an object wher is configured how specifically that date should be formated {month:"long"} TO OUTPUT THE MONTH
//toLocaleString() holds two arguments, first argument is the language "en-US", second argument is an object wher is configured how specifically that date should be formated {day:"2-digit"} TO OUTPUT THE DAY
//TO OUTPUT THE YEAR use the getFullYear built in method

const ExpenseItem = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });

  const year = props.date.getFullYear();
  return (
    <div className={"expense-item"}>
      <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>

      <div className={"expense-item_description"}>
        <h2>{props.title}</h2>
        <div className={"expense-item_price"}>${props.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
