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
import ModalReschedule from './CancelPrompt';
import CancelIcon from '@material-ui/icons/Cancel';
import { useConfirm } from 'material-ui-confirm';
import moment from 'moment';

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
  const [openCancel, setOpenCancel] = React.useState(false);
  const [join_url, setJoinURL] = React.useState('https://google.com');
  const [session_id, setSession] = React.useState(null);
  const [duration, setDuration] = React.useState(null);
  const confirm = useConfirm();

  const join_session = (url, session_id) => {
    setJoinURL(url)
    setSession(session_id)
    setOpenJoin(true)
  }

  props.upcoming.forEach(u => {
    const sessionDate = new Date(u.start_time)
    // if(props.currentDate.getDate() == sessionDate.getDate() && props.currentdate.getMonth() == sessionDate.getMonth()){
    if(props.currentDate.getMonth() == sessionDate.getMonth()){
      if(props.currentDate.getDate() == sessionDate.getDate()){
        console.log(u)
        rows.push({
          'time':moment(sessionDate).format('h:mm a'),
          'subject':u.subject,
          'tutor':u.tutor,
          'join_button':<Button variant='outlined' color='primary' onClick={() => join_session(u.meet_link, u.id)} startIcon={<CastForEducationIcon/>}>Join</Button>,
          // 'view_button': <Button variant='outlined' color='primary' startIcon={<PageviewIcon/>} onClick={() => setOpenDetails(true)} >View</Button>,
          'view_button': <Button variant='outlined' color='primary' startIcon={<PageviewIcon/>} href={u.files} target="_blank">Files</Button>,
          'chat_button': <Button variant='outlined' color='primary' href='/messages' startIcon={<ForumIcon/>}>Chat</Button>,
          'cancel_button': <Button variant='outlined' color='secondary' startIcon={<CancelIcon/>}
          onClick={() =>{
            setSession(u.id)
            setDuration(u.duration)
            setOpenCancel(true)
          }} 
          >Cancel</Button>,
        })
      }
    }
  })

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
            <Table tableHeaders={headers} tableRows={rows}/>
          </CardContent>
          <ModalJoin open={openJoin} join_url={join_url} session_id={session_id} duration={1} setOpen={setOpenJoin}/>
          <ModalSessionDetails open={openDetails} setOpen={setOpenDetails} details={sessionDetails}/> 
          <ModalReschedule open={openCancel} setOpen={setOpenCancel} duration={duration} session_id={session_id}/> 
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
