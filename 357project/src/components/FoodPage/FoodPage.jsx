import "./FoodPage.css"; 
import "./BarChartFood";
import BarChartFood from "./BarChartFood";
import FoodTable from "./FoodTable";

function FoodPage() {
    return (
      <div className="FoodPageContainer">
        <div className="FoodChart">
        <BarChartFood/> 
        </div>
        <div className="FoodTableContainer">
          <div className="FoodTableTitle">Be Careful of These Foods!!</div>
          <FoodTable/>
        </div>
      </div>
    );
};

export default FoodPage;
