import "./Toolbar.css";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";


function Toolbar() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <div className="toolbar">
          <div className="toolbarWrapper">
            <div className="topLeft">
              <span className="logo">Covid Tracker </span>
            </div>
          </div>
        </div>
      </Box>
    );
};

export default Toolbar;
