import React from 'react'
import './StaffOrderMenuPage.css'
import PosterMenu from '../../Component/OrderMenuPage/PosterMenu/PosterMenu'
import ButtonMenu from '../../Component/OrderMenuPage/ButtonMenu/ButtonMenu'
import StaffNavBar from '../Home/NavBar/StaffNavBar'
import StaffListShowMenu from './StaffListShowMenu/StaffListShowMenu'
import StaffOrderSummary from './StaffOrderSummary/StaffOrderSummary'

  
function StaffOrderMenuPage() {
  return (
    <div className='StaffOrderMenuPage'>
        <StaffNavBar/>
        <PosterMenu/>
        <ButtonMenu/>
        <StaffListShowMenu/>
        <StaffOrderSummary/>
    </div>
  )
}

export default StaffOrderMenuPage