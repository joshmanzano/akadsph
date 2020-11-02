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
import Table from './Table' 

const rows = [
  {
    name: 'Adam Crisostomo',
    subject: 'English'
  },
  {
    name: 'Carl Castillo',
    subject: 'Math'
  },
  {
    name: 'Eedijk Roque',
    subject: 'Science'
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
]

const headers = ["Name", "Subject", ""]

// const sessionType = "childrenList"

const type = "faveTutorList"

const useStyles = makeStyles(() => ({
  root: {}
}));

const Children = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader
        title="Favorite Tutors"
      />
      <Divider />
      <CardContent>
        <Table tableHeaders={headers} tableRows={rows} type={type}/>
      </CardContent>
    </Card>
  );
};

Children.propTypes = {
  className: PropTypes.string
};

export default Children;
