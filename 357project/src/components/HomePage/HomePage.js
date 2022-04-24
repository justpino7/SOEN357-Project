import React from 'react'
import FoodCard from '../FoodCard'
import FoodList from '../FoodList'

export default function HomePage() {
  return (
    <div className='HomePageWrapper'>
        <div className='HomePageDashboardWrapper'>
            <div className='HomePageDashboard'>
                HomePage
                <div className='LeftoversList'>
                    Leftovers List
                    <FoodCard/>
                    <FoodList/>
                </div>
                <div className='WeeklyCalendar'>
                    Weekly Calendar
                </div>
            </div>
        </div>
    </div>
  )
}
