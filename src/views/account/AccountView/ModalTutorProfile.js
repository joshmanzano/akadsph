import React from "react";
import PropTypes from "prop-types";
import {
  Divider,
  makeStyles,
  colors,
  Grid,
  Box,
  Typography,
  IconButton,
} from "@material-ui/core";
import {
  Dialog,
  DialogContent,
  // DialogTitle,
} from "@material-ui/core";

import MuiDialogTitle from "@material-ui/core/DialogTitle";

import CloseIcon from "@material-ui/icons/Close";

import { withStyles } from "@material-ui/core/styles";

import Avatar from "@material-ui/core/Avatar";

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
  rootRate: {
    // width: 200,
    display: "flex",
  },
}));

const ModalTutorProfile = ({ open, setOpen, className, ...rest }) => {
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
        {"Tutor Profile"}
      </DialogTitle>
      <DialogContent className={classes.dialogStyle}>
        <Box align="center" mb={2}>
          <Avatar>CS</Avatar>
        </Box>

        <Typography variant="h4" align="center" mb={2}>
          Charles Samoy
        </Typography>
        <Typography variant="h6" align="center" mb={2}>
          Ateneo de Manila University
        </Typography>
        <Typography variant="h6" align="center" mb={2}>
          4 BS Information Technology Techpreneurship
        </Typography>
        <Typography variant="h6" align="center" mb={2}>
          Lan Kwai's DJ of the Year 2019
        </Typography>

        <Box my={5}>
          <Grid container spacing={2} style={{ textAlign: "center" }}>
            <Grid xs={6}>
              <Typography variant="h3" align="center" mb={2}>
                40
              </Typography>
              <Typography variant="h6" align="center" mb={2}>
                hours
              </Typography>
            </Grid>
            <Grid xs={6}>
              <Typography variant="h4" align="center" mb={2}>
                40
              </Typography>
              <Typography variant="h6" align="center" mb={2}>
                Students
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

ModalTutorProfile.propTypes = {
  className: PropTypes.string,
};

export default ModalTutorProfile;
