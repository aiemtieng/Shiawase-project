import React,{useState} from "react";
import "./ChooseMixSweet.css";
import ListTeaChoose from "../../TeaOrderSummary/ListTeaChoose/ListTeaChoose";

function ChooseMixSweet() {
  const [selectedSweet, setSelectedSweet] = useState('');

  const getOptionText = (value) => {
    switch (value) {
      case 'NotSweet':
        return 'ไม่ใส่ความหวาน';
      case 'SweetMilk':
        return 'นมข้นหวาน';
      case 'Sugar':
        return 'น้ำตาล';
      case 'Honey':
        return 'น้ำผึ้ง';
      case 'FruitSyrup':
        return 'ไซรัปผลไม้';
      default:
        return '';
    }
  };

  const handleSelectChange = (event) => {
    setSelectedSweet(event.target.value);
  };
  return (
    <div className="ChooseMixSweet">
      <h3 className="NumberThreeSweet">3. ความหวาน</h3>
      <select className="TypeSweet" value={selectedSweet} onChange={handleSelectChange}>
        <option value="ChooseTypeSweet" disabled hidden>
          เลือกส่วนผสม
        </option>
        <option value="NotSweet">ไม่ใส่ความหวาน</option>
        <option value="SweetMilk">นมข้นหวาน</option>
        <option value="Sugar">น้ำตาล</option>
        <option value="Honey">น้ำผึ้ง</option>
        <option value="FruitSyrup">ไซรัปผลไม้</option>
      </select>
      <ListTeaChoose selectedSweet={selectedSweet} getOptionText={getOptionText} />
    </div>
  );
}

export default ChooseMixSweet;
