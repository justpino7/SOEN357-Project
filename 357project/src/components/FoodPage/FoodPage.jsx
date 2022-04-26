import "./FoodPage.css"; 
import "./BarChartFood";
import BarChartFood from "./BarChartFood.jsx";
import FoodTable from "./FoodTable";
import { Typography } from '@mui/material';

function FoodPage() {
    return (
      <div className="FoodPageContainer">
        <BarChartFood/> 
        <div className="FoodTableContainer">
          <div className="FoodTableTitle"><Typography variant='h6'>Most common foods wasted:</Typography></div>
          <FoodTable/>
        </div>
      </div>
    );
};

export default FoodPage;
