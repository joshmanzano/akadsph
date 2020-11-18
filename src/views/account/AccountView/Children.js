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
    name: 'Nate Mercado',
    age: '14',
    gradeLevel:'Grade 10',
    school: 'Ateneo High School'
  },
  {
    name: 'Nate Mercado',
    age: '10',
    gradeLevel:'Grade 6',
    school: 'Ateneo High School'
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

const headers = ["Name", "Age", "Grade Level", "School", ""]

// const sessionType = "childrenList"

const type = "childList"

const useStyles = makeStyles(() => ({
  root: {}
}));

const Children = ({ className, children, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();

  const rows = []
  children.map((child) => {
    rows.push({
      'name':child.first_name + ' ' + child.last_name,
      'age':child.age,
      'gradeLevel':child.year_level,
      'school':child.school,
    })
  })

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader
        title="Your Children"
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
