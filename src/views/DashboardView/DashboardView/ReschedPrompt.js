import React from 'react';
import PropTypes from 'prop-types';
import {
  Divider,
  makeStyles,
  colors,
  Grid,
  Button,
  Box,
  Typography, 
  IconButton,
  TextField
} from '@material-ui/core';
import {
    Dialog,
    DialogActions,
    DialogContent,
  } from '@material-ui/core';
  
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';
import { useConfirm } from 'material-ui-confirm';
import ModalJoin from './ModalJoin';

import toast, {Toaster} from 'react-hot-toast';

import Toast from 'light-toast';

import { get_user, post_api } from 'src/Api'
import Calendar from './ReschedCalendar';
import moment from 'moment';


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%'
  },
  avatar: {
    backgroundColor: colors.red[600],
    height: 56,
    width: 56
  },
  differenceIcon: {
    color: colors.red[900]
  },
  differenceValue: {
    color: colors.red[900],
    marginRight: theme.spacing(1)
  },
  closeButton: {
    float:'right', marginTop: '5px'

  },
  dialogTitle:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '4px 2px 5px 20px',
  },
  dialogStyle:{
    minWidth: "60vh",
  },
  iconFilled: {
    color: '#ff6d75',
  },
  iconHover: {
    color: '#ff3d47',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  choicesBtn: {
    width: "17vh",
    height: "17vh",
    borderRadius: 15,
    // boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    border: '2px solid #75c2b7',
    "&:hover": {
      backgroundColor: '#75c2b7',
      color: 'white !important',
    }
  },
  selectedBtn: {
    width: "17vh",
    height: "17vh",
    borderRadius: 15,
    // boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    border: '2px solid #75c2b7',
    backgroundColor: '#75c2b7',
    color: 'white',
  },
  exitBtn: {
    width: "17vh",
    height: "17vh",
    borderRadius: 15,
    // boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    border: '2px solid #EB5531',
    color: '#EB5531',
    "&:hover": {
      backgroundColor: '#EB5531',
      color: 'white !important',
    }
  },
  selectExitBtn: {
    width: "17vh",
    height: "17vh",
    borderRadius: 15,
    // boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    border: '2px solid #EB5531',
    backgroundColor: '#EB5531',
    color: 'white',
  },
}));

const ModalTutorProfile = ({open, setOpen, session_id, duration, className, ...rest }) => {
  const classes = useStyles();
  const [extendMins, setExtendMins] =  React.useState(false);
  const [extendHour, setExtendHour] =  React.useState(false);
  const [endSession, setEndSession] =  React.useState(false);
  const confirm = useConfirm();
  const [openJoin, setOpenJoin] = React.useState(false);
  const [reason, setReason] = React.useState('Time conflict');
  const [day, setDay] = React.useState(null);
  const [times, setTimes] = React.useState({
  });
  let [,setState] = React.useState();

  function buttonClick(type){
 
  }

  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  const changeFrom = (index, value) => {
    if(!(index in times)){
      times[index] = {}
    }
    console.log(index)
    times[index]['from'] = value;
    const untilTime = new Date();
    const splitTime = value.split(':')
    let hours = Number(splitTime[0])
    let minutes = splitTime[1]
    untilTime.setHours(hours + duration)
    hours = untilTime.getHours()
    if(hours < 10){
      hours = '0' + String(hours)
    }
    console.log(hours)
    console.log(minutes)
    times[index]['until'] = hours + ':' + minutes;
    // setUntil(times[index]['until'])
    console.log(times)
    setTimes(times)
    setState({})
  }

  const DialogTitle = withStyles(useStyles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <React.Fragment>
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
          <Typography variant="h4">{children}</Typography>
          {onClose ? (
            <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
              <CloseIcon />
            </IconButton>
          ) : null}
        </MuiDialogTitle>
        <Divider/>
        <br/>
        <ModalJoin open={openJoin} setOpen={setOpenJoin}/>
      </React.Fragment>
    );
  });

  return (
    <React.Fragment>
      <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth={true}
      maxWidth={'sm'}
      >
          <DialogTitle onClose={handleClose} id="alert-dialog-title" className={classes.dialogTitle}>{"Rescheduling of Session"}</DialogTitle>
          <DialogContent className={classes.dialogStyle}>
          
            <Box align='center' mb={4} >
              <Typography variant="h4" align="center" mb={2}>
                Pick a date to reschedule to:
              </Typography>
            </Box>

            <Box mb={4}>
              
              <Grid container spacing={2} 
                alignItems="center"
                justify="center"
                style={{placeItems: 'center', textAlign: 'center'}}>
                <Grid
                  item
                  lg={6}
                  md={6}
                  xl={6}
                  xs={12}
                >
                  
                  <Calendar setDay={setDay}/>
                </Grid>
                <Grid
                  item
                  lg={6}
                  md={6}
                  xl={6}
                  xs={12}
                >
                  {day != null && 
                    <Grid
                    item
                    lg={12}
                    md={12}
                    xl={12}
                    xs={12}
                    > 
                      <Grid container spacing={2}>
                        <Grid 
                          item 
                          xs={12}>
                            {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                  disableToolbar
                                  variant="inline"
                                  format="MM/dd/yyyy"
                                  margin="normal"
                                  id="date-picker-inline"
                                  label="Date"
                                  value="11/20/2020"
                                  // onChange={handleDateChange}
                                  KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                  }}
                                />
                            </MuiPickersUtilsProvider> */}
                          <form className={classes.container} noValidate>
                            <TextField
                              id="date"
                              label="Date"
                              type="date"
                              format="MM/dd/yyyy"
                              onClick={(e) => e.stopPropagation()}
                              // defaultValue="2017-05-24"
                              //day.toLocaleDateString()
                              value={moment(day).format('YYYY-MM-DD')}
                              className={classes.textField}
                              InputLabelProps={{
                                shrink: true,
                                readOnly: true,
                              }}
                
                            />
                          </form>
                        </Grid>
                        <Grid 
                          item 
                          xs={12}>
                            <form className={classes.container} noValidate>
                              <TextField
                                id="time"
                                label="From"
                                type="time"
                                // defaultValue="07:30"
                                className={classes.textField}
                                InputLabelProps={{
                                  shrink: true,
                                }}
                                inputProps={{
                                  step: 300, // 5 min
                                }}
                                value={times[day.getTime()] != undefined ? times[day.getTime()]['from'] : null}
                                onChange={(event) => changeFrom(day.getTime(), event.target.value)}
                              />
                            </form>
                          {/* <Typography variant="h5" >
                            From: <input type="time"></input>
                          </Typography> */}
                        </Grid>
                        <Grid 
                          item 
                          xs={12}>
                          <form className={classes.container} noValidate>
                              <TextField
                                id="time"
                                label="Until"
                                type="time"
                                // defaultValue="07:30"
                                className={classes.textField}
                                value={times[day.getTime()] != undefined ? times[day.getTime()]['until'] : null}
                                // value={until}
                                InputLabelProps={{
                                  shrink: true,
                                }}
                                inputProps={{
                                  readOnly: true,
                                }}
                                // onChange={(event) => changeUntil(day.getTime(), event.target.value)}
                              />
                            </form>
                        </Grid>
                      </Grid>
                      
                    </Grid>
                  }
                </Grid>
              </Grid>
            </Box>

            <Box align='center' mb={4}>
            </Box>
            
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
                Cancel
            </Button>
            <Button onClick={() => {
            confirm({ title:'Reschedule Session' ,description: 'Reschedule session to ' + moment().format('MMMM Do YYYY, h:mm:ss a') + '?' })
            .then(() => {
              Toast.loading('Rescheduling session...')
              // get_user(user => {
              //   const payload = {
              //     'parent_id': user.id,
              //     'session_id': session_id,
              //     'reason': 'Time conflict' 
              //   }
              //   post_api('parent-cancel-session', payload, (res) => {
              //     console.log(res)
              //     window.location.reload()
              //   })    
              // })
            })
            .catch(() => {

            });
            }} color="primary">
                Done
            </Button>
          </DialogActions>
      </Dialog>
      <Toaster/>
      
    </React.Fragment>
  );
};

ModalTutorProfile.propTypes = {
  className: PropTypes.string
};

export default ModalTutorProfile;
