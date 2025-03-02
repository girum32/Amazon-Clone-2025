import React from "react";
import classes from "./Category.module.css";

function CategoryCard({ title, imgLink }) {
  return (
    <div className={classes.category}>
      <a href="">
        <span>
          <h2>{title}</h2>
          <img src={imgLink} alt={title} />
          <p>Shop Now</p>
        </span>
      </a>
    </div>
  );
}

export default CategoryCard;
