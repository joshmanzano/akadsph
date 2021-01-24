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
} from '@material-ui/core';
import {
    Dialog,
    DialogActions,
    DialogContent,
    // DialogTitle,
  } from '@material-ui/core';

  
import MuiDialogTitle from '@material-ui/core/DialogTitle';
  
import CloseIcon from '@material-ui/icons/Close';

import { withStyles } from '@material-ui/core/styles';

import { post_api, get_user } from 'src/Api.js';
import Toast from 'light-toast';

import LoadingBack from 'src/components/loadingBack';


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
}));

const ModalConfRequest = ({open, setOpen, info, removeRequest, schedule, className, ...rest }) => {
  const classes = useStyles();
  const [processing, setProcessing] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleConfirm = () => {
    get_user((user) => {
      const id = user.id;
      const data = {
        'request_id': info.id,
        'available_day_id': schedule,
        'tutor_id': id,
        'start_date_time': info.availableData[schedule].start_date_time
      }
      console.log(data)
      setProcessing(true)
      post_api('tutor-accept-request',data,(res) => {
        console.log(res)
        if(res){
          window.location.replace('/request-accepted')
          window.location.reload()
          removeRequest(info.index)
        }else{
          Toast.fail('Request failed!')
        }
        setOpen(false)
      })
    })
  }
  
  const handleClose = () => {
    setOpen(false);
  };

  const DialogTitle = withStyles(useStyles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <React.Fragment>
         <LoadingBack processing={processing}/>
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
    // fullWidth={true}
    // maxWidth={'md'}
    >
        <DialogTitle onClose={handleClose} id="alert-dialog-title" className={classes.dialogTitle}>{"Session Details Confirmation"}</DialogTitle>
        <DialogContent >
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
                  {info.student}
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
                  {info.subject}
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
                  {info.topic}
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
                  {info.duration}
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
                  {info.specialRequest}
                </Typography>
              </Grid>
            </Grid>
            <Box mt={8} mb={2}>
              <Grid container spacing={2}>
                <Grid
                    item
                    lg={6}
                    md={6}
                    xl={6}
                    xs={6}
                  >
                    <Typography variant='h6' align='left' style={{fontWeight: 'bold'}}>
                      Date
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
                      {info.availableData[schedule].date}
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
                    Time
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
                    {info.availableData[schedule].time}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </DialogContent>
        
        
        <DialogActions>
          <Button onClick={handleClose} color="primary">
              Cancel
          </Button>
          <Button onClick={handleConfirm} color="primary" autoFocus>
              Confirm
          </Button>
        </DialogActions>
    </Dialog>
  );
};

ModalConfRequest.propTypes = {
  className: PropTypes.string
};

export default ModalConfRequest;
