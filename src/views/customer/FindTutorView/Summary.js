import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  makeStyles,
  Typography,
  Grid,
  Container,
  CardHeader,
  Divider,
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';


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

const Summary = ({ className, ...rest }) => {
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
                        Rolo Pena
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6">
                        Grade Level
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h5" align="right">
                        Grade 4
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6">
                        Subject
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h5" align="right">
                        Filipino
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6">
                        Topic
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h5" align="right">
                        Ibong Adarna
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6">
                        Files
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h5" align="right">
                        Handouts.pdf, Slides.ppt
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6">
                        Length of Session
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h5" align="right">
                        1 hour
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6">
                        Tutor Options
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h5" align="right">
                        Favorite Tutors Only
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6">
                        Favorite Tutor
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h5" align="right">
                        Charles Samoy
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6">
                        Available Dates
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h5" align="right">
                        11/29/20 2:00pm-4:00pm <br/> 11/30/20 2:00pm-4:00pm <br/> 12/01/20 2:00pm-4:00pm 
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h6">
                        Special Request
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h5" align="right">
                        None
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
                          Current Hours Credits
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="h5" align="right">
                          10
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="h5">
                          Hours Deducted
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="h5" align="right">
                          -1
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
                          9
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
