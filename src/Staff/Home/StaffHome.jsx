import React from 'react'
import './StaffHome.css'
import Recommend from '../../Component/Home/TextRecommend/RecommendMenu'
import StaffMainPage from './StaffMainPage/StaffMainPage'
import Footer from '../../Component/Home/Footer/Footer'
import StaffNavBar from '../Home/NavBar/StaffNavBar'
import StaffOrderMenu from './StaffLinkOrder/StaffOrderMenu'
import StaffOrderBooking from './StaffLinkOrder/StaffOrderBooking'

function StaffHome() {
  return (
    <div className='StaffHome'>
        <StaffNavBar/>
        <StaffMainPage/>
        <StaffOrderBooking/>
        <Recommend/>
        
    </div>
  )
}

export default StaffHome