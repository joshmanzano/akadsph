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
import ForumIcon from "@material-ui/icons/Forum";
import PageviewIcon from "@material-ui/icons/Pageview";
import ModalSessionDetails from "src/components/ModalSessionDetails.js";
import CancelIcon from "@material-ui/icons/Cancel";
import { useConfirm } from "material-ui-confirm";
import { post_api } from "src/Api.js";

const headers = ["Booked Date", "Subject", "Student", "Topic", ""];

const rows = [
  {
    date: "July 7",
    time: "4 PM",
    subject: "Science",
    tutor: "Adrienne Soliven",
  },
];

const useStyles = makeStyles(() => ({
  root: {},
}));

const Pending = ({ className, rows, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [openDetails, setOpenDetails] = React.useState(false);
  const confirm = useConfirm();
  const tableRows = [];
  rows.forEach((row) => {
    tableRows.push({
      date: row.date,
      subject: row.subject,
      student: row.student,
      topics: row.topics,
      files: (
        <Button
          variant="outlined"
          color="primary"
          startIcon={<PageviewIcon />}
          href={row.files}
          target="_blank"
        >
          Files
        </Button>
      ),
      cancel: (
        <Button
          variant="outlined"
          color="secondary"
          startIcon={<CancelIcon />}
          onClick={() => {
            confirm({
              title: "Cancel Session",
              description:
                "Are you sure you want to cancel this session request?",
            })
              .then(() => {
                const payload = {
                  request: row.id,
                };
                post_api("parent-cancel-request", payload, (res) => {
                  window.location.reload();
                });
              })
              .catch(() => {});
          }}
        >
          Cancel
        </Button>
      ),
    });
    console.log(row);
  });

  const buttonList = [
    <Button
      variant="outlined"
      color="primary"
      startIcon={<PageviewIcon />}
      onClick={() => setOpenDetails(true)}
    >
      View
    </Button>,
    <Button
      variant="outlined"
      color="secondary"
      startIcon={<CancelIcon />}
      onClick={() => {
        confirm({
          title: "Cancel Session",
          description: "Are you sure you want to cancel this session request?",
        })
          .then(() => {})
          .catch(() => {});
      }}
    >
      Cancel
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
      <CardHeader title="Pending Requests" />
      <Divider />
      {rows.length != 0 ? (
        <React.Fragment>
          <CardContent>
            <Table tableHeaders={headers} tableRows={tableRows} />
          </CardContent>
          <ModalSessionDetails
            open={openDetails}
            setOpen={setOpenDetails} /*details={sessionDetails}*/
          />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box m={6}>
            <Typography variant="h3" align="center">
              No pending requests
            </Typography>
          </Box>
        </React.Fragment>
      )}
    </Card>
  );
};

Pending.propTypes = {
  className: PropTypes.string,
  rows: PropTypes.array,
};

export default Pending;
