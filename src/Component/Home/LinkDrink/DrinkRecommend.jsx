import React from 'react'
import './DrinkRecommend.css'
import MilkRecommend from './MilkRecommend/MilkRecommend'
import TeaRecommend from './TeaRecommend/TeaRecommend'
import CoffeeRecommend from './CoffeeRecommend/CoffeeRecommend'
import SodaRecommend from './SodaRecommend/SodaRecommend'

function DrinkRecommend() {
  return (
    <div className='DrinkRecommend'>
        <MilkRecommend/>
        <TeaRecommend/>
        <CoffeeRecommend/>
        <SodaRecommend/>
    </div>
  )
}

export default DrinkRecommend