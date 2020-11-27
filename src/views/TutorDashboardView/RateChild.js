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
  
import MuiDialogTitle from '@material-ui/core/DialogTitle';
  
import CloseIcon from '@material-ui/icons/Close';

import { withStyles } from '@material-ui/core/styles';

import Rating from '@material-ui/lab/Rating';

import Avatar from '@material-ui/core/Avatar';
import StarIcon from '@material-ui/icons/Star';

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
  rootRate: {
    // width: 200,
    display: 'flex',
  },
}));

const RateChild = ({open, setOpen, className, ...rest }) => {
  const classes = useStyles();
  // const [open, setOpen] = React.useState(false);


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
    
    >
        <DialogTitle onClose={handleClose} id="alert-dialog-title" className={classes.dialogTitle}>{"Rate Tutee"}</DialogTitle>
        <DialogContent className={classes.dialogStyle}>
        
          <DialogContentText id="alert-dialog-description" align='center'>
              How was the session?
          </DialogContentText>
          <Box align='center' mb={2} >
            <Avatar>CS</Avatar>
          </Box>
          
          <Typography variant="h4" align="center" mb={5}>
            Nate Merchado
          </Typography>
          <Box mb={3} align='center' size="large">
            <Rating
              size="large"
              name="tutor-rate"
              defaultValue={0}
              precision={0.5}
              fontsize="large"
              icon={<StarIcon size="large" />}
            />
          </Box>

          <TextField 
            id="comments" 
            label="Comments" 
            variant="outlined" fullWidth
            multiline
            rows={4}
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
              Report
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
              Finish
          </Button>
        </DialogActions>
    </Dialog>
  );
};

RateChild.propTypes = {
  className: PropTypes.string
};

export default RateChild;
