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
  } from '@material-ui/core';
  
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';
import { useConfirm } from 'material-ui-confirm';
import ModalJoin from './ModalJoin';

import toast, {Toaster} from 'react-hot-toast';

import { post_api } from 'src/Api'


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

const ModalTutorProfile = ({open, setOpen, files, className, ...rest }) => {
  const classes = useStyles();
  const [extendMins, setExtendMins] =  React.useState(false);
  const [extendHour, setExtendHour] =  React.useState(false);
  const [endSession, setEndSession] =  React.useState(false);
  const confirm = useConfirm();
  const [openJoin, setOpenJoin] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
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
          <DialogTitle onClose={handleClose} id="alert-dialog-title" className={classes.dialogTitle}>{"Upload Recording"}</DialogTitle>
          <DialogContent className={classes.dialogStyle}>
          
            <Box align='center' mt={2}>
              <Typography variant="h4" align="center" mb={2}>
                Enjoy your session! After the session, don't forget to upload the recording here:
              </Typography>
            </Box>

            <Box py={6}>
              
              <Grid container spacing={2} 
                alignItems="center"
                justify="center"
                style={{placeItems: 'center', textAlign: 'center'}}>
                {/* <Grid
                  item
                  lg={4}
                  md={4}
                  xl={4}
                  xs={12}
                  alignItems="center"
                  justify="center"
                  style={{placeItems: 'center'}}
                  className={classes.buttonContainer}
                >
                  <Button className={ !extendMins? classes.choicesBtn : classes.selectedBtn} onClick={()=>buttonClick('extendMins') } variant="outlined">
                    Extend 30 Minutes
                  </Button>
                </Grid> */}
                <Grid
                  item
                  lg={12}
                  md={12}
                  xl={12}
                  xs={12}
                >
                  
                  <Button className={classes.choicesBtn} target="_blank" href={files} variant="outlined">
                    Upload Recording
                  </Button>
                </Grid>
                {/* <Grid
                  item
                  lg={6}
                  md={6}
                  xl={6}
                  xs={12}
                >
                  <FormControlLabel value="20 hours P9,000" control={<Radio color="primary" />} label="20 hours P9,000" />
                  <Button className={ !endSession? classes.exitBtn : classes.selectExitBtn} onClick={()=>buttonClick('endSession') } variant="outlined">
                    End
                  </Button>
                </Grid> */}
              </Grid>
            </Box>
            
            {/* <Box my={5}>
              <Typography variant="body1" align="center" >
              Extending the session by 1 hour means you agree on paying 1 credit to book another request at the end of this session.
              </Typography>
            </Box> */}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
                Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
                Done
            </Button>
          </DialogActions>
          <ModalJoin open={openJoin} setOpen={setOpenJoin}/>
      </Dialog>
      <Toaster/>
      
    </React.Fragment>
  );
};

ModalTutorProfile.propTypes = {
  className: PropTypes.string
};

export default ModalTutorProfile;
