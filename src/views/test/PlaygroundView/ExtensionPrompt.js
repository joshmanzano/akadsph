import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import {
  Divider,
  makeStyles,
  colors,
  Grid,
  Button,
  Box,
  Typography,
  IconButton,
} from "@material-ui/core";
import {
  Dialog,
  DialogActions,
  DialogContent,
  // DialogTitle,
} from "@material-ui/core";

import MuiDialogTitle from "@material-ui/core/DialogTitle";

import CloseIcon from "@material-ui/icons/Close";

import { withStyles } from "@material-ui/core/styles";

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
  iconFilled: {
    color: "#ff6d75",
  },
  iconHover: {
    color: "#ff3d47",
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
    border: "2px solid #75c2b7",
    "&:hover": {
      backgroundColor: "#75c2b7",
      color: "white !important",
    },
  },
  selectedBtn: {
    width: "17vh",
    height: "17vh",
    borderRadius: 15,
    // boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    border: "2px solid #75c2b7",
    backgroundColor: "#75c2b7",
    color: "white",
  },
  exitBtn: {
    width: "17vh",
    height: "17vh",
    borderRadius: 15,
    // boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    border: "2px solid #EB5531",
    color: "#EB5531",
    "&:hover": {
      backgroundColor: "#EB5531",
      color: "white !important",
    },
  },
  selectExitBtn: {
    width: "17vh",
    height: "17vh",
    borderRadius: 15,
    // boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    border: "2px solid #EB5531",
    backgroundColor: "#EB5531",
    color: "white",
  },
}));

const ModalTutorProfile = ({ open, setOpen, className, ...rest }) => {
  const classes = useStyles();
  const [extendMins, setExtendMins] = React.useState(false);
  const [extendHour, setExtendHour] = React.useState(false);
  const [endSession, setEndSession] = React.useState(false);

  function buttonClick(type) {
    if (type == "extendMins") {
      setExtendMins(true);
      setExtendHour(false);
      setEndSession(false);
    } else if (type == "extendHour") {
      setExtendMins(false);
      setExtendHour(true);
      setEndSession(false);
    } else if (type == "endSession") {
      setExtendMins(false);
      setExtendHour(false);
      setEndSession(true);
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
      fullWidth={true}
      maxWidth={"sm"}
    >
      <DialogTitle
        onClose={handleClose}
        id="alert-dialog-title"
        className={classes.dialogTitle}
      >
        {"Tutor Profile"}
      </DialogTitle>
      <DialogContent className={classes.dialogStyle}>
        <Box align="center" mb={6}>
          <Typography variant="h4" align="center" mb={2}>
            End Session?
          </Typography>
        </Box>

        <Box py={6}>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justify="center"
            style={{ placeItems: "center", textAlign: "center" }}
          >
            <Grid
              item
              lg={4}
              md={4}
              xl={4}
              xs={12}
              alignItems="center"
              justify="center"
              style={{ placeItems: "center" }}
              className={classes.buttonContainer}
            >
              <Button
                className={
                  !extendMins ? classes.choicesBtn : classes.selectedBtn
                }
                onClick={() => buttonClick("extendMins")}
                variant="outlined"
              >
                Extend 30 Minutes
              </Button>
            </Grid>
            <Grid item lg={4} md={4} xl={4} xs={12}>
              <Button
                className={
                  !extendHour ? classes.choicesBtn : classes.selectedBtn
                }
                onClick={() => buttonClick("extendHour")}
                variant="outlined"
              >
                Extend 1 Hour
              </Button>
            </Grid>
            <Grid item lg={4} md={4} xl={4} xs={12}>
              {/* <FormControlLabel value="20 hours P9,000" control={<Radio color="primary" />} label="20 hours P9,000" /> */}
              <Button
                className={
                  !endSession ? classes.exitBtn : classes.selectExitBtn
                }
                onClick={() => buttonClick("endSession")}
                variant="outlined"
              >
                End
              </Button>
            </Grid>
          </Grid>
        </Box>

        <Box my={5}>
          <Typography variant="body1" align="center">
            Extending the session means you agree to pay for the extension fee
            (550 for 1 hour and 300 for 20 minutes). You will be charged once
            the tutor accepts.
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleClose} color="primary">
          Done
        </Button>
      </DialogActions>
    </Dialog>
  );
};

ModalTutorProfile.propTypes = {
  className: PropTypes.string,
};

export default ModalTutorProfile;
