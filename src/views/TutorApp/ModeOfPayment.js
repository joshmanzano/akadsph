import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  makeStyles,
  Typography,
  Grid,
  Container,
  Select,
  FormControl,
  InputLabel,
  CardHeader,
  Divider,
} from '@material-ui/core';
import PublishIcon from '@material-ui/icons/Publish';
import { Search as SearchIcon } from 'react-feather';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import CssBaseline from '@material-ui/core/CssBaseline';
import {DropzoneArea} from 'material-ui-dropzone'

const useStyles = makeStyles((theme) => ({
  root: {},
  importButton: {
    // marginRight: theme.spacing(1)
  },
  exportButton: {
    // marginRight: theme.spacing(1)
  },
  bundleButton: {
    minWidth: "30vh",
    paddingTop: "7%",
    paddingBottom: "7%",
  },
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const Biodata = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      {/* <Typography variant="h4" align='center'>
            Tutoring Details
      </Typography> */}
      <Box mx={4}>
      <Grid container spacing={3} >
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            <Typography variant="h3">
              Mode of Payment
            </Typography>
          </Grid> 
          <Grid
            item
            lg={6}
            md={6}
            xl={6}
            xs={12}
          >
            <TextField id="outlined-basic" label="Bank Name" variant="outlined" fullWidth/>
          </Grid> 
          <Grid
            item
            lg={6}
            md={6}
            xl={6}
            xs={12}
          >
            <TextField id="outlined-basic" label="Bank Account Number" variant="outlined" fullWidth/>
          </Grid> 
          <Grid
            item
            lg={6}
            md={6}
            xl={6}
            xs={12}
          >
            <TextField id="outlined-basic" label="Bank Account Name" variant="outlined" fullWidth/>
          </Grid> 
          <Grid
            item
            lg={6}
            md={6}
            xl={6}
            xs={12}
          >
            <FormControl component="fieldset">
              <FormLabel component="legend">Bank Account Type</FormLabel>
              <RadioGroup row name="bank-account-type">
                <FormControlLabel value="checkings" control={<Radio />} label="Checkings Account" />
                <FormControlLabel value="savings" control={<Radio />} label="Savings Account" />
                
              </RadioGroup>
            </FormControl>
          </Grid> 
          
        </Grid>


      </Box>
    </div>
  );
};

Biodata.propTypes = {
  className: PropTypes.string
};

export default Biodata;
