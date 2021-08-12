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
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  InputAdornment,
  Snackbar,
  Typography,
} from "@material-ui/core";

import axios from "axios";

class RandomFact extends React.Component {
  useStyles = makeStyles(() => ({
    root: {},
  }));

  createZoomMeeting = () => {
    const data = {
      tutee: "TEST TUTEE",
      subject: "TEST",
    };
    axios
      .post("https://akadsph-backend.herokuapp.com/zoom/", data)
      .then((res) => {
        console.log(res.data);
        this.setState(
          {
            start_url: res.data.start,
            join_url: res.data.join,
          },
          () => {
            this.setState({ open: true });
          }
        );
      });
  };

  constructor() {
    super();
    this.state = {
      open: false,
      success: false,
      start_url: "",
      join_url: "",
    };
  }

  componentDidMount() {}

  handleClose = () => {
    this.setState({ open: false });
    this.setState({ success: true });
  };

  closeSuccess = () => {
    this.setState({ success: false });
  };

  render() {
    return (
      <Card>
        <CardHeader title="Zoom" />
        <Divider />
        <CardContent>
          <Button
            onClick={this.createZoomMeeting}
            variant="contained"
            color="primary"
          >
            Create Zoom Meeting
          </Button>
          <Dialog
            onClose={this.handleClose}
            aria-labelledby="customized-dialog-title"
            open={this.state.open}
          >
            <DialogTitle
              id="customized-dialog-title"
              onClose={this.handleClose}
            >
              , Meeting Details
            </DialogTitle>
            <DialogContent dividers>
              <Typography>
                Start URL: <a href={this.state.start_url}>Click here</a>
              </Typography>
              <Typography>
                Join URL: <a href={this.state.join_url}>Click here</a>
              </Typography>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={this.handleClose} color="primary">
                Save changes
              </Button>
            </DialogActions>
          </Dialog>
        </CardContent>
      </Card>
    );
  }
}

export default RandomFact;
