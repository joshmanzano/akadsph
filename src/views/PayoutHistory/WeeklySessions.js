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
} from '@material-ui/core';
import Table from 'src/components/Table.js' 
import ModalSessionDetails from 'src/components/ModalSessionDetails.js';
import PageviewIcon from '@material-ui/icons/Pageview';

const rows = [
  {
    date: 'September 29',
    time: '4 PM',
    subject: 'Filipino',
    duration: '1 hr',
    student: 'Rolo Pena',
    grade: 'Grade 10',
    status: 'Completed',
    payout: 'P300'
  },
  {
    date: 'September 30',
    time: '4 PM',
    subject: 'Math',
    duration: '1 hr',
    student: 'Rolo Pena',
    grade: 'Grade 10',
    status: 'Completed',
    payout: 'P300'
  },
  {
    date: 'October 1',
    time: '4 PM',
    subject: 'Science',
    duration: '1 hr',
    student: 'Rolo Pena',
    grade: 'Grade 10',
    status: 'Completed',
    payout: 'P300'
  },
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

const headers = ["Date", "Time", "Subject", "Duration", "Student", "Grade", "Status", "Payout", ""]

const useStyles = makeStyles(() => ({
  root: {}
}));

const WeeklySessions = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [openDetails, setOpenDetails] = React.useState(false);

  const buttonList = [<Button variant='outlined' color='primary' startIcon={<PageviewIcon/>} onClick={() => setOpenDetails(true)}>View</Button>]

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      {/* <CardHeader
        title="Upcoming Sessions"
      /> */}
      <Divider />
      <CardContent>
        <Table tableHeaders={headers} tableRows={rows} tableButtons={buttonList}/>
      </CardContent>
      <ModalSessionDetails open={openDetails} setOpen={setOpenDetails} /*details={sessionDetails}*//> 
    </Card>
  );
};

WeeklySessions.propTypes = {
  className: PropTypes.string
};

export default WeeklySessions;
