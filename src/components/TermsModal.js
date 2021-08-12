import React from "react";
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
  CircularProgress,
} from "@material-ui/core";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  // DialogTitle,
} from "@material-ui/core";

import MuiDialogTitle from "@material-ui/core/DialogTitle";

import CloseIcon from "@material-ui/icons/Close";

import { withStyles } from "@material-ui/core/styles";

import toast from "react-hot-toast";

import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";

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
}));

const ModalWaiting = ({
  open,
  setOpen,
  className,
  optionLabels,
  linkPages,
  ...rest
}) => {
  const classes = useStyles();
  // const [open, setOpen] = React.useState(false);
  const [allow, setAllow] = React.useState(false);
  const [options, setOptions] = React.useState(optionLabels); //React.useState(['Terms of Use', 'Privacy Policy', 'Refund and Cancellation Policy'])
  const [links, setLinks] = React.useState(linkPages); //React.useState(['https://akads-public-bucket.s3-ap-southeast-1.amazonaws.com/AKADS+Terms+of+Use.pdf', 'https://akads-public-bucket.s3-ap-southeast-1.amazonaws.com/AKADS+Privacy+Policy.pdf', 'https://akads-public-bucket.s3-ap-southeast-1.amazonaws.com/Akads+Refund+and+Cancellation+Policy.pdf'])
  const [privacy, setPrivacy] = React.useState(false);
  const [terms, setTerms] = React.useState(false);
  const [refunds, setRefunds] = React.useState(false);
  const [acceptAll, setAcceptAll] = React.useState(false);

  const error = [terms, privacy, refunds, acceptAll].filter((v) => v) !== true;

  const handleAcceptAll = () => {
    if (acceptAll == false) {
      setAcceptAll(true);
      setTerms(true);
      setRefunds(true);
      setPrivacy(true);
      setAllow(true);
    } else {
      setAcceptAll(false);
      setTerms(false);
      setRefunds(false);
      setPrivacy(false);
      setAllow(false);
    }
  };

  const handleCheck = (setCheck, value) => {
    setCheck(!value);
    if (!value === false) {
      setAllow(false);
      setAcceptAll(false);
    }

    if (
      acceptAll === true &&
      terms === true &&
      refunds === true &&
      privacy === true &&
      !value === true
    ) {
      setAllow(true);
    }
  };

  const createChecks = () => {
    console.log("createchekcs");
    console.log("heloooooo");
    // return (<FormControlLabel control={<Checkbox /*checked={antoine} onChange={handleChange}*/ name="antoine" />} label="Poops" />);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    toast(
      "You need to accept the terms and conditions to be able to use the website."
    );
  };

  const close = () => {
    if (allow) {
      setOpen(false);
    } else {
      toast(
        "You need to accept the terms and conditions to be able to use the website."
      );
    }
  };

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
    >
      <DialogTitle
        onClose={handleClose}
        id="alert-dialog-title"
        className={classes.dialogTitle}
      >
        {"Terms & Conditions"}
      </DialogTitle>
      <DialogContent mx={4}>
        <Box align="center" mb={2}>
          <img width="100" src="../static/images/oli-happy.png"></img>
        </Box>
        <DialogContentText id="alert-dialog-description" align="center">
          Before you start using the website, kindly read our terms and
          conditions.
        </DialogContentText>

        <Box mx={4}>
          <FormControl
            required
            error={error}
            component="fieldset"
            className={classes.formControl}
          >
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={acceptAll}
                    onChange={handleAcceptAll}
                    name="gilad"
                  />
                }
                label="I Accept All of the Terms & Conditions"
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={terms}
                    onChange={() => handleCheck(setTerms, terms)}
                    name={options[0]}
                  />
                }
                label={
                  <a onClick={() => window.open(links[0], "_blank")}>
                    {options[0]}
                  </a>
                }
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={privacy}
                    onChange={() => handleCheck(setPrivacy, privacy)}
                    name={options[1]}
                  />
                }
                label={
                  <a onClick={() => window.open(links[1], "_blank")}>
                    {options[1]}
                  </a>
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={refunds}
                    onChange={() => handleCheck(setRefunds, refunds)}
                    name={options[2]}
                  />
                }
                label={
                  <a onClick={() => window.open(links[2], "_blank")}>
                    {options[2]}
                  </a>
                }
              />
            </FormGroup>
            <FormHelperText>Check all to proceed</FormHelperText>
          </FormControl>
        </Box>
        {/* <Box align="center" mt={4}>
              <Button variant="contained" color="primary" target='_blank' onClick={() => {setAllow(true)}} href={'https://tinyurl.com/yb34m2vf'}>
                Click here to open the Terms and Conditions
              </Button>
          </Box> */}
        <Box my={4}>
          <Grid align="center" spacing={4}>
            <Grid item>
              <Box>
                <Button
                  style={{ opacity: allow ? "100%" : "50%" }}
                  onClick={close}
                  color="primary"
                  variant="contained"
                >
                  I agree to the terms & conditions.
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

ModalWaiting.propTypes = {
  className: PropTypes.string,
};

export default ModalWaiting;
