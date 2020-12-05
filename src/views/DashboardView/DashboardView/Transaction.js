import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  useTheme,
  makeStyles,
  colors,
  Grid,
  Box,
  Typography,
} from '@material-ui/core';
import Table from 'src/components/Table.js';

const headers = ["Date", "Time", "Subject", "Tutor", "Amount", "Session Number"]

const rows = [
  {
    date: 'July 7',
    time: '4 PM',
    subject: 'Science',
    tutor:  'Adrienne Soliven',
    amount: 'P600',
    sessionNo: '1234',
  }
]

const useStyles = makeStyles(() => ({
  root: {}
}));

const Sales = ({ className, rows, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader
        title="Transactions"
      />
      <Divider />
      {(rows).length != 0 ? 
        <React.Fragment>
          <CardContent>
            <Table tableHeaders={headers} tableRows={rows}/>
          </CardContent>
        </React.Fragment>
      :
        <React.Fragment>
          <Box m={6}>
            <Typography variant='h3' align='center'>
              No previous transactions
            </Typography>
          </Box>
        </React.Fragment>
      }

    </Card>
  );
};

Sales.propTypes = {
  className: PropTypes.string,
  rows: PropTypes.array
};

export default Sales;
