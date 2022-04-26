import React from 'react'
import FoodCard from '../FoodCard'
import FoodList from '../FoodList'
import Calendar from './Calendar'

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
            <div className='title'>
                Leftovers List
            </div>
            <div className='LeftoversList'>
                <FoodList/>
            </div>
            <div className='WeeklyCalendar'>
                <Calendar/>
            </div>
    </div>
  )
}
