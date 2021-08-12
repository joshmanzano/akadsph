import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import { Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import MuiPhoneNumber from "material-ui-phone-number";
import ParentRegister from "./ParentRegister";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  homebutton: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(0),
    color: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.text.primary,
    },
  },
});

class SignUp extends Component {
  constructor(props) {
    super(props);
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.props.register(this.state);
  };
  changeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };

  phoneChangeHandler = (val) => {
    this.setState({ phone: val });
  };

  changeState = (state) => {
    this.setState(state);
  };

  render() {
    const props = this.props;
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Box mx={3}>
          <Button
            href="/login"
            className={classes.homebutton}
            startIcon={<ArrowBackIosIcon />}
          >
            Back
          </Button>
        </Box>
        <Container component="main">
          <CssBaseline />

          <div className={classes.paper}>
            <Box mt={6}>
              <Container align="center">
                <img height="100" src="./img/logo.png" />
              </Container>
            </Box>
            <Container align="center">
              <ParentRegister register={this.props.register} />
            </Container>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(SignUp);
