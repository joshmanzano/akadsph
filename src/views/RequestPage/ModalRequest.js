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
  Container,
} from "@material-ui/core";
import {
  Dialog,
  DialogActions,
  DialogContent,
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
import ModalConfRequest from "./ModalConfRequest";

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
    minWidth: "40vh",
  },
}));

const ModalRequest = ({
  open,
  setOpen,
  setSchedule,
  removeRequest,
  schedule,
  modalInfo,
  rows,
  className,
  ...rest
}) => {
  const classes = useStyles();
  const [openConf, setOpenConf] = React.useState(false);
  // const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAccept = () => {
    setOpen(false);
    setOpenConf(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const changeSchedule = (event) => {
    setSchedule(event.target.value);
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

  const onChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <React.Fragment key={modalInfo["availables"][0].id}>
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
          {"Session Request"}
        </DialogTitle>
        <DialogContent>
          {/* <RequestSummary rows={rows}/> */}
          {/* <Typography variant="body1" mb={2}  mt={3}>
            Special Request: None
          </Typography> */}

          <Box mx={8}>
            <Container /*maxWidth="sm"*/>
              <Grid container spacing={2}>
                <Grid item lg={6} md={6} xl={6} xs={6}>
                  <Typography
                    variant="h6"
                    align="left"
                    style={{ fontWeight: "bold" }}
                  >
                    Parent
                  </Typography>
                </Grid>
                <Grid item lg={6} md={6} xl={6} xs={6}>
                  <Typography variant="h6" align="right">
                    {modalInfo["parent"]}
                  </Typography>
                </Grid>
                <Grid item lg={6} md={6} xl={6} xs={6}>
                  <Typography
                    variant="h6"
                    align="left"
                    style={{ fontWeight: "bold" }}
                  >
                    Student
                  </Typography>
                </Grid>
                <Grid item lg={6} md={6} xl={6} xs={6}>
                  <Typography variant="h6" align="right">
                    {modalInfo["student"]}
                  </Typography>
                </Grid>
                <Grid item lg={6} md={6} xl={6} xs={6}>
                  <Typography
                    variant="h6"
                    align="left"
                    style={{ fontWeight: "bold" }}
                  >
                    Subject
                  </Typography>
                </Grid>
                <Grid item lg={6} md={6} xl={6} xs={6}>
                  <Typography variant="h6" align="right">
                    {modalInfo["subject"]}
                  </Typography>
                </Grid>
                <Grid item lg={6} md={6} xl={6} xs={6}>
                  <Typography
                    variant="h6"
                    align="left"
                    style={{ fontWeight: "bold" }}
                  >
                    Topic
                  </Typography>
                </Grid>
                <Grid item lg={6} md={6} xl={6} xs={6}>
                  <Typography variant="h6" align="right">
                    {modalInfo["topic"]}
                  </Typography>
                </Grid>
                <Grid item lg={6} md={6} xl={6} xs={6}>
                  <Typography
                    variant="h6"
                    align="left"
                    style={{ fontWeight: "bold" }}
                  >
                    Duration
                  </Typography>
                </Grid>
                <Grid item lg={6} md={6} xl={6} xs={6}>
                  <Typography variant="h6" align="right">
                    {modalInfo["duration"]}
                  </Typography>
                </Grid>
                <Grid item lg={6} md={6} xl={6} xs={6}>
                  <Typography
                    variant="h6"
                    align="left"
                    style={{ fontWeight: "bold" }}
                  >
                    Special Request
                  </Typography>
                </Grid>
                <Grid item lg={6} md={6} xl={6} xs={6}>
                  <Typography variant="h6" align="right">
                    {modalInfo["specialRequest"]}
                  </Typography>
                </Grid>
                <Grid item lg={12} md={12} xl={12} xs={12} align="center">
                  <Box my={6} align="center">
                    <FormControl component="fieldset">
                      <FormLabel component="legend">
                        Available Schedules
                      </FormLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        label="Schedule"
                        value={schedule}
                        onChange={changeSchedule}
                      >
                        {modalInfo["availables"].map((row) => (
                          <MenuItem value={row.id}>{row.label}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAccept} color="primary" autoFocus>
            Accept
          </Button>
        </DialogActions>
      </Dialog>
      {modalInfo["availableData"][schedule] != undefined && (
        <ModalConfRequest
          open={openConf}
          setOpen={setOpenConf}
          removeRequest={removeRequest}
          info={modalInfo}
          schedule={schedule}
        />
      )}
    </React.Fragment>
  );
};

ModalRequest.propTypes = {
  className: PropTypes.string,
};

export default ModalRequest;
