import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Button,
} from '@mui/material';
import {
  Edit,
  CloudDownload,
  TransferWithinAStation,
} from '@mui/icons-material';

// Sample data for the table
const rows = [
  {
    id: 1,
    name: 'Item 1',
    description: 'Description 1',
    quantity: 5,
    price: 10,
    total: 50,
  },
  {
    id: 2,
    name: 'Item 2',
    description: 'Description 2',
    quantity: 3,
    price: 8,
    total: 24,
  },
  {
    id: 3,
    name: 'Item 3',
    description: 'Description 3',
    quantity: 7,
    price: 12,
    total: 84,
  },
  {
    id: 4,
    name: 'Item 4',
    description: 'Description 4',
    quantity: 7,
    price: 12,
    total: 84,
  },
  {
    id: 5,
    name: 'Item 5',
    description: 'Description 5',
    quantity: 7,
    price: 12,
    total: 84,
  },
  {
    id: 6,
    name: 'Item 6',
    description: 'Description 6',
    quantity: 7,
    price: 12,
    total: 84,
  },
  // Add more rows as needed
];

const columns = [
  { id: 'name', label: 'Name' },
  { id: 'description', label: 'Description' },
  { id: 'quantity', label: 'Quantity' },
  { id: 'price', label: 'Price' },
  { id: 'total', label: 'Total' },
  { id: 'total2', label: 'Total2' },
  { id: 'total3', label: 'Total3' },
  { id: 'total4', label: 'Total4' },
  // Add more columns as needed
];

const DashboardTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.id}>{column.label}</TableCell>
            ))}
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => (
              <TableRow key={row.id}>
                {columns.map((column) => (
                  <TableCell key={column.id}>{row[column.id]}</TableCell>
                ))}
                <TableCell>
                  <Button>
                    <Edit />
                  </Button>
                  <Button>
                    <CloudDownload />
                  </Button>
                  <Button>
                    <TransferWithinAStation />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[3, 5, 10]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

export default DashboardTable;
