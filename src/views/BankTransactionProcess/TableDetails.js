import React from 'react';
import clsx from 'clsx';
// import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  useTheme,
  makeStyles,
} from '@material-ui/core';
import Table from 'src/components/Table.js'; 
import moment from 'moment';

const headers = ["Type", "Quantity", "Discount", "Cost", "Total Credits Bought"]



const useStyles = makeStyles(() => ({
  root: {}
}));

const Upcoming = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const className = props.className;
  const rest = props.rest;
  const rows = [{
    Type: "15 hours",
    Quantity: "1",
    Discount: "None",
    Cost: "PHP 7199",
    Total: "15 hours"

  }];

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
      style={{height: "100%"}}
    >
      <CardHeader
        title="Summary of Request Details"
      />
      <Divider />
        <React.Fragment>
          <CardContent>
            <Table tableHeaders={headers} tableRows={rows}/>
          </CardContent>
        </React.Fragment>
  
    </Card>
  );
};

export default Upcoming;
