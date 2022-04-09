import React from "react";
import PopularProduct from "./popularProduct/popularProduct";
import SliderProduct from "./sliderProduct/sliderProduct";

const MainPage = () => {
  return (
    <div>
      <SliderProduct />
      <PopularProduct />
    </div>
  );
};

export default MainPage;
