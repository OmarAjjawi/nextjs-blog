import React from "react";
import classes from "./Products.module.css";
import ProductItem from './ProductItem'

const Products = (props) => {
  return (
    <div className={classes.container}>
      {props.products.map((item) => (
        <ProductItem id={item.id} image={item.image} />
      ))}
    </div>
  );
};


export default Products;
