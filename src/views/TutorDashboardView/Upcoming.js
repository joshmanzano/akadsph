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
  Tooltip,
  Button,
  Box,
  Container,
  Typography,
} from '@material-ui/core';
import Calendar from 'react-calendar'
import Table from './Table' 

const rows = [
  {
    date: 'Dec 7',
    time: '4 PM',
    subject: 'Math',
    student: 'Joshua Manzano',
  },
  // {
  //   date: 'July 7',
  //   time: '4 PM',
  //   subject: 'Math',
  //   student: 'Rolo Pena',
  // },
  // {
  //   date: 'July 7',
  //   time: '4 PM',
  //   subject: 'Science',
  //   student: 'Rolo Pena',
  // },
  // {
  //   date: 'July 7',
  //   time: '4 PM',
  //   subject: 'LoL',
  //   tutor: {
  //     name: 'Adrienne Soliven'
  //   },
  // },
  // {
  //   date: 'July 7',
  //   time: '4 PM',
  //   subject: 'Filipino',
  //   tutor: {
  //     name: 'Adrienne Soliven'
  //   },
  // },
  // {
  //   date: 'July 7',
  //   time: '4 PM',
  //   subject: 'Filipino',
  //   tutor: {
  //     name: 'Adrienne Soliven'
  //   },
  // },
]

const headers = ["Date", "Time", "Subject", "Student", ""]

const sessionType = "upcoming"

const type = "session"

const useStyles = makeStyles(() => ({
  root: {}
}));

const Sales = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader
        title="Upcoming Sessions"
      />
      <Divider />
      {(rows).length != 0 ? 
        <React.Fragment>
          <CardContent>
            <Table tableHeaders={headers} tableRows={rows} sessionType={sessionType} type={type}/>
          </CardContent>
        </React.Fragment>
      :
        <React.Fragment>
          <Box m={6}>
            <Typography variant='h3' align='center'>
              No upcoming sessions
            </Typography>
          </Box>
        </React.Fragment>
      }
    </Card>
  );
};

Sales.propTypes = {
  className: PropTypes.string
};

export default Sales;
