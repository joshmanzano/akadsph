import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  makeStyles,
  Typography,
  Grid,
  Select,
  FormControl,
  InputLabel,
  CardHeader,
  Divider,
  Container,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import PublishIcon from "@material-ui/icons/Publish";
import Chip from "@material-ui/core/Chip";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import { DropzoneDialog } from "material-ui-dropzone";

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
}));

const ChildDetails = ({
  className,
  data,
  url,
  setURL,
  setData,
  props,
  ...rest
}) => {
  const classes = useStyles();
  const topicselections = ["Algebra", "Calculus", "Mga Tula", "Vocabulary"];
  const [tutorOption, setTutorOption] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const history = useHistory();
  const [faveExist, setFaveExist] = React.useState(props.favtutors.length > 0);
  const [topics, setTopics] = React.useState("");

  const handleRadioChange = (event) => {
    if (event.target.value == "all-tutors") {
      data["allTutors"] = true;
      setTutorOption(true);
    } else {
      data["allTutors"] = false;
      setTutorOption(false);
    }
  };

  const handleChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    console.log(nam);
    console.log(val);
    data[nam] = props[nam][val];
    setData(data);
    if (nam === "subjects") {
      setURL(data["files"] + "?path=%2F" + data["subjects"]["subject_field"]);
    }
  };

  const handleFreeChange = (event) => {
    const value = event.target.value;
    data["topics"] = value;
    setTopics(value);
    setData(data);
  };

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      {/* <Typography variant="h4" align='center'>
            Tutoring Details
      </Typography> */}
      <Box /*mt={3}*/>
        <Grid container direction="row" alignItems="stretch" spacing={4}>
          <Grid item xs={6}>
            <Card>
              <a href="https://airtable.com/shrk0RjAkh4mhc7y1">
                <CardContent>
                  <Container>
                    <Typography align="center">
                      <h3 className="orangeText">SUMMER WITH AKADS</h3>
                      <p className="blueText">
                        The Summer with Akads Program is our latest campaign
                        built to help your child learn a new skill, improve on
                        previous learnings, or be prepared for next school
                        year's classes. Note: current credit hours can be used
                        for this program. Sessions for this program will be good
                        for one month.
                      </p>
                    </Typography>
                  </Container>
                </CardContent>
              </a>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <a href="findtutor">
                <CardContent>
                  <Container>
                    <Typography align="center">
                      <h3 className="orangeText">NORMAL BOOKING FORM</h3>
                      <p className="blueText">
                        Book a tutor for your child’s current lessons and
                        classes. You may book individual sessions through this
                        booking form.
                      </p>
                    </Typography>
                  </Container>
                </CardContent>
              </a>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

ChildDetails.propTypes = {
  className: PropTypes.string,
};

export default ChildDetails;
