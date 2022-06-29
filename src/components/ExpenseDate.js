//access the data needeed from App.js with the help of props
//use a built in method which is accesible on all date objects in javascript-> toLocaleString() to output the date in a readable format
//toLocaleString() holds two arguments, first argument is the language "en-US", second argument is an object wher is configured how specifically that date should be formated {month:"long"} TO OUTPUT THE MONTH
//toLocaleString() holds two arguments, first argument is the language "en-US", second argument is an object wher is configured how specifically that date should be formated {day:"2-digit"} TO OUTPUT THE DAY
//TO OUTPUT THE YEAR use the getFullYear built in method

import React from "react";
import "../components/expenseDate.css";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });

  const year = props.date.getFullYear();

  return (
    <div className={"expense-date"}>
      <div className={"expense-date_day"}>{day}</div>
      <div className={"expense-date_month"}>{month}</div>
      <div className={"expense-date_year"}>{year}</div>
    </div>
  );
};

export default ExpenseDate;
