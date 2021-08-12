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
  Typography,
  Box,
  Button,
} from "@material-ui/core";
import Table from "src/components/Table.js";
import FeedbackIcon from "@material-ui/icons/Feedback";
import StarIcon from "@material-ui/icons/Star";
import Feedback from "src/components/Feedback";
import Toast from "light-toast";

import { get_user, post_api } from "src/Api";

const headers = ["Date", "Time", "Subject", "Tutor", "Student", ""];

const useStyles = makeStyles(() => ({
  root: {},
}));

const Sales = ({ className, rows, ...rest }) => {
  // const rows = [
  //   {
  //     date: 'July 7',
  //     time: '4 PM',
  //     subject: 'Science',
  //     tutor:  'Adrienne Soliven',
  //     student: 'Rolo Pena'
  //   }
  // ]
  const classes = useStyles();
  const theme = useTheme();
  const [openFeedback, setOpenFeedback] = React.useState(false);
  const [name, setName] = React.useState("Rolo Pena" /*rows[0].student*/);

  const buttonList = [
    <Button
      variant="outlined"
      color="primary"
      onClick={() => setOpenFeedback(true)}
      startIcon={<FeedbackIcon />}
    >
      Give Feedback
    </Button>,
  ];

  const tableRows = [];
  rows.forEach((row) => {
    tableRows.push({
      date: row.date,
      time: row.time,
      subject: row.subject,
      tutor: row.tutor,
      student: row.student,
      addFav: (
        <Button
          variant="outlined"
          color="primary"
          onClick={() => {
            Toast.loading("Adding favorite tutor...");
            get_user((user) => {
              const payload = {
                parent_id: user.id,
                tutor_id: row.tutor_id,
              };
              post_api("add-favourite-tutor", payload, (res) => {
                console.log(typeof res);
                if (typeof res == "string") {
                  Toast.fail(row.tutor + " is already a favorite tutor");
                } else {
                  Toast.success(
                    row.tutor + " added to the favorite tutor list"
                  );
                }
              });
            });
          }}
          startIcon={<StarIcon />}
        >
          Add to Favorites List
        </Button>
      ),
    });
  });

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader title="Session History" />
      <Divider />
      {tableRows.length != 0 ? (
        <React.Fragment>
          <CardContent>
            <Table tableHeaders={headers} tableRows={tableRows} />
          </CardContent>
          <Feedback open={openFeedback} setOpen={setOpenFeedback} name={name} />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box m={6}>
            <Typography variant="h3" align="center">
              No past sessions
            </Typography>
          </Box>
        </React.Fragment>
      )}
    </Card>
  );
};

Sales.propTypes = {
  className: PropTypes.string,
  rows: PropTypes.array,
};

export default Sales;
