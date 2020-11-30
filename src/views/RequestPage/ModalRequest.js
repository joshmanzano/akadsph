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
  TextField,
  InputAdornment,
  Snackbar,
  Typography, 
  IconButton,
} from '@material-ui/core';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    // DialogTitle,
  } from '@material-ui/core';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
  
import MuiDialogTitle from '@material-ui/core/DialogTitle';
  
import CloseIcon from '@material-ui/icons/Close';

import { withStyles } from '@material-ui/core/styles';

import RequestSummary from './RequestSummary';

import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';


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
    minWidth: "100vh",
  },
}));

const ModalRequest = ({open, setOpen, setOpenConf, rows, className, ...rest }) => {
  const classes = useStyles();
  // const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  const handleAccept = () => {
    setOpen(false);
    setOpenConf(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

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
      </React.Fragment>
    );
  });

  const onChange = (event) => {
    console.log(event.target.value)
  }

  return (
    <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
    className={classes.dialogStyle}
    fullWidth={true}
    maxWidth={'md'}
    >
        <DialogTitle onClose={handleClose} id="alert-dialog-title" className={classes.dialogTitle}>{"Session Request"}</DialogTitle>
        <DialogContent >
          {/* <RequestSummary rows={rows}/> */}
          {/* <Typography variant="body1" mb={2}  mt={3}>
            Special Request: None
          </Typography> */}
          <Grid container>
            <Grid item xs={8}>

            <Box mx={8}>
            <Grid container spacing={2}>
              <Grid
                item
                lg={6}
                md={6}
                xl={6}
                xs={6}
              >
                <Typography variant='h6' align='left' style={{fontWeight: 'bold'}}>
                  Parent
                </Typography>
              </Grid>
              <Grid
                item
                lg={6}
                md={6}
                xl={6}
                xs={6}
              >
                <Typography variant='h6' align='right'>
                  Joshua Manzano
                </Typography>
              </Grid>
              <Grid
                item
                lg={6}
                md={6}
                xl={6}
                xs={6}
              >
                <Typography variant='h6' align='left' style={{fontWeight: 'bold'}}>
                  Student
                </Typography>
              </Grid>
              <Grid
                item
                lg={6}
                md={6}
                xl={6}
                xs={6}
              >
                <Typography variant='h6' align='right'>
                  Rolo Pena
                </Typography>
              </Grid>
              <Grid
                item
                lg={6}
                md={6}
                xl={6}
                xs={6}
              >
                <Typography variant='h6' align='left' style={{fontWeight: 'bold'}}>
                  Subject
                </Typography>
              </Grid>
              <Grid
                item
                lg={6}
                md={6}
                xl={6}
                xs={6}
              >
                <Typography variant='h6' align='right'>
                  Math
                </Typography>
              </Grid>
              <Grid
                item
                lg={6}
                md={6}
                xl={6}
                xs={6}
              >
                <Typography variant='h6' align='left' style={{fontWeight: 'bold'}}>
                  Topic
                </Typography>
              </Grid>
              <Grid
                item
                lg={6}
                md={6}
                xl={6}
                xs={6}
              >
                <Typography variant='h6' align='right'>
                  Algebra
                </Typography>
              </Grid>
              <Grid
                item
                lg={6}
                md={6}
                xl={6}
                xs={6}
              >
                <Typography variant='h6' align='left' style={{fontWeight: 'bold'}}>
                  Duration
                </Typography>
              </Grid>
              <Grid
                item
                lg={6}
                md={6}
                xl={6}
                xs={6}
              >
                <Typography variant='h6' align='right'>
                  1 hour
                </Typography>
              </Grid>
              <Grid
                item
                lg={6}
                md={6}
                xl={6}
                xs={6}
              >
                <Typography variant='h6' align='left' style={{fontWeight: 'bold'}}>
                  Special Request
                </Typography>
              </Grid>
              <Grid
                item
                lg={6}
                md={6}
                xl={6}
                xs={6}
              >
                <Typography variant='h6' align='right'>
                  None
                </Typography>
              </Grid>
            </Grid>
          </Box>

            </Grid>
            <Grid item xs={4}>

            <FormControl onChange={onChange} component="fieldset" >
              <FormLabel component="legend">Available Schedules</FormLabel>
              <RadioGroup aria-label="sched-date" name="sched-date">
                <FormControlLabel value="1" control={<Radio />} label="December 1st, 2:00PM - 4:00PM" />
                <FormControlLabel value="2" control={<Radio />} label="December 2nd, 1:00PM - 3:00PM" />
                <FormControlLabel value="3" control={<Radio />} label="December 3rd, 4:00PM - 6:00PM" />
              </RadioGroup>
            </FormControl>
              <FormControl variant="outlined" fullWidth>
                <InputLabel id="demo-simple-select-outlined-label">Start Time</InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  
                  label="Start Time"
                >
                  <MenuItem value={"14:00"}>2:00PM</MenuItem>
                  <MenuItem value={"14:30"}>2:30PM</MenuItem>
                  <MenuItem value={"15:00"}>3:00PM</MenuItem>
            
                </Select>
              </FormControl>

            </Grid>
          </Grid>
 
        </DialogContent>
        
        
        <DialogActions>
          <Button onClick={handleCancel} color="primary">
              Cancel
          </Button>
          <Button onClick={handleAccept} color="primary" autoFocus>
              Accept
          </Button>
        </DialogActions>
    </Dialog>
  );
};

ModalRequest.propTypes = {
  className: PropTypes.string
};

export default ModalRequest;
