import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';

const useStyles = makeStyles({
    table: {
      minWidth: "100%",
    },
    tableHead: {
        fontWeight: 700,
        color: "#6c757d",
        paddingRight: 4,
        paddingLeft: 5,
    },
    tableBody: {
    },
    dateColumnBody: {
        fontWeight: 700,
        color: "#6c757d",
        paddingRight: 4,
        paddingLeft: 5,
    },
    activeColumn: {
        color: "rgb(0, 123, 255)",
        paddingRight: 4,
        paddingLeft: 5,
    },
    confirmedColumn: {
        color: "rgb(255, 7, 58)",
        paddingRight: 4,
        paddingLeft: 5,
    },
    deathsColumn: {
        color: "rgb(108, 117, 125)",
        paddingRight: 4,
        paddingLeft: 5,
    },
    recoveredColumn: {
        color: "rgb(40, 167, 69)",
        paddingRight: 4,
        paddingLeft: 5,
    }
});

const TableComponent = ({ covidCountryData }) => {

    const [page, setPage] = React.useState(2);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">  
            <TableHead>
              <TableRow>
                <TableCell className={classes.tableHead}>Date</TableCell>
                <TableCell className={classes.tableHead} align="right">Active</TableCell>
                <TableCell className={classes.tableHead} align="right">Confirmed</TableCell>
                <TableCell className={classes.tableHead} align="right">Deaths</TableCell>
                <TableCell className={classes.tableHead} align="right">Recovered</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className={classes.tableBody}>
              {covidCountryData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .reverse()
              .map((row) => (
                <TableRow key={row.ID} data-country={row.Country}>
                    <TableCell className={classes.dateColumnBody} component="th" scope="row">{new Date(row.Date).toLocaleString()}</TableCell>
                    <TableCell className={classes.activeColumn} align="right">{row.Active}</TableCell>
                    <TableCell className={classes.confirmedColumn} align="right">{row.Confirmed}</TableCell>
                    <TableCell className={classes.deathsColumn} align="right">{row.Deaths}</TableCell>
                    <TableCell className={classes.recoveredColumn} align="right">{row.Recovered}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TablePagination
                component="div"
                count={covidCountryData.length}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </TableContainer>
    );
};

export default TableComponent;