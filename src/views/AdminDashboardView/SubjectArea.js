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
  Button,
} from "@material-ui/core";
import Table from "src/components/Table.js";
import DeleteIcon from "@material-ui/icons/Delete";
import { useConfirm } from "material-ui-confirm";

const rows = [
  {
    subject: "Math",
  },
  {
    subject: "Science",
  },
  // {
  //   date: 'July 7',
  //   time: '4 PM',
  //   subject: 'LoL',
  //   tutor: {
  //     name: 'Adrienne Soliven'
  //   },
  // },
  // {
  //   date: 'July 7',
  //   time: '4 PM',
  //   subject: 'Filipino',
  //   tutor: {
  //     name: 'Adrienne Soliven'
  //   },
  // },
  // {
  //   date: 'July 7',
  //   time: '4 PM',
  //   subject: 'Filipino',
  //   tutor: {
  //     name: 'Adrienne Soliven'
  //   },
  // },
];

const headers = ["Subject", ""];

const useStyles = makeStyles(() => ({
  root: {},
}));

const Children = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();
  const confirm = useConfirm();

  const buttonList = [
    <Button
      variant="outlined"
      color="primary"
      startIcon={<DeleteIcon />}
      onClick={() => {
        confirm({
          title: "Delete Subject",
          description:
            "Are you sure you want to remove this subject from your profile?",
        })
          .then(() => {})
          .catch(() => {});
      }}
    >
      Remove
    </Button>,
  ];

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader title="Your Subject Area" />
      <Divider />
      <CardContent>
        <Table
          tableHeaders={headers}
          tableRows={rows}
          type={type}
          tableButtons={buttonList}
        />
      </CardContent>
    </Card>
  );
};

Children.propTypes = {
  className: PropTypes.string,
};

export default Children;
