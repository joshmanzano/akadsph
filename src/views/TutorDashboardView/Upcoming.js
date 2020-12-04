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
  Button,
  Box,
  Typography,
} from '@material-ui/core';
import Table from 'src/components/Table.js' 
import moment from 'moment';
import ModalSessionDetails from 'src/components/ModalSessionDetails.js';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import ForumIcon from '@material-ui/icons/Forum';
import PageviewIcon from '@material-ui/icons/Pageview';
import { useConfirm } from 'material-ui-confirm';
import ModalZoomStart from 'src/components/ModalZoomStart.js';

const rows = [
  {
    date: 'Dec 7',
    time: '4 PM',
    subject: 'Math',
    student: 'Angel Manzano',
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

const useStyles = makeStyles(() => ({
  root: {}
}));

const Sales = ({ className, currentDate, setUpcoming, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [openDetails, setOpenDetails] = React.useState(false);
  const confirm = useConfirm();
  const [openZoom, setOpenZoom] = React.useState(false);

  const buttonList = [ 
  <Button variant='outlined' color='primary' startIcon={<PageviewIcon/>} onClick={() => setOpenDetails(true)} >View</Button>,
  <Button variant='outlined' color='primary' href='/#/messages' startIcon={<ForumIcon/>}>Chat</Button>,
  <Button variant='outlined' color='primary' onClick={() =>{
    confirm({ title:'Start Session' ,description: 'Would you like to start the session?' })
      .then(() => {
        setOpenZoom(true);
      })
      .catch(() => {

      });

  }} 
  startIcon={<CastForEducationIcon/>}>Start</Button>
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
      {/* {(rows).length != 0 ?  */}
      {setUpcoming ?
        <React.Fragment>
          <CardContent>
            <Table tableHeaders={headers} tableRows={rows} tableButtons={buttonList}/>
          </CardContent>
          <ModalSessionDetails open={openDetails} setOpen={setOpenDetails} /*details={sessionDetails}*//> 
          <ModalZoomStart open={openZoom} setOpen={setOpenZoom}/>
        </React.Fragment>
      :
        <React.Fragment>
          <Box m={6}>
            <Typography variant='h3' align='center'>
              No upcoming sessions 
            </Typography>
            <Typography variant='h3' align='center'>
              on {moment(currentDate).format('MMMM Do YYYY')}
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
