import React from "react";
import "./ChooseMixMilk.css";

function ChooseMixMilk() {
  return (
    <div className="ChooseMixMilk">
      <h3 className="NumberTwoMilk">2. นม</h3>
      <select className="TypeMilk" defaultValue="ChooseTypeMilk">
        <option value="ChooseTypeMilk" disabled hidden>
          เลือกส่วนผสม
        </option>
        <option value="NotMilk">ไม่ใส่นม</option>
        <option value="CowMilk">นมวัว</option>
        <option value="GoatMilk">นมแพะ</option>
        <option value="SoyMilk">นมถั่วเหลือง</option>
        <option value="AlmondMilk">นมอัลมอนด์</option>
      </select>
    </div>
  );
}

export default ChooseMixMilk;
