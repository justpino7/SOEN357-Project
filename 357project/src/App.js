import './App.css';
import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import BarChartMoney from "./components/MoneyPage/BarChartMoney"
<<<<<<< HEAD
import BarChartFood from './components/FoodPage/BarChartFood';
import FoodPage from "./components/FoodPage/FoodPage";
=======
import MoneyPage from './components/MoneyPage/MoneyPage';
>>>>>>> e386166903117ca65faa6cef6a9e35ef146d434b
// Redux

// Components
// import Dashboard from "./components/DashboardComponent/Dashboard";
import Navbar from "./components/Navbar";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import HomePage from './components/HomePage/HomePage';
function App() {
  return (
      <Router>
        <Fragment>
          <div className="pageWrap">
            <Navbar />
          </div>

          <section className="container">
            {/* <Sidebar /> */}
            <div className="dashboardContent">
              <Routes>
<<<<<<< HEAD
                <Route path="/" element={<BarChartMoney />} />
                <Route path="/a" element={<FoodPage />} />
=======
                <Route path="/" element={<HomePage />} />
                <Route path="/finance" element={<MoneyPage />} />
>>>>>>> e386166903117ca65faa6cef6a9e35ef146d434b
              </Routes>
            </div>
          </section>
        </Fragment>
      </Router>
  );
}

export default App;
