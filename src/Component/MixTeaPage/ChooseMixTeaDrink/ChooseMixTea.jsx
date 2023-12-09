import React from 'react';
import './ChooseMixTea.css';
import ChooseMixMilk from './ChooseMixMilk/ChooseMixMilk';
import ChooseMixSweet from './ChooseMixSweet/ChooseMixSweet';
import ChooseMixTopping from './ChooseMixTopping/ChooseMixTopping';

function ChooseMixTea() {
  return (
    <div className='ChooseMixTea'>
      <h3 className='NumberOneTea'>1. ชา</h3>
      <select className='TypeTea' defaultValue="ChooseTypeTea">
        <option value="ChooseTypeTea" disabled hidden>เลือกส่วนผสม</option>
        <option value="WhiteTea">ชาขาว</option>
        <option value="GreenTea">ชาเขียว</option>
        <option value="BlackTea">ชาดำ</option>
        <option value="OolongTea">ชาอู่หลง</option>
        <option value="HerbalTea">ชาสมุนไพร</option>
      </select>
      <ChooseMixMilk/>
      <ChooseMixSweet/>
      <ChooseMixTopping/>
    </div>
  );
}

export default ChooseMixTea;
