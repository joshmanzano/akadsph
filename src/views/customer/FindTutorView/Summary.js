import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Card,
  CardContent,
  makeStyles,
  Typography,
  Grid,
  CardHeader,
  Divider,
  Chip,
} from '@material-ui/core';
import moment from 'moment';


const useStyles = makeStyles((theme) => ({
  root: {},
  importButton: {
    // marginRight: theme.spacing(1)
  },
  exportButton: {
    // marginRight: theme.spacing(1)
  },
  payButton: {
    width: "60%",
    marginLeft: "20%",
    marginRight: "20%",
    marginTop: "5%",
    marginBottom: "5%",
    // paddingTop: "7%",
    // paddingBottom: "7%",
  },
}));

const Summary = ({ className, data, ...rest }) => {
  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      {/* <Typography variant="h4" align='center'>
            Choose a Bundle
      </Typography> */}
      <Grid container spacing={2}>
          <Grid
          item
          lg={12}
          md={12}
          xl={12}
          xs={12}
          >
            <Box mx="auto" /*mt={3}*/>
              <Card style={{justifyContent: 'center', placeItems: 'center'}}>
                <CardHeader
                  // subheader="Bundles that are for more than 1 hour are consummable for anytime"
                  title="Summary"
                />
                <Divider />
                <CardContent style={{justifyContent: 'center', placeItems: 'center'}}>
                  <Box style={{justifyContent: 'center', placeItems: 'center'}} /*maxWidth={1000}*/>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography variant="h6">
                        Tutee
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h5" align="right">
                        {data['tutees'].first_name}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6">
                        Grade Level
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h5" align="right">
                        {data['tutees'].year_level}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6">
                        Subject
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h5" align="right">
                        {data['subjects'].subject_field}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6">
                        Topic
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h5" align="right">
                        {/* {data['topics'].map(topic => <Chip size="small" color="primary" label={topic} />)} */}
                        {data['topics']}
                      </Typography>
                    </Grid>
                    {/* <Grid item xs={6}>
                      <Typography variant="h6">
                        Files
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h5" align="right">
                        {data['files']}
                      </Typography>
                    </Grid> */}
                    <Grid item xs={6}>
                      <Typography variant="h6">
                        Length of Session
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h5" align="right">
                        {data['lengths'].name}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6">
                        Tutor Options
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      {data['allTutors'] ? 
                      <Typography variant="h5" align="right">
                        All Tutors
                      </Typography>
                      :
                      <Typography variant="h5" align="right">
                        Favorite Tutors Only
                      </Typography>
                      }
                    </Grid>
                    {data['allTutors'] ? null : 
                    <React.Fragment>
                    <Grid item xs={6}>
                      <Typography variant="h6">
                        Favorite Tutor
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h5" align="right">
                        {data['favtutors'].tutor.first_name} {data['favtutors'].tutor.last_name}
                      </Typography>
                    </Grid>
                    </React.Fragment>
                    }
                    <Grid item xs={6}>
                      <Typography variant="h6">
                        Available Dates
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h5" align="right">
                        {Object.keys(data['times']).map(time => (
                          // <Chip label={(day.getMonth()+1)+'/'+(day.getDay())+'/'+day.getFullYear()}/>
                          <Chip color="primary" size="small" label={moment((new Date(Number(time)))).format('MMM Do')}/>
                        ))}
                        {/* <Chip label="27/11/20 2:00pm-4:00pm" /> */}
                      </Typography>
                    </Grid>
                    {/* <Grid item xs={6}>
                      <Typography variant="h6">
                        Special Request
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h5" align="right">
                        {data['special_request']}
                      </Typography>
                    </Grid> */}
                  </Grid>
                  </Box>
                </CardContent>
                <Divider />
                <CardContent style={{justifyContent: 'center', placeItems: 'center'}}>
                  <Box style={{justifyContent: 'center', placeItems: 'center'}} /*maxWidth={1000}*/>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Typography variant="h5">
                          Current Hours Credits
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="h5" align="right">
                          {data['credits']}
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="h5">
                          Hours Deducted
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="h5" align="right">
                          -{data['lengths'].value}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
                <Divider />
                <CardContent style={{justifyContent: 'center', placeItems: 'center'}}>
                  <Box style={{justifyContent: 'center', placeItems: 'center'}} /*maxWidth={1000}*/>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Typography variant="h5">
                          Hours Left
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="h5" align="right">
                          {data['credits'] - data['lengths'].value}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Grid> 

      </Grid>
    </div>
  );
};

Summary.propTypes = {
  className: PropTypes.string
};

export default Summary;
