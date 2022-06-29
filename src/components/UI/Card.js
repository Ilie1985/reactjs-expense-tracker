import React from "react";
import "./card.css";

//this component acts like a container ,like a shell
//extract the styles that other components have in common (rounded corners and a drop shadow) into this one and use this component as a wrapper in Expenses and ExpenseItem comp.

//use props.children,a prop built into react which every component receives.
//children is a reserved name
//the value of the children prop will always be the content between the opening and the closing custom component tags
//add the classNames that the Card is set to in Expenses ,which is "expenses" and Expense Item which is "expense-item" to the card class name from the Card component with props , save it into a constant named classes
//will return the div with the classes className and inbetween div tags props.children which is all the code from within the Card comp inside Expenses comp file and ExpenseItem comp file


const Card = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
