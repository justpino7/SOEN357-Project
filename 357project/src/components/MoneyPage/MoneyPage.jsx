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
      <div className='maindiv'>
          <BarChartMoney></BarChartMoney>
          <RightMoney></RightMoney>
      </div>
  );
}

export default MoneyPage;
