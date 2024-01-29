import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
    const [currImageIndex, setCurrImageIndex] = useState(0);

  const prev = () => {
    setCurrImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const next = () => {
    setCurrImageIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <>
      <div className="main-container">
        <div className="btn-container">
          <div>
            <button className="left-btn" onClick={prev}>
              <ArrowBackIosIcon style={{ fill: "white" }} />
            </button>
          </div>
          <div>
            <button className="right-btn" onClick={next}>
              <ArrowForwardIosIcon style={{ fill: "white" }} />
            </button>
          </div>
        </div>
        <div className="image-span-container">
          <span className="text title">{images[currImageIndex].title}</span>
          <img
            src={images[currImageIndex].img}
            alt={images[currImageIndex].title}
          />
          <span className="text sub-title">{images[currImageIndex].subtitle}</span>
        </div>
      </div>
    </>
  );
}

export default Carousel;