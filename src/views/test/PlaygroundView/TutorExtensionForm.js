import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Divider,
  useTheme,
  makeStyles,
  colors,
  Grid,
  Button,
  Box,
  Container,
  TextField,
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
  
import MuiDialogTitle from '@material-ui/core/DialogTitle';
  
import CloseIcon from '@material-ui/icons/Close';

import { withStyles } from '@material-ui/core/styles';

import Rating from '@material-ui/lab/Rating';

import Avatar from '@material-ui/core/Avatar';
import StarIcon from '@material-ui/icons/Star';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

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

const TutorExtensionForm = ({open, setOpen, className, ...rest }) => {
  const classes = useStyles();
  const [accept, setAccept] =  React.useState(false);
  const [decline, setDecline] =  React.useState(false);
 

  function buttonClick(type){
 
    if(type == 'accept'){
      setAccept(true);
      setDecline(false);
    }else if(type == 'decline'){
      setAccept(false);
      setDecline(true);
    }

  }

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
      </React.Fragment>
    );
  });

  return (
    <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
    fullWidth={true}
    maxWidth={'sm'}
    >
        <DialogTitle onClose={handleClose} id="alert-dialog-title" className={classes.dialogTitle}>{"Session Extension"}</DialogTitle>
        <DialogContent className={classes.dialogStyle}>
        
          <Box align='center' mb={3} >
            <Typography variant="h5" align="center" mb={2}>
              The parent wants to extend the session by 1 hour.
            </Typography>
          </Box>

          <Box py={6}>
            
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
                alignItems="center"
                justify="center"
                style={{placeItems: 'center'}}
                className={classes.buttonContainer}
              >
                <Button className={ !accept? classes.choicesBtn : classes.selectedBtn} onClick={()=>buttonClick('accept') } variant="outlined">
                  Accept
                </Button>
              </Grid>
              <Grid
                item
                lg={6}
                md={6}
                xl={6}
                xs={12}
              >
                {/* <FormControlLabel value="20 hours P9,000" control={<Radio color="primary" />} label="20 hours P9,000" /> */}
                <Button className={ !decline? classes.exitBtn : classes.selectExitBtn} onClick={()=>buttonClick('decline') } variant="outlined">
                  Decline
                </Button>
              </Grid>
            </Grid>
          </Box>
          
          <Box my={5}>
            <Typography variant="body1" align="center" >
              Accepting the extension will bring you directly to the video call.
            </Typography>
          </Box>
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose} color="primary">
              Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
              Done
          </Button>
        </DialogActions> */}
    </Dialog>
  );
};

TutorExtensionForm.propTypes = {
  className: PropTypes.string
};

export default TutorExtensionForm;
