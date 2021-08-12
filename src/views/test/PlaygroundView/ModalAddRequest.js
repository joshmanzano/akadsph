import React, { useEffect } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
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
} from "@material-ui/core";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  // DialogTitle,
} from "@material-ui/core";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import MuiDialogTitle from "@material-ui/core/DialogTitle";

import CloseIcon from "@material-ui/icons/Close";

import { withStyles } from "@material-ui/core/styles";

import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

import OtherParentDets from "src/components/OtherParentDets";
import Chip from "@material-ui/core/Chip";
import Autocomplete from "@material-ui/lab/Autocomplete";
import ChildDetails from "src/views/customer/FindTutorView/ChildDetails";
// import OtherTutorDets from 'src/components/OtherTutorDets';
import Availability from "src/views/customer/FindTutorView/Availability";
// import SpecialRequests from 'src/views/customer/FindTutorView/Special Requests';

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
  },
  avatar: {
    backgroundColor: colors.red[600],
    height: 56,
    width: 56,
  },
  differenceIcon: {
    color: colors.red[900],
  },
  differenceValue: {
    color: colors.red[900],
    marginRight: theme.spacing(1),
  },
  closeButton: {
    float: "right",
    marginTop: "5px",
  },
  dialogTitle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "4px 2px 5px 20px",
  },
  dialogStyle: {
    minWidth: "60vh",
  },
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(1),
    // marginBottom: theme.spacing(3),
    padding: theme.spacing(2),

    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      //   marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
    textAlign: "right",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(0),
  },
  alreadyLink: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginBottom: theme.spacing(6),
    },
  },
}));

const ModalAddParent = ({ props, open, setOpen, className, ...rest }) => {
  const classes = useStyles();
  // const [open, setOpen] = React.useState(false);

  // const [activeStep, setActiveStep] = React.useState(0);
  // const [accountDetails, setAccount] = React.useState();
  // const [childDetails, setChild] = React.useState();
  const subjectselections = ["Math", "English", "Filipino", "Science"];
  // const [promoDetails, setPromo] = React.useState();

  // const steps = ['Account Details', 'Child Details', 'Other Details'];

  // useEffect(() => {
  //   if(activeStep === steps.length){
  //     const data = accountDetails;
  //     data['child'] = childDetails;
  //     props.register(data)
  //   }
  // },[activeStep])

  // function getStepContent(step, props) {
  //   switch (step) {
  //     case 0:
  //       return /*<span>Potato</span>*/ <AccountDetails setAccount={setAccount} {...accountDetails} admin={true}/>;
  //     case 1:
  //        return <ChildDetails setChild={setChild} {...childDetails}/>;
  //     case 2:
  //       return <OtherParentDets/>;
  //     default:
  //       throw new Error('Unknown step');
  //   }
  // }

  // const handleNext = () => {
  //   console.log(activeStep);
  //   console.log(accountDetails)
  //   console.log(childDetails)
  //   // console.log(promoDetails)
  //   setActiveStep(activeStep + 1);
  // };

  // const handleBack = () => {
  //   setActiveStep(activeStep - 1);
  // };

  const submitHandler = (event, props) => {
    event.preventDefault();
    // this.props.register(this.state)
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const handleChange = (event) => {
  //   let nam = event.target.name;
  //   let val = event.target.value;
  //   console.log(nam)
  //   console.log(val)
  //   data[nam] = props[nam][val];
  //   setData(data)
  //   if(nam === 'subjects'){
  //     setURL(data['files']+'?path=%2F'+data['subjects']['subject_field'])
  //   }
  // }

  const DialogTitle = withStyles(useStyles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <React.Fragment>
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
          <Typography variant="h4">{children}</Typography>
          {onClose ? (
            <IconButton
              aria-label="close"
              className={classes.closeButton}
              onClick={onClose}
            >
              <CloseIcon />
            </IconButton>
          ) : null}
        </MuiDialogTitle>
        <Divider />
        <br />
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
      maxWidth={"sm"}
    >
      <DialogTitle
        onClose={handleClose}
        id="alert-dialog-title"
        className={classes.dialogTitle}
      >
        {"Add Tutor"}
      </DialogTitle>
      <DialogContent>
        <Box>
          <Grid container spacing={3}>
            <Grid item lg={12} md={12} xl={12} xs={12}>
              <Typography variant="h3">Tutoring Details</Typography>
            </Grid>
            <Grid item lg={6} md={6} xl={6} xs={12}>
              <FormControl
                /*onChange={handleChange}*/ variant="outlined"
                className={classes.formControl}
                fullWidth
              >
                <InputLabel>Parent's Name</InputLabel>
                <Select
                  fullWidth
                  native
                  label="Parent's Name"
                  inputProps={{
                    name: "parents",
                    id: "parents",
                  }}
                >
                  <option value={"josh"}>{"Josh Manzano"}</option>
                  {/* {props.parents.map((parent, index) =>
                    <option value={index}>{parent.first_name + " " + parent.last_name}</option>
                  )} */}
                </Select>
              </FormControl>
            </Grid>
            <Grid item lg={12} md={12} xl={12} xs={12}>
              {/* <ChildDetails/> */}
            </Grid>
            <Grid item lg={12} md={12} xl={12} xs={12}>
              {/* <Availability/> */}
            </Grid>
            <Grid item lg={12} md={12} xl={12} xs={12}>
              {/* <SpecialRequests/> */}
            </Grid>
            {/* <Grid
                item
                lg={6}
                md={6}
                xl={6}
                xs={12}
              >
                <FormControl onChange={handleChange} variant="outlined" className={classes.formControl} fullWidth>
                  <InputLabel>Tutee's Name</InputLabel>
                  <Select
                    fullWidth
                    native
                    label="Child's Name"
                    inputProps={{
                      name: 'tutees',
                      id: 'tutees',
                    }}
                  >
                  {props.tutees.map((tutee, index) =>
                    <option value={index}>{tutee.first_name}</option>
                  )}
                  </Select>
                </FormControl>
              </Grid> 
              <Grid
                item
                lg={6}
                md={6}
                xl={6}
                xs={12}
              >
                <FormControl onChange={handleChange} variant="outlined" className={classes.formControl} fullWidth>
                  <InputLabel>Grade Level</InputLabel>
                  <Select
                    native
                    disabled
                    label="Grade Level"
                    inputProps={{
                      name: 'year_level',
                      id: 'year_level',
                    }}
                  >
                  <option value={data['tutees'].year_level}>{data['tutees'].year_level}</option>
                  </Select>
                </FormControl> 
              </Grid> 
              <Grid
                item
                lg={6}
                md={6}
                xl={6}
                xs={12}
              >
                <FormControl onChange={handleChange} variant="outlined" className={classes.formControl} fullWidth>
                  <InputLabel>Length of Session</InputLabel>
                  <Select
                    native

                    label="Length of Session"
                    inputProps={{
                      name: 'lengths',
                      id: 'lengths',
                    }}
                  >
                    {props.lengths.map((length, index) => 
                      <option value={index}>{length.name}</option>
                    )}
                  </Select>
                </FormControl>
              </Grid> 

              <Grid
                item
                lg={6}
                md={6}
                xl={6}
                xs={12}
              >
                <TextField id="outlined-basic" label="Email Address" type="email" variant="outlined" fullWidth/>
              </Grid> 
              <Grid
                item
                lg={6}
                md={6}
                xl={6}
                xs={12}
              >
                <TextField id="outlined-basic" label="Cellphone Number (+63)" type="phone" variant="outlined"           InputProps={{
                  startAdornment: <InputAdornment position="start">+63</InputAdornment>,
                }}fullWidth/>
              </Grid> 
              <Grid
                item
                lg={12}
                md={12}
                xl={12}
                xs={12}
              >
                <Typography variant="h3">
                  Education Background
                </Typography>
              </Grid> 
              <Grid
                item
                lg={6}
                md={6}
                xl={6}
                xs={12}
              >
                <TextField id="outlined-basic" label="Tertiary Education" type="college" variant="outlined" placeholder="Ex. Ateneo De Manila University" fullWidth/>
              </Grid> 
              <Grid
                item
                lg={6}
                md={6}
                xl={6}
                xs={12}
              >
                <TextField id="outlined-basic" label="Course/Major" type="course" variant="outlined" placeholder="Ex. BS Information Technology Entrepreneurship" fullWidth/>
              </Grid> 
              <Grid
                item
                lg={12}
                md={12}
                xl={12}
                xs={12}
              >
                <TextField id="outlined-basic" label="Notable Achievements" type="course" variant="outlined" placeholder="Ex. Consistent Dean's Lister" fullWidth/>
              </Grid>
              <Grid
                item
                lg={12}
                md={12}
                xl={12}
                xs={12}
              >
                <Autocomplete
                  multiple
                  id="tags-filled"
                  options={subjectselections.map((option) => option)}
                  freeSolo
                  variant="outlined"
                  renderTags={(value, getTagProps) =>
                    value.map((option, index) => (
                      <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                    ))
                  }
                  renderInput={(params) => (
                    <TextField {...params} variant="outlined" label="Subjects Teaching" />
                  )}
                />
              </Grid> 
              <Grid
                item
                lg={12}
                md={12}
                xl={12}
                xs={12}
              >
                <ModeOfPayment/>
              </Grid>
              <Grid
                item
                lg={12}
                md={12}
                xl={12}
                xs={12}
              >
                <Typography variant="h3">
                  Other Details
                </Typography>
              </Grid> 
              <Grid
                item
                lg={12}
                md={12}
                xl={12}
                xs={12}
              >
                <OtherTutorDets/>
              </Grid>  */}
          </Grid>
        </Box>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleClose} color="primary" autoFocus>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

ModalAddParent.propTypes = {
  className: PropTypes.string,
};

export default ModalAddParent;
