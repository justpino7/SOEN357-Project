import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import strawberries from './CardImages/Strawberries.jpg'
import './FoodCard.css'

export default function Strawberries() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="120"
        image={strawberries}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Strawberries
        </Typography>
        <Typography gutterBottom component="div">
          6 days | <span className='green'>7$</span>
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='outlined' color='success' size="small">Mark as Used</Button>
      </CardActions>
    </Card>
  );
}