import './App.css';
import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

// Redux

// Components
// import Dashboard from "./components/DashboardComponent/Dashboard";
import Toolbar from "./components/Toolbar";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
function App() {
  return (
      <Router>
        <Fragment>
          <div className="pageWrap">
            <Toolbar />
          </div>

          <section className="container">
            {/* <Sidebar /> */}
            <div className="dashboardContent">
              <Routes>
              </Routes>
            </div>
          </section>
        </Fragment>
      </Router>
  );
}

export default App;
