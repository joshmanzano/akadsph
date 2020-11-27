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
    type: 'Single',
    date: 'July 7',
    time: '4 PM',
    subject: 'Filipino',
    topic: 'Mga Tula',
    duration:'1 hour',
    student: 'Grade 10',
  },
  {
    type: 'Bundle',
    date: 'July 7',
    time: '4 PM',
    subject: 'Math',
    topic: 'Algebra',
    duration:'1 hour',
    student: 'Grade 9',
  },
  
]

const headers = ["Subject", "Topic", "Duration", "Student", ""]

// const sessionType = "requests"

const type = "requests"

const useStyles = makeStyles(() => ({
  root: {}
}));

const Requests = ({ className, pending, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();
  const rows = []
  pending.forEach(request => {
    console.log(request)
    rows.push({
      'subject': request.subject.subject_field,
      'topic': request.request.topics,
      'duration': request.request.time + ' hours',
      'student': request.child.first_name + ' (' + request.child.year_level + ')'
    })
  })

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      {/* <CardHeader
        title="Requests"
      />
      <Divider /> */}
      <CardContent>
        <Table tableHeaders={headers} tableRows={rows} type={type}/>
      </CardContent>
    </Card>
  );
};

Requests.propTypes = {
  className: PropTypes.string
};

export default Requests;
