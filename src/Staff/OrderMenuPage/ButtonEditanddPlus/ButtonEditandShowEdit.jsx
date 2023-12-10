import React, { useState } from 'react';
import './ButtonEditandShowEdit.css';
import AddEditDeleteMenu from '../StaffListShowMenu/AddEditDeleteMenu/AddEditDeleteMenu';

function ButtonEditandShowEdit() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className='ButtonEditandShowEdit'>
      <button className='ButtonEdit b-edit'>แก้ไข</button>
      <button className='ButtonPlus b-plus' onClick={() => setShowContent(!showContent)}>+</button>
      {showContent && <AddEditDeleteMenu />}
    </div>
  );
}

export default ButtonEditandShowEdit;
