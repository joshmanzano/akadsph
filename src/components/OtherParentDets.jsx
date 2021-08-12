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
import AddIcon from "@material-ui/icons/Add";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  FormGroup,
  FormLabel,
} from "@material-ui/core";

const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
  addChild: {
    textAlign: "center",
  },
});

class OtherParentDets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credits: 0,
      status: true,
      files: "",
      first_time_user: true,
    };
    // props.setChild(this.state)
  }

  changeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
    // this.setState({[nam]: val}, () => {
    //   this.props.setChild(this.state)
    // });
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.checked });
  };

  render() {
    const props = this.props;
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="credits"
              label="Credits"
              name="credits"
              type="number"
              defaultValue={""}
              autoComplete="credits"
              onChange={this.changeHandler}
            />
          </Grid>
          {/* <Grid item xs={12} sm={8}>
              <TextField
                autoComplete="files"
                name="files"
                variant="outlined"
                required
                fullWidth
                id="files"
                defaultValue={''}
                label="Files"
                autoFocus
                onChange={this.changeHandler}
              />
            </Grid> */}
          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset" className={classes.formControl}>
              {/* <FormLabel component="legend">Assign responsibility</FormLabel> */}
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.first_time_user}
                      onChange={this.handleChange}
                      name="first_time_user"
                    />
                  }
                  label="First Time User"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.status}
                      onChange={this.handleChange}
                      name="status"
                    />
                  }
                  label="Status"
                />
              </FormGroup>
            </FormControl>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(OtherParentDets);
