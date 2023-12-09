import React from 'react'
import './StaffHome.css'
import OrderBooking from '../../Component/Home/LinkOrder/OrderBooking'
import Recommend from '../../Component/Home/TextRecommend/RecommendMenu'
import StaffMainPage from './StaffMainPage/StaffMainPage'
import Mainpage from '../../Component/Home/ImageInfoHome/MainPage'
import Footer from '../../Component/Home/Footer/Footer'
import StaffNavBar from '../Home/NavBar/StaffNavBar'

function StaffHome() {
  return (
    <div className='StaffHome'>
        <StaffNavBar/>
        <StaffMainPage/>
        <OrderBooking/>
        <Recommend/>
        
    </div>
  )
}

export default StaffHome