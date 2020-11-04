import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  makeStyles,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';

const useStyles = makeStyles(({
  root: {}
}));

const SavedPayMethod = ({ className, ...rest }) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    password: '',
    confirm: ''
  });

  const [open, setOpen] = React.useState(false);

  const [passConfirmed, setPassConfirmed] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePassSubmit = () =>{
    setPassConfirmed(true);
    setOpen(false);

  }

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Card>
        <CardHeader
         
          title="Payment Method/s"
        />
        <Divider />
        <CardContent>
        {!passConfirmed ? 
          <React.Fragment>
          <Typography
            color="textPrimary"
            gutterBottom
            variant="subtitle1"
          >
            Bank: BDO
          </Typography>
          <Typography
            color="textPrimary"
            gutterBottom
            variant="subtitle1"
          >
            Credit Card #: **** **** **** 1234
          </Typography>
          </React.Fragment>
          :
          <React.Fragment>
          <TextField
            fullWidth
            label="Password"
            margin="normal"
            name="password"
            onChange={handleChange}
            type="password"
            value={values.password}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Confirm password"
            margin="normal"
            name="confirm"
            onChange={handleChange}
            type="password"
            value={values.confirm}
            variant="outlined"
          />
          </React.Fragment>
          }
        </CardContent>
        <Divider />
        <Box
          display="flex"
          justifyContent="flex-end"
          p={2}
        >
          <Button
            color="primary"
            variant="contained"
            onClick={handleClickOpen}
          >
            Edit
          </Button>

          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Edit Payment Method/s</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Input your password to continue editing your payment details
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Password"
                type="password"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handlePassSubmit} color="primary">
                Done
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Card>
    </form>
  );
};

SavedPayMethod.propTypes = {
  className: PropTypes.string
};

export default SavedPayMethod;
