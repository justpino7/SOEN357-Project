import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './FoodList.css'

function createData(name, portion, expiresIn) {
  return { name, portion, expiresIn };
}

const rows = [
  createData('Wednesday, April 27th', 'General Tao', '8$'),
  createData('Thursday, April 28th', 'Raw chicken', '11$'),
  createData('Friday, April 29th', 'Green onions', '1$'),
  createData('Saturday, April 30th', 'Milk', '4$'),
  createData('Sunday, May 1st', 'Pot soup', '12$'),
  createData('Monday, May 2nd', 'Yogurt, Strawberries', '3$, 7$'),
  createData('Tuesday, May 3rd', 'Bread, Carrots', '4$, 3$'),
];

export default function DenseTable() {
  return (
    <div className='TableWrapper'>
      <TableContainer className='Table' component={Paper}>
        <Table  size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Expiration Date</TableCell>
              <TableCell align="right">Food</TableCell>
              <TableCell align="right">Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.portion}</TableCell>
                <TableCell align="right">{row.expiresIn}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>      
    </div>
  );
}