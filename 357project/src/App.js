import './App.css';
import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import BarChartMoney from "./components/MoneyPage/BarChartMoney"

// Redux

// Components
// import Dashboard from "./components/DashboardComponent/Dashboard";
import Navbar from "./components/Navbar";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
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
                <Route path="/" element={<BarChartMoney />} />
              </Routes>
            </div>
          </section>
        </Fragment>
      </Router>
  );
}

export default App;
