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

const ModalWaiting = ({ open, setOpen, className, ...rest }) => {
  const classes = useStyles();
  // const [open, setOpen] = React.useState(false);
  const [allow, setAllow] = React.useState(false);

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
        <Box align="center" mt={4}>
          <Button
            variant="contained"
            color="primary"
            target="_blank"
            onClick={() => {
              setAllow(true);
            }}
            href={"https://tinyurl.com/yb34m2vf"}
          >
            Click here to open the Terms and Conditions
          </Button>
        </Box>
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
