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
import Calendar from 'react-calendar'
// import Table from './Table' 
import Table from 'src/components/Table.js' 
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

const buttonList = [<Button variant='outlined' color='primary' /*onClick={handleClickOpen}*/ startIcon={<CastForEducationIcon/>}>Join</Button>, 
<Button variant='outlined' color='primary' startIcon={<PageviewIcon/>} /*onClick={() => setOpenSessionDets(true)}*/>View</Button>,
<Button variant='outlined' color='primary' href='/#/messages' startIcon={<ForumIcon/>}>Chat</Button>,
]

const useStyles = makeStyles(() => ({
  root: {}
}));

const Upcoming = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const className = props.className;
  const rest = props.rest;

  const buttonSetup=()=>{
    return(
    <React.Fragment>
      {/* <TableCell> */}
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <Button variant='outlined' color='primary' /*onClick={handleClickOpen}*/ startIcon={<CastForEducationIcon/>}>Join</Button>
            </Grid>
            {/* <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
              
              >
                <DialogTitle onClose={handleClose} id="alert-dialog-title" className={classes.dialogTitle}>{""}</DialogTitle>
                <DialogContent>
                  <Box align='center' mb={2}>
                  <img width='100' src='../static/images/oli-happy.png'></img>
                  </Box>
                  <DialogContentText id="alert-dialog-description" align='center'>
                    Your tutorial session is about to start!<br/>Join the call now.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={handleClose} color="primary" autoFocus>
                    Join Session
                  </Button>
                </DialogActions>
            </Dialog> */}
            <Grid item xs={4}>
              <Button variant='outlined' color='primary' startIcon={<PageviewIcon/>} /*onClick={() => setOpenSessionDets(true)}*/>View</Button>
              {/* <ModalSessionDetails open={openSessionDets} setOpen={setOpenSessionDets}/> */}
            </Grid>
            <Grid item xs={4}>
              <Button variant='outlined' color='primary' href='/#/messages' startIcon={<ForumIcon/>}>Chat</Button>
            </Grid>
          </Grid>
          
      {/* </TableCell> */}
    </React.Fragment>
    );
  }


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
