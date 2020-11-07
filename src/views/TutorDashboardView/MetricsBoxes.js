import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import {Button, Box, Grid} from '@material-ui/core';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TimelineIcon from '@material-ui/icons/Timeline';


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
      marginBottom: '5vh',
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
    <div className={classes.root}>
        {/* <Grid container spacing={2}> */}
          <Grid
          item
          lg={6}
          md={6}
          xl={6}
          xs={6}
          >
            <Grid
              item
              lg={10}
              md={10}
              xl={10}
              xs={10}
              >
                <div className={classes.root}>
                  <Paper elevation={3}>
                      <Grid spacing={2} sm container direction='column' 
                          // alignItems="center"
                          // justify="center"
                          >
                        <Grid item xs={12} direction='column' >
                          <TimelineIcon size='large'/>
                        </Grid>
                        <Grid item xs={12} direction='column' >
                          <Grid item xs={6}>
                            <Typography variant='h4'>
                              4.5
                            </Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography variant='h6'>
                              Average Rating
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                  </Paper>
                </div>
            </Grid>
            <Grid
              item
              lg={10}
              md={10}
              xl={10}
              xs={10}
              >
                <div className={classes.root}>
                  <Paper elevation={3}>Average Ratings</Paper>
                </div>
            </Grid>
          </Grid>
          <Grid
          item
          lg={6}
          md={6}
          xl={6}
          xs={6}
          >
            <Grid
              item
              lg={10}
              md={10}
              xl={10}
              xs={10}
              >
                <div className={classes.root}>
                  <Paper elevation={3}>Total Hours</Paper>
                </div>
            </Grid>
            <Grid
              item
              lg={10}
              md={10}
              xl={10}
              xs={10}
              >
                <div className={classes.root}>
                  <Paper elevation={3}>Total Earnings</Paper>
                </div>
            </Grid>
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
          </Grid>
        {/* </Grid> */}
    </div>
  );
}