import React from 'react'
import "./ButtonChooseGetDrink.css";

function ButtonChooseGetDrink() {
  return (
    <div className='ButtonChooseGetDrink'>
        <div className='PickUpAtCafe'>
            <button className='CircleButtonPickUpAtCafe'></button>
            <ul className='TextPickUpAtCafe'>
                <li>มารับเองที่ร้าน เวลา</li>
            </ul>
            <input
              type='text'
              className='PlaceholderPickUpAtCafe'
            />
        </div>
        <div className='TableService'>
          <button className='CircleButtonTableService'></button>
          <ul className='TextTableService'>
            <li>เสิร์ฟที่โต๊ะ หมายเลข</li>
          </ul>
          <input
              type='text'
              className='PlaceholderTableService'
            />
        </div>
    </div>
  )
}

export default ButtonChooseGetDrink