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
            <div className='ContentContainer'>
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
                </div>
                <div className="OptionContainer">
                    <button className='FormButton'>
                        Add Food
                    </button>

                </div>    
            </div>

            <div className='title2'>
                Weekly Calendar
            </div>
    </div>
  )
}
