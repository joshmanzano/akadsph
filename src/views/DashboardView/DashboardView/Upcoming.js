import React from 'react';
import clsx from 'clsx';
// import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  useTheme,
  makeStyles,
  Button,
  Box,
  Typography
} from '@material-ui/core';
import Table from 'src/components/Table.js'; 
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import ForumIcon from '@material-ui/icons/Forum';
import PageviewIcon from '@material-ui/icons/Pageview';
import ModalJoin from './ModalJoin';
import ModalSessionDetails from 'src/components/ModalSessionDetails.js';
import CancelIcon from '@material-ui/icons/Cancel';
import { useConfirm } from 'material-ui-confirm';
import moment from 'moment';
import Toast from 'light-toast';

const rows = [
  {
    time: '4 PM',
    subject: 'Math',
    tutor: 'Joshua Manzano',
  },
  // {
  //   time: '4 PM',
  //   subject: 'Math',
  //   tutor: 'Adrienne Soliven',
  // },
  // {
  //   date: 'July 7',
  //   time: '4 PM',
  //   subject: 'Science',
  //   tutor: {
  //     name: 'Adrienne Soliven'
  //   },
  // },
]

const headers = ["Time", "Subject", "Tutor", ""]


const sessionDetails = [{
  Student: "Angel Manzano",
  Subject: "Math",
  Topic: "Algebra",
  Duration: "1 hour",
  Special_Request: "None",
  Date: "December 9, 2020",
  Time: "4:00PM - 5:00PM",
}]

const useStyles = makeStyles(() => ({
  root: {}
}));

const Upcoming = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const className = props.className;
  const rest = props.rest;
  const rows = [];
  const [openJoin, setOpenJoin] = React.useState(false);
  const [openDetails, setOpenDetails] = React.useState(false);
  const confirm = useConfirm();

  props.upcoming.forEach(u => {
    const sessionDate = new Date(u.start_time)
    // if(props.currentDate.getDate() == sessionDate.getDate() && props.currentdate.getMonth() == sessionDate.getMonth()){
    if(props.currentDate.getMonth() == sessionDate.getMonth()){
      if(props.currentDate.getDate() == sessionDate.getDate()){
        rows.push({
          'time':moment(sessionDate).format('h:mm a'),
          'subject':u.subject,
          'tutor':u.tutor,
        })
      }
    }
  })

  const buttonList = [<Button variant='outlined' color='primary' onClick={() => setOpenJoin(true)} startIcon={<CastForEducationIcon/>}>Join</Button>, 
  <Button variant='outlined' color='primary' startIcon={<PageviewIcon/>} onClick={() => setOpenDetails(true)} >View</Button>,
  <Button variant='outlined' color='primary' href='/#/messages' startIcon={<ForumIcon/>}>Chat</Button>,
  <Button variant='outlined' color='secondary' startIcon={<CancelIcon/>}
  onClick={() =>{
    confirm({ title:'Cancel Session' ,description: 'Are you sure you want to cancel this session?' })
      .then(() => {
        Toast.success('Successfully cancelled session!')
      })
      .catch(() => {

      });
  }} 
  >Cancel</Button>,
  ]

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
      style={{height: "100%"}}
    >
      <CardHeader
        title="Upcoming Sessions"
      />
      <Divider />
      {(rows).length != 0 ? 
        <React.Fragment>
          <CardContent>
            <Table tableHeaders={headers} tableRows={rows} tableButtons={buttonList}/>
          </CardContent>
          <ModalJoin open={openJoin} setOpen={setOpenJoin}/>
          <ModalSessionDetails open={openDetails} setOpen={setOpenDetails} details={sessionDetails}/> 
        </React.Fragment>
      :
        <React.Fragment>
          <Box m={12}>
            <Typography variant='h3' align='center'>
              No upcoming sessions
            </Typography>
            <Typography variant='h3' align='center'>
              on {moment(props.currentDate).format('MMMM Do YYYY')}
            </Typography>
          </Box>
        </React.Fragment>
      }
    </Card>
  );
};

export default Upcoming;
