import React from "react";
import "./ChooseMixTopping.css";

function ChooseMixTopping() {
  return (
    <div className="ChooseMixTopping">
      <h3 className="NumberFourTopping">4. ตกแต่ง</h3>
      <select className="TypeTopping" defaultValue="ChooseTypeTopping">
        <option value="ChooseTypeTopping" disabled hidden>
          เลือกส่วนผสม
        </option>
        <option value="NotTopping">ไม่ตกแต่ง</option>
        <option value="Fruit">ผลไม้</option>
        <option value="MilkFoam">ฟองนม</option>
        <option value="CoCoPowder">ผงโกโก้</option>
        <option value="ChocolateSyrup">ไซรัปช็อกโกแลต</option>
        <option value="CaramalSyrup">ไซรัปคาราเมล</option>
      </select>
    </div>
  );
}

export default ChooseMixTopping;
