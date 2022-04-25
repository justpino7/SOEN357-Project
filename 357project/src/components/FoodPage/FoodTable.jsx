import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  {
    id: 'expiredCount',
    label: 'expiredCount',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  
];

function createData(name, expiredCount) {
  return { name, expiredCount };
}

const rows = [
  createData('Avocado', 27),  
  createData('Strawberries', 24),   
  createData('Bread', 21),   
  createData('Salsa', 21),   
  createData('Milk', 16),   
  createData('Apple', 16),   
  createData('Mushroom', 12),   
  createData('Leftover Spaghetti', 12),   
  createData('Blueberries', 10),   
  createData('Kiwi', 7),  
  createData('Cake', 6), 
  createData('Mango', 2),  
  createData('Poptart', 0), 
  createData('Peanut Butter', 0),
  createData('Brownies', 0),   
  createData('Banana', 0),   
  createData('Orange', 0),   
  createData('Tangerine', 0),   
  createData('Leftover Boustan', 0),   
  createData('Yogurt', 0),
  createData('Ham', 0),
  createData('Ribs', 0),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 350 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
