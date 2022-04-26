import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import onions from './CardImages/GreenOnions.jpg'
import './FoodCard.css'

export default function Onions() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="120"
        image={onions}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Green onions
        </Typography>
        <Typography gutterBottom component="div">
          3 days | <span className='green'>1$</span>
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='outlined' color='success' size="small">Mark as Used</Button>
      </CardActions>
    </Card>
  );
}