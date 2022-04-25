import React from 'react';
import { Typography } from '@mui/material';
import './RightMoney.css';





export default function RightMoney() {
    return ( <div>
    <Typography variant='h6'>This week, you could save <span className='abc'>47$</span> if you use all your food that expires before Sunday.</Typography>
    <Typography variant='h6'>Since you've been using Wastevio, you've saved <span className='abc'>386$</span>.</Typography>
    </div>)
}