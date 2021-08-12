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
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";

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

const TutorExp = ({ className, ...rest }) => {
  const classes = useStyles();
  const subjectselections = ["Math", "English", "Filipino", "Science"];
  const [levelsTaught, setLevelsTaught] = React.useState([]);
  const gradelevels = [
    "Grade 1",
    "Grade 2",
    "Grade 3",
    "Grade 4",
    "Grade 5",
    "Grade 6",
    "Grade 7",
    "Grade 8",
    "Grade 9",
    "Grade 10",
  ];

  const handleChange = (event) => {
    setLevelsTaught(event.target.value);
  };

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      {/* <Typography variant="h4" align='center'>
            Tutoring Details
      </Typography> */}
      <Box mx={4}>
        <Grid container spacing={3}>
          <Grid item lg={12} md={12} xl={12} xs={12}>
            <Typography variant="h3">Tutoring Related Details</Typography>
          </Grid>
          <Grid item lg={6} md={6} xl={6} xs={12}>
            <Autocomplete
              multiple
              id="tags-filled"
              options={subjectselections.map((option) => option)}
              freeSolo
              variant="outlined"
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip
                    variant="outlined"
                    label={option}
                    {...getTagProps({ index })}
                  />
                ))
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  label="What subjects do you teach?"
                />
              )}
            />
          </Grid>
          <Grid item lg={6} md={6} xl={6} xs={12}>
            <FormControl
              variant="outlined"
              className={classes.formControl}
              fullWidth
            >
              <InputLabel>How long have you been tutoring?</InputLabel>
              <Select
                native
                label="How long have you been tutoring?"
                inputProps={{
                  name: "subject-matter",
                  id: "subject-matter",
                }}
              >
                <option aria-label="None" value="" />
                <option value={10}>I have no prior experience</option>
                <option value={20}>Less than 12 months</option>
                <option value={10}>More than a year</option>
              </Select>
            </FormControl>
          </Grid>
          <Grid item lg={6} md={6} xl={6} xs={12}>
            <FormControl
              variant="outlined"
              className={classes.formControl}
              fullWidth
            >
              <InputLabel variant="outlined" id="demo-mutiple-checkbox-label">
                What grade levels have you taught?
              </InputLabel>
              <Select
                labelId="demo-mutiple-checkbox-label"
                id="demo-mutiple-checkbox"
                multiple
                value={levelsTaught}
                onChange={handleChange}
                input={<Input />}
                renderValue={(selected) => selected.join(", ")}
                variant="outlined"
                // MenuProps={MenuProps}
              >
                {gradelevels.map((gradelevel) => (
                  <MenuItem key={gradelevel} value={gradelevel}>
                    <Checkbox checked={levelsTaught.indexOf(gradelevel) > -1} />
                    <ListItemText primary={gradelevel} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item lg={6} md={6} xl={6} xs={12}>
            <TextField
              id="outlined-basic"
              label="Preferred Times for Tutorials"
              placeholder="Ex. Mondays 1PM-6PM, Thursday 3PM-5PM"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item lg={12} md={12} xl={12} xs={12}>
            <TextField
              id="outlined-basic"
              label="Is there anything you want to let Akads know?"
              placeholder="Ex. Ex. I can teach Science but only up to Grade 7, I can teach Math even to first year college students"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item lg={12} md={12} xl={12} xs={12}>
            <Typography variant="h5">Current Class Schedule</Typography>
            <Typography variant="body1">
              (Filename: Lastname_Firstname_Schedule)
            </Typography>
            <DropzoneArea filesLimit={3} />
          </Grid>
          <Grid item lg={12} md={12} xl={12} xs={12}>
            <Typography variant="h5">Presentable Picture</Typography>
            <Typography variant="body1">
              We will only use this picture to show to parents whose child you
              have accepted to tutor. (Filename: Lastname_Firstname_Picture)
            </Typography>
            <DropzoneArea filesLimit={3} />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

TutorExp.propTypes = {
  className: PropTypes.string,
};

export default TutorExp;
