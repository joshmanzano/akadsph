import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import {Button, Box, Grid, Container} from '@material-ui/core';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TimelineIcon from '@material-ui/icons/Timeline';

import TotalProfit from './TotalProfit';
import AveRating from './AveRating';
import TotalStudents from './TotalStudents';
import TotalHours from './TotalHours';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      // margin: theme.spacing(1),
      // width: theme.spacing(16),
      // height: theme.spacing(16),
      // margin: '5vh',
      width: '110vh',
      height: '25vh',
      // marginBottom: '10vh',
      padding: theme.spacing(2),
    },
  },
}));

export default function BoxContent(props) {
  const classes = useStyles();
  const noStudents = props.noStudents;
  const aveRating = props.aveRating;
  const totalHours = props.totalHours;
  const totalEarnings = props.totalEarnings;


  return (
  
    <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >

          <Grid
            item
            lg={6}
            sm={6}
            xl={6}
            xs={12}
          >
            <AveRating aveRating={aveRating}/>
          </Grid>
          <Grid
            item
            lg={6}
            sm={6}
            xl={6}
            xs={12}
          >  
            <TotalStudents noStudents={noStudents}/>
            </Grid>
            <Grid
            item
            lg={6}
            sm={6}
            xl={6}
            xs={12}
            >
                <TotalHours totalHours={totalHours}/>
            </Grid>
            <Grid
              item
              lg={6}
              sm={6}
              xl={6}
              xs={12}
            >
                <TotalProfit totalEarnings={totalEarnings}/>
                {/* <div className={classes.root}>
                  <Paper elevation={3}>Total Earnings</Paper>
                </div> */}
            </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
          </Grid>
        </Grid>
    </Container>
  );
}