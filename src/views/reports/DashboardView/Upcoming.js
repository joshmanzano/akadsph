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
  Typography
} from '@material-ui/core';
// import Table from './Table' 
import Table from 'src/components/Table.js'; 
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import ForumIcon from '@material-ui/icons/Forum';
import PageviewIcon from '@material-ui/icons/Pageview';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  // DialogTitle,
} from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';

import CloseIcon from '@material-ui/icons/Close';
import TableCell from '@material-ui/core/TableCell';
import ModalJoin from './ModalJoin';
import ModalSessionDetails from 'src/components/ModalSessionDetails.js';

const rows = [
  {
    time: '4 PM',
    subject: 'Filipino',
    tutor: 'Adrienne Soliven',
  },
  {
    time: '4 PM',
    subject: 'Math',
    tutor: 'Adrienne Soliven',
  },
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
  Student: "Rolo Pena",
  Subject: "Math",
  Topic: "Algebra",
  Duration: "1 hour",
  Special_Request: "None",
  Date: "December 9, 2020",
  Time: "2:00PM - 3:00PM",
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


  const buttonList = [<Button variant='outlined' color='primary' onClick={() => setOpenJoin(true)} startIcon={<CastForEducationIcon/>}>Join</Button>, 
  <Button variant='outlined' color='primary' startIcon={<PageviewIcon/>} onClick={() => setOpenDetails(true)} >View</Button>,
  <Button variant='outlined' color='primary' href='/#/messages' startIcon={<ForumIcon/>}>Chat</Button>,
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

export default Upcoming;
