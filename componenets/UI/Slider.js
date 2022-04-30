import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import image from "../../images/image.jpg";
import classes from "./Slider.module.css";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const onClickHandler = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div className={classes.container}>
      <div
        className={classes.arrow}
        style={{ left: "10px" }}
        onClick={() => onClickHandler("left")}
      >
        <ArrowLeftOutlined />
      </div>
      <div
        className={classes.wrapper}
        style={{ transform: "translateX(-100vw)" }}
      >
        <div className={classes.slide} style={{ backgroundColor: "#f5fafd" }}>
          <div className={classes["image-container"]}>
            <img src={image}></img>
          </div>
          <div className={classes["info-container"]}>
            <h1>SUMMER SALE</h1>
            <p>DON'T COMPROMISE ON STYLE!</p>
            <button>SHOP NOW</button>
          </div>
        </div>
        <div className={classes.slide} style={{ backgroundColor: "#fcf1ed" }}>
          <div className={classes["image-container"]}>
            <img src={image}></img>
          </div>
          <div className={classes["info-container"]}>
            <h1>WINTER SALE</h1>
            <p>DON'T COMPROMISE ON STYLE!</p>
            <button>SHOP NOW</button>
          </div>
        </div>
        <div className={classes.slide} style={{ backgroundColor: "#fbf0f4" }}>
          <div className={classes["image-container"]}>
            <img src={image}></img>
          </div>
          <div className={classes["info-container"]}>
            <h1>POPULAR SALE</h1>
            <p>DON'T COMPROMISE ON STYLE!</p>
            <button>SHOP NOW</button>
          </div>
        </div>
      </div>
      <div
        className={classes.arrow}
        style={{ right: "10px" }}
        onClick={() => onClickHandler()}
      >
        <ArrowRightOutlined />
      </div>
    </div>
  );
};

export default Slider;
