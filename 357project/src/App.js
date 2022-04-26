import './App.css';
import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import BarChartMoney from "./components/MoneyPage/BarChartMoney"
import MoneyPage from './components/MoneyPage/MoneyPage';
import FoodPage from "./components/FoodPage/FoodPage";
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
    <div className="appBackground">
      <Router>
        <Fragment>
          <div className="navBarWrap">
            <Navbar />
            <section>
              <div>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/finance" element={<MoneyPage />} />
                  <Route path="/food" element={<FoodPage/>} />
                </Routes>
              </div>
            </section>
          </div>
        </Fragment>
      </Router>      
    </div>

  );
}

export default App;
