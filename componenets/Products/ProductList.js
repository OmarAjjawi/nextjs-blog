import React from "react";
import classes from "./ProductList.module.css";

const ProductList = () => {
  return (
    <>
      <h1 className={classes.title}>Dresses</h1>
      <div className={classes["filter-container"]}>
        <div className={classes.filter}>
          <span>Filter Products:</span>
          <select>
            <option disabled selected>
              Color
            </option>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Yellow</option>
            <option>Green</option>
          </select>
          <select>
            <option disabled selected>
              Size
            </option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
        <div className={classes.filter}>
          <span>Sort Products:</span>
          <select>
            <option selected>Newest</option>
            <option>Price (asc)</option>
            <option>Price (desc)</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default ProductList;
