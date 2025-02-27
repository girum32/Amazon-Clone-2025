import React from "react";
import { IoMenu } from "react-icons/io5";
import classes from "./Header.module.css";

function LowerHeader() {
  return (
    <div className={classes.lower__container}>
      <ul>
        <li>
          <IoMenu className={classes.menu}/>
          <p>All</p>
        </li>
        <li>Medical Care</li>
        <li>Alexa</li>
        <li>Best Sellers</li>
        <li>Prime</li>
        <li>Amazon Basics</li>
        <li>New Release</li>
        <li>Music</li>
        <li>Prime</li>
        <li>Today's Deal</li>
        <li>Amazon Home</li>
      </ul>
    </div>
  );
}

export default LowerHeader;
