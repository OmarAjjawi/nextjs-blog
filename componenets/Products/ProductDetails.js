import React from "react";
import classes from "./ProductDetails.module.css";
import { Remove, Add } from "@material-ui/icons";
import pic from '../../images/image.jpg'
import Image from "next/image";

const ProductDetails = () => {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes["image-container"]}>
            <Image src={pic}/>
        </div>
        <div className={classes["info-container"]}>
          <h1>Denim Jumpsuit</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            blanditiis error velit saepe nam omnis culpa laborum! Numquam totam
            qui soluta doloremque illo, commodi blanditiis laborum sapiente,
            asperiores adipisci nobis.
          </p>
          <span>20$</span>
          <div className={classes["filter-container"]}>
            <div className={classes.filter}>
              <span>Color</span>
              <div
                className={classes["filter-color"]}
                style={{ backgroundColor: "black" }}
              ></div>
              <div
                className={classes["filter-color"]}
                style={{ backgroundColor: "darkblue" }}
              ></div>
              <div
                className={classes["filter-color"]}
                style={{ backgroundColor: "gray" }}
              ></div>
            </div>
            <div className={classes.filter}>
              <span>Size</span>
              <select>
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>
          </div>
          <div className={classes["add-container"]}>
            <div className={classes["amount-container"]}>
              <Remove />
              <span>1</span>
              <Add />
            </div>
            <button>ADD TO CART</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
