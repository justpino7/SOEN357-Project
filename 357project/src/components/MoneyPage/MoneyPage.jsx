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
      <Typography align='center'>The finance page will give you greater insight at the money you have saved, and the money you could save if you use all your food. You would get weekly notifications of your savings for that week.</Typography>
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
