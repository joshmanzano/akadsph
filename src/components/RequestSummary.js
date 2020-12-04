import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  useTheme,
  makeStyles,
  colors,
  Grid,
  Tooltip,
  Button,
  Box,
  Container,
} from '@material-ui/core';
import Calendar from 'react-calendar'
import Table from 'src/components/Table.js';  

const rows = [
  {
    subject: "Math",
    topic: "Algebra",
    duration: "1 hour",
    student: "Rolo Pena"
  },
 
]

const headers = ["Subject", "Topic", "Duration", "Student", "Files"]


const useStyles = makeStyles(() => ({
  root: {}
}));

const Sales = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    // <Card
    //   className={clsx(classes.root, className)}
    //   {...rest}
    // >
    //   <CardHeader
    //     title="Upcoming Sessions"
    //   />
    //   <Divider />
    //   <CardContent>
        <Table tableHeaders={headers} tableRows={rows}/>
    //   </CardContent>
    // </Card>
  );
};

Sales.propTypes = {
  className: PropTypes.string
};

export default Sales;
