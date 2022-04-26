import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import BarChartMoney from "./BarChartMoney"
import RightMoney from './RightMoney';
import './MoneyPage.css'

// Redux

// Components
// import Dashboard from "./components/DashboardComponent/Dashboard";
import Typography from "@mui/material/Typography";
function MoneyPage() {
  return (
    <div className="FinanceContainer">
      <div className="PageTitle">
        <h1>Total Savings</h1>
      </div>
      <div className='ChartContainer'>
        <BarChartMoney></BarChartMoney>
      </div>
      <div className="TextContainer">
        <RightMoney></RightMoney>
      </div>      
    </div>

  );
}

export default MoneyPage;
