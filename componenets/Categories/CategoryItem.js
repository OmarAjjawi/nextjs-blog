import Link from "next/link";
import React from "react";
import classes from "./CategoryItem.module.css";

const CategoryItem = (props) => {
  return (
    <div className={classes.container}>
      <img src={props.image} />
      <div className={classes.info}>
        <h1>{props.title}</h1>
        <button>
          <Link href="/products">SHOP NOW</Link>
        </button>
      </div>
    </div>
  );
};

export default CategoryItem;
