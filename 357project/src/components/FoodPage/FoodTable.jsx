import "./FoodTable.css"; 
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
    name,
    expiredCount
  ) {
    return { name, expiredCount };
  }
  
  const rows = [
    createData('Blueberries',10),
    createData('Ice cream sandwich', 8),
    createData('Eclair', 3),
    createData('Cupcake', 1),
    createData('Gingerbread', 0),
  ];

const FoodTable = () => {
    return (
        <TableContainer component={Paper} className="FoodTable">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Food</TableCell>
              <TableCell className="tableCell">Amount of Times the Food Expired</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell className="tableCell"> {row.name}</TableCell>
                <TableCell className="tableCell">{row.expiredCount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
};

export default FoodTable
