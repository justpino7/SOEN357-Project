import React from 'react';
import { Typography } from '@mui/material';
import './RightMoney.css';





export default function RightMoney() {
    return ( 
    <div className='TextBox'>
        <Typography variant='h6'>So far this week, you have saved <span className='abc'>12$</span>.</Typography>
        <Typography variant='h6'>You could save another <span className='abc'>36$</span> if you use all your food that expires before Sunday.</Typography>
        <Typography variant='h6'>Since you've been using Wastevio, you've saved <span className='abc'>386$</span>.</Typography>
    </div>)
}