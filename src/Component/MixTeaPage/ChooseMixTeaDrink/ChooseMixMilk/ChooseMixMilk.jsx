import React, { useState } from "react";
import "./ChooseMixMilk.css";
import ListTeaChoose from "../../TeaOrderSummary/ListTeaChoose/ListTeaChoose";
import TeaSummary from "../../TeaOrderSummary/TeaSummary";


function ChooseMixMilk() {
  const [selectedMilk, setSelectedMilk] = useState("");

  const getOptionText = (value) => {
    switch (value) {
      case "NotMilk":
        return "ไม่ใส่นม";
      case "CowMilk":
        return "นมวัว";
      case "GoatMilk":
        return "นมแพะ";
      case "SoyMilk":
        return "นมถั่วเหลือง";
      case "AlmondMilk":
        return "นมอัลมอนด์";
      default:
        return "";
    }
  };

  const handleSelectChange = (event) => {
    setSelectedMilk(event.target.value);
  };

  return (
    <div className="ChooseMixMilk">
      <h3 className="NumberTwoMilk">2. นม</h3>
      <div className="SelectedOptionDisplay">
        <select className="TypeMilk" value={selectedMilk} onChange={handleSelectChange}>
        <option value="ChooseTypeMilk" disabled hidden>
            เลือกส่วนผสม
          </option>
          <option value="NotMilk">ไม่ใส่นม</option>
          <option value="CowMilk">นมวัว</option>
          <option value="GoatMilk">นมแพะ</option>
          <option value="SoyMilk">นมถั่วเหลือง</option>
          <option value="AlmondMilk">นมอัลมอนด์</option>
        </select>
        <ListTeaChoose selectedMilk={selectedMilk} getOptionText={getOptionText} />
      </div>
    </div>
  );
}

export default ChooseMixMilk;
