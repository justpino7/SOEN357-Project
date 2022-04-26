import "./FoodPage.css"; 
import "./BarChartFood";
import BarChartFood from "./BarChartFood.jsx";
import FoodTable from "./FoodTable";
import { Typography } from '@mui/material';

function FoodPage() {
    return (
      <div className="FoodPageContainer">
        <div className="FoodPageTitle">
          Less Consumed Foods
        </div>
        <Typography align='center'>The food overview page allows you to see how well you have been doing with your food waste management, and provides a table of your foods that expire the most, so that you may be more vigilant in the future.</Typography>  
          <BarChartFood></BarChartFood> 
        <div className="FoodTableContainer">
          <div className="FoodTableTitle">
            Most expired foods
          </div>
          <FoodTable/>          
        </div>
      </div>
    );
};

export default FoodPage;
