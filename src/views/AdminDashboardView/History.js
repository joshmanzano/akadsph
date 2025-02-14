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
  Typography,
  Box,
  Button,
} from "@material-ui/core";
import Table from "src/components/Table.js";
import Feedback from "src/components/Feedback";
import FeedbackIcon from "@material-ui/icons/Feedback";

const rows = [
  {
    date: "Dec 4",
    time: "4 PM",
    subject: "Math",
    student: "Angel",
    parent: "Joshua Manzano",
  },
  // {
  //   date: 'July 7',
  //   time: '4 PM',
  //   subject: 'Math',
  //   student: 'Josh Manzano',
  //   parent: 'Tadhg McHearty'

  // },
  // {
  //   date: 'July 7',
  //   time: '4 PM',
  //   subject: 'Science',
  //   student: 'Josh Manzano',
  //   parent: 'Tadhg McHearty'

  // },
  // {
  //   date: 'July 7',
  //   time: '4 PM',
  //   subject: 'LoL',
  //   student: 'Josh Manzano',
  //   parent: 'Tadhg McHearty'

  // },
  // {
  //   date: 'July 7',
  //   time: '4 PM',
  //   subject: 'Filipino',
  //   student: 'Josh Manzano',
  //   parent: 'Tadhg McHearty'

  // },
  // {
  //   date: 'July 7',
  //   time: '4 PM',
  //   subject: 'Filipino',
  //   student: 'Josh Manzano',
  //   parent: 'Tadhg McHearty'

  // },
];

const headers = ["Date", "Time", "Subject", "Student", "Parent", ""];

const useStyles = makeStyles(() => ({
  root: {},
}));

const Sales = ({ className, setHistory, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [openFeedback, setOpenFeedback] = React.useState(false);
  const [name, setName] = React.useState(rows[0].student);

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

  const data = {
    datasets: [
      {
        backgroundColor: colors.indigo[500],
        data: [18, 5, 19, 27, 29, 19, 20],
        label: "This year",
      },
      {
        backgroundColor: colors.grey[200],
        data: [11, 20, 12, 29, 30, 25, 13],
        label: "Last year",
      },
    ],
    labels: ["1 Aug", "2 Aug", "3 Aug", "4 Aug", "5 Aug", "6 Aug"],
  };

  const options = {
    animation: false,
    cornerRadius: 20,
    layout: { padding: 0 },
    legend: { display: false },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      xAxes: [
        {
          barThickness: 12,
          maxBarThickness: 10,
          barPercentage: 0.5,
          categoryPercentage: 0.5,
          ticks: {
            fontColor: theme.palette.text.secondary,
          },
          gridLines: {
            display: false,
            drawBorder: false,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            fontColor: theme.palette.text.secondary,
            beginAtZero: true,
            min: 0,
          },
          gridLines: {
            borderDash: [2],
            borderDashOffset: [2],
            color: theme.palette.divider,
            drawBorder: false,
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2],
            zeroLineColor: theme.palette.divider,
          },
        },
      ],
    },
    tooltips: {
      backgroundColor: theme.palette.background.default,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: "index",
      titleFontColor: theme.palette.text.primary,
    },
  };

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader title="Session History" />
      <Divider />
      {setHistory ? (
        <React.Fragment>
          <CardContent>
            <Table
              tableHeaders={headers}
              tableRows={rows}
              tableButtons={buttonList}
            />
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
};

export default Sales;
