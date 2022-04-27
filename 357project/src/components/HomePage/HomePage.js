import React from 'react'
import { Link } from 'react-router-dom'
import FoodCard from './FoodCards/FoodCard'
import FoodList from '../FoodList'
import  Bread from './FoodCards/Bread'
import  Carrots from './FoodCards/Carrots'
import  Chicken from './FoodCards/Chicken'
import  GeneralTao from './FoodCards/GeneralTao'
import  Milk from './FoodCards/Milk'
import  Onions from './FoodCards/Onions'
import  Soup from './FoodCards/Soup'
import  Strawberries from './FoodCards/Strawberries'
import  Yogurt from './FoodCards/Yogurt'
import { Typography } from '@mui/material'
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
                        <GeneralTao/>
                    </div>
                    <div className='Card'>
                        <Chicken/>
                    </div>
                    <div className='Card'>
                        <Onions/>
                    </div>
                    <div className='Card'>
                        <Milk/>
                    </div>
                    <div className='Card'>
                        <Soup/>
                    </div>
                    <div className='Card'>
                        <Yogurt/>
                    </div>
                    <div className='Card'>
                        <Strawberries/>
                    </div>
                    <div className='Card'>
                        <Bread/>
                    </div>
                    <div className='Card'>
                        <Carrots/>
                    </div>
                </div>
                <div className="OptionContainer">
                    <button className='FormButton'>
                        Add Food
                    </button>
                    <div className="TextBox">
                        The overview page will let you see your closest-expiring foods at a glance, and let you add new food and mark existing food as used. There is also a weekly calendar of your soon-expiring food for easier viewing. You would get notifications for food expiring the next days so that you may plan your meals accordingly.
                    </div>

                </div>    
            </div>

            <div className='title2'>
                Calendar
            </div>
            <FoodList/>
    </div>
  )
}
