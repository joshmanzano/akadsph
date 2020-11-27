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

const ModalRequest = ({open, setOpen, setOpenConf, className, ...rest }) => {
  const classes = useStyles();
  // const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
    setOpenConf(true);
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
          <RequestSummary/>
          <Typography variant="body1" mb={2}  mt={3}>
            Special Request: None
          </Typography>
          <Box style={{textAlign:"center"}} mb={2}>
          <FormControl component="fieldset" >
            <FormLabel component="legend">Available Schedule</FormLabel>
            <RadioGroup aria-label="sched-date" name="sched-date">
              <FormControlLabel value="12/01/20" control={<Radio />} label="December 1 2:00-4:00PM" />
              <FormControlLabel value="12/02/20" control={<Radio />} label="December 2 1:00-3:00PM" />
              <FormControlLabel value="12/03/20" control={<Radio />} label="December 3 4:00-6:00PM" />
            </RadioGroup>
          </FormControl>
          </Box>
          
          <Grid container style={{textAlign:"center"}}>
          <Grid
            item
            lg={4}
            md={4}
            xl={4}
            xs={0}
          >
          </Grid>
          <Grid
            item
            lg={4}
            md={4}
            xl={4}
            xs={12}
          >
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
          <Grid
            item
            lg={4}
            md={4}
            xl={4}
            xs={0}
          >
          </Grid>
          </Grid>
 
        </DialogContent>
        
        
        <DialogActions>
          <Button onClick={handleClose} color="primary">
              Decline
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
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
