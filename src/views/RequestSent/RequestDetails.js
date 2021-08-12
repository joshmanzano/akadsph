import React from "react";
import clsx from "clsx";
// import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  useTheme,
  makeStyles,
} from "@material-ui/core";
import Table from "src/components/Table.js";
import moment from "moment";

const headers = [
  "Tutee",
  "Grade Level",
  "Subject",
  "Topic",
  "Files",
  "Duration",
  "Tutor Options",
  "Available Dates",
  "Special Request",
];

const rows = [
  {
    Tutee: "Angel Manzano",
    Grade_Level: "Grade 5",
    Subject: "Math",
    Topic: "Algebra",
    Duration: "1 hour",
    Tutor_Options: "All Tutors",
    Available_Dates:
      "December 9, 2020 4:00PM - 5:00PM, December 10, 2020 3:00PM - 4:00PM",
    Special_Request: "None",
  },
];

const useStyles = makeStyles(() => ({
  root: {},
}));

const Upcoming = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const className = props.className;
  const rest = props.rest;
  const rows = [
    {
      Tutee: "Angel Manzano",
      Grade_Level: "Grade 5",
      Subject: "Math",
      Topic: "Algebra",
      Files: "akads.cloud.ph",
      Duration: "1 hour",
      Tutor_Options: "All Tutors",
      Available_Dates:
        "December 9, 2020 4:00PM - 5:00PM, December 10, 2020 3:00PM - 4:00PM",
      Special_Request: "None",
    },
  ];

  // props.upcoming.forEach(u => {
  //   const sessionDate = new Date(u.start_time)
  //   // if(props.currentDate.getDate() == sessionDate.getDate() && props.currentdate.getMonth() == sessionDate.getMonth()){
  //   if(props.currentDate.getMonth() == sessionDate.getMonth()){
  //     if(props.currentDate.getDate() == sessionDate.getDate()){
  //       rows.push({
  //         'time':moment(sessionDate).format('h:mm a'),
  //         'subject':u.subject,
  //         'tutor':u.tutor,
  //       })
  //     }
  //   }
  // })

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
      style={{ height: "100%" }}
    >
      <CardHeader title="Summary of Request Details" />
      <Divider />
      <React.Fragment>
        <CardContent>
          <Table tableHeaders={headers} tableRows={rows} />
        </CardContent>
      </React.Fragment>
    </Card>
  );
};

export default Upcoming;
