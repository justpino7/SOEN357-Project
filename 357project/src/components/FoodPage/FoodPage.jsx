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
          <BarChartFood></BarChartFood> 
        <div className="FoodTableContainer">
          <div className="FoodTableTitle">
            Be Careful of These Foods!!
          </div>
          <FoodTable/>            
        </div>
      </div>
    );
};

export default FoodPage;
