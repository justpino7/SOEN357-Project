import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, portion, expiresIn) {
  return { name, portion, expiresIn };
}

const rows = [
  createData('Wednesday, April 27th', 'General Tao leftovers', '8$'),
  createData('Thursday, April 28th', 'Yogurt, Strawberries, Raw chicken', '3$, 7$, 11$'),
  createData('Friday, April 29th', 'Green onions', '1$'),
  createData('Saturday, April 30th', 'None', ''),
  createData('Sunday, May 1st', 'Pot of chicken noodle soup', '12$'),
  createData('Monday, May 2nd', '', '12$'),
  createData('Tuesday, May 3rd', 'Bread, Carrots', '4$, 3$'),
  createData('Wednesday, May 4th', 'Pot of chicken noodle soup', '12$'),
  createData('Thursday, May 5th', 'Pot of chicken noodle soup', '12$'),
  createData('Friday, May 6th', 'Pot of chicken noodle soup', '12$'),
];

export default function DenseTable() {
  return (
    <TableContainer style={{width: '45%'}}component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
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
  );
}