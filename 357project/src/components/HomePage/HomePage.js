import React from 'react'
import FoodCard from '../FoodCard'
import FoodList from '../FoodList'

import './HomePage.css';

export default function HomePage() {
  return (
    <div className='HomePageWrapper'>
        <div className='HomePageHeader'>
            <div className="title">Overview</div>
        </div>
            <div className="CardContainer">
                <div className='Card'>
                    <FoodCard/>
                </div>
                <div className='Card'>
                    <FoodCard/>
                </div>
                <div className='Card'>
                    <FoodCard/>
                </div>
                <div className='Card'>
                    <FoodCard/>
                </div>
                <div className='Card'>
                    <FoodCard/>
                </div>
                <div className='Card'>
                    <FoodCard/>
                </div>
                <div className='Card'>
                    <FoodCard/>
                </div>
                <div className='Card'>
                    <FoodCard/>
                </div>
                <div className='Card'>
                    <FoodCard/>
                </div>
                <div className='Card'>
                    <FoodCard/>
                </div>
                <div className='Card'>
                    <FoodCard/>
                </div>
                <div className='Card'>
                    <FoodCard/>
                </div>
                
            </div>
            <div className='LeftoversList'>
                Leftovers List
                <FoodList/>
            </div>
            <div className='WeeklyCalendar'>
                Weekly Calendar
            </div>
    </div>
  )
}
