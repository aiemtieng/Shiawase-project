import React, { useState } from "react";
import "./RecommendMenu.css";
import DrinkRecommend from "../LinkDrink/DrinkRecommend";
import BakeryRecommend from "../LinkBakery/BakeryRecommend";

function Recommend() {
  const [showDrinkRecommend, setShowDrinkRecommend] = useState(true);
  const [showBakeryRecommend, setShowBakeryRecommend] = useState(false);

  const toggleDrinkComponent = () => {
    setShowDrinkRecommend(!showDrinkRecommend);
    setShowBakeryRecommend(false);
  };

  const toggleBakeryComponent = () => {
    setShowBakeryRecommend(!showBakeryRecommend);
    setShowDrinkRecommend(false);
  };

  return (
    <div className="Recommend">
      <div className="RecommendMenu">
        <ul style={{ listStyleType: "none" }}>
          <li>แนะนำเมนู</li>
        </ul>
      </div>
      <div className="DrinkandBakery">
        <ul style={{ listStyleType: "none" }}>
          <li>
            <button className="drink" onClick={toggleDrinkComponent}>
              เครื่องดื่ม
            </button>
            {showDrinkRecommend && <DrinkRecommend />}
          </li>
          <li>
            <button className="bakery" onClick={toggleBakeryComponent}>
              เบเกอรี่
            </button>
            {showBakeryRecommend && <BakeryRecommend />}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Recommend;
