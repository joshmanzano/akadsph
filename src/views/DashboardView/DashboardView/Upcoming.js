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
  const [openJoin, setOpenJoin] = React.useState(false);
  const [openDetails, setOpenDetails] = React.useState(false);
  const confirm = useConfirm();

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
    >
      <CardHeader
        title="Upcoming Sessions"
      />
      <Divider />
      {(props.rows).length != 0 ? 
        <React.Fragment>
          <CardContent>
            <Table tableHeaders={headers} tableRows={props.rows} tableButtons={buttonList}/>
          </CardContent>
          <ModalJoin open={openJoin} setOpen={setOpenJoin}/>
          <ModalSessionDetails open={openDetails} setOpen={setOpenDetails} details={sessionDetails}/> 
        </React.Fragment>
      :
        <React.Fragment>
          <Box m={6}>
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
