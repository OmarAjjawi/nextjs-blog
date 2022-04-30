import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <h1>Lebanese Anime Corner</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dicta
          sit consequuntur aperiam facere, enim quasi nesciunt accusantium quos
          eligendi quo quisquam. Architecto, in fugit fugiat nisi voluptatem
          voluptate excepturi.
        </p>
        <div className={classes["social-container"]}>
          <div
            className={classes["social-icon"]}
            style={{ backgroundColor: "#3B5999" }}
          >
            <Facebook />
          </div>
          <div
            className={classes["social-icon"]}
            style={{ backgroundColor: "#E4405F" }}
          >
            <Instagram />
          </div>
          <div
            className={classes["social-icon"]}
            style={{ backgroundColor: "#55ACEE" }}
          >
            <Twitter />
          </div>
          <div
            className={classes["social-icon"]}
            style={{ backgroundColor: "#E60023" }}
          >
            <Pinterest />
          </div>
        </div>
      </div>
      <div className={classes.center}>
        <h3>Useful Links</h3>
        <ul>
          <li>Home</li>
          <li>Cart</li>
          <li>Man Fashion</li>
          <li>Woman Fashion</li>
          <li>Accessories</li>
          <li>My Account</li>
          <li>Order Tracking</li>
          <li>Wishlist</li>
          <li>Terms</li>
        </ul>
      </div>
      <div className={classes.right}>
        <h3>Contact</h3>
        <div className={classes["contact-item"]}>
          <Room style={{marginRight:"10px"}}/> 622 Dixie Path , South Tobinchester 89336
        </div>
        <div className={classes["contact-item"]}> 
          <Phone style={{marginRight:"10px"}}/> +1 234 56 78
        </div>
        <div className={classes["contact-item"]}> 
          <MailOutline style={{marginRight:"10px"}}/> omarajjawi@gmail.com
        </div>
      </div>
    </div>
  );
};

export default Footer;
