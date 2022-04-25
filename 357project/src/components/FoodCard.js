import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import lizard from '../Images/lizard.jpg'

export default function FoodCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="120"
        image={lizard}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Lizard
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add Portion</Button>
        <Button size="small">Remove Portion</Button>
      </CardActions>
    </Card>
  );
}