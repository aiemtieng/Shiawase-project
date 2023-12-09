import React from "react";
import "./ChooseMixSweet.css";

function ChooseMixSweet() {
  return (
    <div className="ChooseMixSweet">
      <h3 className="NumberThreeSweet">3. ความหวาน</h3>
      <select className="TypeSweet" defaultValue="ChooseTypeSweet">
        <option value="ChooseTypeSweet" disabled hidden>
          เลือกส่วนผสม
        </option>
        <option value="NotSweet">ไม่ใส่ความหวาน</option>
        <option value="SweetMilk">นมข้นหวาน</option>
        <option value="Sugar">น้ำตาล</option>
        <option value="Honey">น้ำผึ้ง</option>
        <option value="FruitSyrup">ไซรัปผลไม้</option>
      </select>
    </div>
  );
}

export default ChooseMixSweet;
