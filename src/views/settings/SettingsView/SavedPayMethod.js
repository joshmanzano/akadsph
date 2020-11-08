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
  Select,
  FormControl,
  InputLabel,
  Grid,
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
    setPassConfirmed(!passConfirmed);
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
          title="Payment Details"
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
          </React.Fragment>
          :
          <React.Fragment>
            <CardContent>
            <Grid container spacing={2}>
              <Grid
                item
                lg={4}
                md={4}
                xl={4}
                xs={12}
              >
                <FormControl variant="outlined" className={classes.formControl} style={{justifyContent: 'center', placeItems: 'center'}}>
                  <InputLabel>Pay Through</InputLabel>
                  <Select
                    fullWidth
                    native

                    label="Pay Through"
                    inputProps={{
                      name: 'payment-method',
                      id: 'payment-method',
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={10}>Credit Cards  </option>
                    <option value={20}>Bank Transfers    </option>
                    <option value={20}>Gcash </option>
                    <option value={20}>Grab Pay  </option>
                  
                  </Select>
                </FormControl>
              </Grid>
              <Grid
                item
                lg={4}
                md={4}
                xl={4}
                xs={12}
              >
                <FormControl variant="outlined" className={classes.formControl} style={{justifyContent: 'center', placeItems: 'center'}}>
                  <InputLabel>Banks</InputLabel>
                  <Select
                    fullWidth
                    native

                    label="Choose Bank"
                    inputProps={{
                      name: 'choose-bank',
                      id: 'choose-bank',
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={10}>BDO</option>
                    <option value={20}>BPI</option>
                    <option value={20}>RCBC</option>
                    <option value={20}>Metrobank</option>
                  
                  </Select>
                </FormControl>
              </Grid>
              <Grid
                item
                lg={4}
                md={4}
                xl={4}
                xs={12}
              >
                <TextField
                  label="Credit Card #"
                  margin="normal"
                  name="ccno"
                  onChange={handleChange}
                  type="password"
                  value={values.confirm}
                  variant="outlined"
                />
              </Grid>
            </Grid>
              
              
            {/* <TextField
              fullWidth
              label="Password"
              margin="normal"
              name="password"
              onChange={handleChange}
              type="password"
              value={values.password}
              variant="outlined"
            /> */}
            
              <Box
              display="flex"
              justifyContent="flex-end"
              p={2}
              >
                <Button
                  color="primary"
                  variant="contained"
                  onClick={handlePassSubmit}
                >
                  Update
                </Button>
              </Box>
            </CardContent>
          </React.Fragment>   
          }
        </CardContent>
        <Divider />
        
      </Card>
    </form>
  );
};

SavedPayMethod.propTypes = {
  className: PropTypes.string
};

export default SavedPayMethod;
