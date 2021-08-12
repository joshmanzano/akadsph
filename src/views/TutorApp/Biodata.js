import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
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
} from "@material-ui/core";
import PublishIcon from "@material-ui/icons/Publish";
import { Search as SearchIcon } from "react-feather";
import Chip from "@material-ui/core/Chip";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import CssBaseline from "@material-ui/core/CssBaseline";
import { DropzoneArea } from "material-ui-dropzone";

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
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const Biodata = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      {/* <Typography variant="h4" align='center'>
            Tutoring Details
      </Typography> */}
      <Box mx={4}>
        <Grid container spacing={3}>
          <Grid item lg={12} md={12} xl={12} xs={12}>
            <Typography variant="h3">Contact Details</Typography>
          </Grid>
          <Grid item lg={6} md={6} xl={6} xs={12}>
            <TextField
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item lg={6} md={6} xl={6} xs={12}>
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item lg={6} md={6} xl={6} xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Sex</FormLabel>
              <RadioGroup row name="tutor-sex">
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item lg={6} md={6} xl={6} xs={12}>
            <TextField
              id="outlined-basic"
              label="Birth Date"
              variant="outlined"
              type="date"
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
          </Grid>

          <Grid item lg={6} md={6} xl={6} xs={12}>
            <TextField
              id="outlined-basic"
              label="Email Address"
              type="email"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item lg={6} md={6} xl={6} xs={12}>
            <TextField
              id="outlined-basic"
              label="Cellphone Number (+63)"
              type="phone"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">+63</InputAdornment>
                ),
              }}
              fullWidth
            />
          </Grid>
          <Grid item lg={12} md={12} xl={12} xs={12}>
            <Typography variant="h3">Education Background</Typography>
          </Grid>
          <Grid item lg={4} md={4} xl={4} xs={12}>
            <TextField
              id="outlined-basic"
              label="Tertiary Education"
              type="college"
              variant="outlined"
              placeholder="Ex. Ateneo De Manila University"
              fullWidth
            />
          </Grid>
          <Grid item lg={4} md={4} xl={4} xs={12}>
            <TextField
              id="outlined-basic"
              label="Year of Graduation"
              type="year"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item lg={4} md={4} xl={4} xs={12}>
            <TextField
              id="outlined-basic"
              label="Course/Major"
              type="course"
              variant="outlined"
              placeholder="Ex. BS Information Technology Entrepreneurship"
              fullWidth
            />
          </Grid>
          <Grid item lg={12} md={12} xl={12} xs={12}>
            <TextField
              id="outlined-basic"
              label="Notable Achievements"
              type="course"
              variant="outlined"
              placeholder="Ex. Consistent Dean's Lister"
              helperText="This is what we'll show to parents whose child you accepted. Ex. Graduated honors in Ateneo High School, ACET Director's Lister"
              fullWidth
            />
          </Grid>
          <Grid item lg={12} md={12} xl={12} xs={12}>
            <Typography variant="h3">Documents</Typography>
          </Grid>
          <Grid item lg={12} md={12} xl={12} xs={12}>
            <Typography variant="h5">School or Government ID</Typography>
            <Typography variant="body1">
              (Filename: Lastname_Firstname_ID)
            </Typography>
            <DropzoneArea filesLimit={3} />
          </Grid>
          <Grid item lg={12} md={12} xl={12} xs={12}>
            <Typography variant="h5">Resume</Typography>
            <Typography variant="body1">
              We will only use the resume to asses your achievements as well as
              to show to parents whose child you have accepted to tutor, when
              asked for data to check quality and credibility. (Filename:
              Lastname_Firstname_Resume)
            </Typography>
            <DropzoneArea filesLimit={3} />
          </Grid>
          <Grid item lg={12} md={12} xl={12} xs={12}>
            <Typography variant="h5">
              Transcript of Records from High School or College (Optional)
            </Typography>
            <Typography variant="body1">
              (Filename: Lastname_Firstname_TOR)
            </Typography>
            <DropzoneArea filesLimit={3} />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

Biodata.propTypes = {
  className: PropTypes.string,
};

export default Biodata;
