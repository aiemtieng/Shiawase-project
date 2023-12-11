import React, { useState } from 'react';
import './ChooseMixTea.css';
import ChooseMixMilk from './ChooseMixMilk/ChooseMixMilk';
import ChooseMixSweet from './ChooseMixSweet/ChooseMixSweet';
import ChooseMixTopping from './ChooseMixTopping/ChooseMixTopping';
import ListTeaChoose from '../TeaOrderSummary/ListTeaChoose/ListTeaChoose';

function ChooseMixTea() {
  const [selectedTea, setSelectedTea] = useState('');

  const getOptionText = (value) => {
    switch (value) {
      case 'WhiteTea':
        return 'ชาขาว';
      case 'GreenTea':
        return 'ชาเขียว';
      case 'BlackTea':
        return 'ชาดำ';
      case 'OolongTea':
        return 'ชาอู่หลง';
      case 'HerbalTea':
        return 'ชาสมุนไพร';
      default:
        return '';
    }
  };

  const handleSelectChange = (event) => {
    setSelectedTea(event.target.value);
  };

  return (
    <div className='ChooseMixTea'>
      <h3 className='NumberOneTea'>1. ชา</h3>
      <select className='TypeTea' value={selectedTea} onChange={handleSelectChange}>
        <option value="ChooseTypeTea" disabled hidden>เลือกส่วนผสม</option>
        <option value="WhiteTea">ชาขาว</option>
        <option value="GreenTea">ชาเขียว</option>
        <option value="BlackTea">ชาดำ</option>
        <option value="OolongTea">ชาอู่หลง</option>
        <option value="HerbalTea">ชาสมุนไพร</option>
      </select>
      <ListTeaChoose selectedTea={selectedTea} getOptionText={getOptionText} />
      
      <ChooseMixMilk />
      <ChooseMixSweet />
      <ChooseMixTopping />
    </div>
  );
}

export default ChooseMixTea;
