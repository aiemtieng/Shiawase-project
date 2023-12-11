import React,{useState} from "react";
import "./ChooseMixTopping.css";
import ListTeaChoose from "../../TeaOrderSummary/ListTeaChoose/ListTeaChoose";

function ChooseMixTopping() {
  const [selectedTopping, setSelectedTopping] = useState('');

  const getOptionText = (value) => {
    switch (value) {
      case 'NotTopping':
        return 'ไม่ตกแต่ง';
      case 'Fruit':
        return 'ผลไม้';
      case 'MilkFoam':
        return 'ฟองนม';
      case 'CoCoPowder':
        return 'ผงโกโก้';
      case 'ChocolateSyrup':
        return 'ไซรัปช็อกโกแลต';
      case 'CaramalSyrup':
        return 'ไซรัปคาราเมล';
      default:
        return '';
    }
  };

  const handleSelectChange = (event) => {
    setSelectedTopping(event.target.value);
  };
  return (
    <div className="ChooseMixTopping">
      <h3 className="NumberFourTopping">4. ตกแต่ง</h3>
      <select className="TypeTopping" value={selectedTopping} onChange={handleSelectChange}>
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
      <ListTeaChoose selectedTopping={selectedTopping} getOptionText={getOptionText} />
    </div>
  );
}

export default ChooseMixTopping;
