import React from 'react'
import './ButtonMenu.css'

function ButtonMenu() {

  // Define click handlers for each button
  const handleButtonClick = (drink) => {
    alert(`You clicked on ${drink}`);
  }

  return (
    <div className='ButtonMenu'>
        <div className='DrinkMilk'>
            <button className='milk-button' onClick={() => handleButtonClick('นม')}>นม</button>
        </div>
        <div className='DrinkTea'>
            <button className='tea-button' onClick={() => handleButtonClick('ชา')}>ชา</button>
        </div>
        <div className='DrinkCoffee'>
            <button className='coffee-button' onClick={() => handleButtonClick('กาแฟ')}>กาแฟ</button>
        </div>
        <div className='DrinkSoda'>
            <button className='soda-button' onClick={() => handleButtonClick('โซดา')}>โซดา</button>
        </div>
        <div className='DessertBakery'>
            <button className='bakery-button' onClick={() => handleButtonClick('เบเกอรี่')}>เบเกอรี่</button>
        </div>
        <div className="StraightLineMenu"></div>
    </div>
  )
}

export default ButtonMenu;
