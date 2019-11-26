import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

function createData(busname,bustype, destination, departure, lastrip, seatnum,trip) {
  return { busname, bustype,destination, departure, lastrip, seatnum,trip };
}

const rows = [
  createData('CERES LINER','Aircon', 'Bato via Barili','4:00 am', '6:00 pm', '45 Seaters','3 ways'),
  createData('CERES LINER','Ordinary', 'Bato via Barili','4:00 am', '6:00 pm', '45 Seaters','3 ways'),
  createData('CERES LINER', 'Ordinary','Moalboal', 'no time', 'until clear', '	39 Seaters','4 ways'),
  createData('CERES LINER', 'Ordinary','Carcar','no time', 'until clear','39 Seaters','7 ways'),
  createData('CERES LINER', 'Ordinary','Argao','no time', 'until clear', '39 Seaters','6 ways'),
  createData('CERES LINER', 'Ordinary','Alcoy', 'no time', 'until clear', '39 Seaters','4 ways'),
  createData('CERES LINER', 'Ordinary','Bato via Oslob', 'no time', 'until clear', '39 Seaters','3 ways'),
  createData('CERES LINER', 'Aircon','Argao','no time', 'until clear', '39 Seaters','6 ways'),
  createData('CERES LINER', 'Aircon','Bato/ Oslob/Alcoy', '1:00 am', '12:00 Mid', '	45 Seaters','3 ways'),
  createData('CERES LINER','Aircon','Dumaguete', '6:00 am', '6:00 pm', '45 Seaters','Round Trip'),
  createData('CERES LINER','Aircon','Bacolod', '6:00 am', '1:00 pm', '45 Seaters'),
];

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
}));

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
    <div>
      <h1><center>CERES LINER SCHEDULES</center></h1>
    </div>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Bus Name</StyledTableCell>
            <StyledTableCell align="right">Bus Type</StyledTableCell>
            <StyledTableCell align="right">Destination</StyledTableCell>
            <StyledTableCell align="right">Departure</StyledTableCell>
            <StyledTableCell align="right">Last Trip</StyledTableCell>
            <StyledTableCell align="right">Sitting Capacity</StyledTableCell>
            <StyledTableCell align="right">Number of Trip/Day</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.busname}>
              <StyledTableCell component="th" scope="row">
                {row.busname}
              </StyledTableCell>
              <StyledTableCell align="right">{row.bustype}</StyledTableCell>
              <StyledTableCell align="right">{row.destination}</StyledTableCell>
              <StyledTableCell align="right">{row.departure}</StyledTableCell>
              <StyledTableCell align="right">{row.lastrip}</StyledTableCell>
              <StyledTableCell align="right">{row.seatnum}</StyledTableCell>
              <StyledTableCell align="right">{row.trip}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}