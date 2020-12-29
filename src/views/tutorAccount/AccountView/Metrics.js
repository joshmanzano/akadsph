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
  Typography,
} from '@material-ui/core';

import MetricsBoxes from './MetricsBoxes';


const useStyles = makeStyles(() => ({
  root: {}
}));

const Metrics = ({ className, ...rest }) => {
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
    //     <Table tableHeaders={headers} tableRows={rows} sessionType={sessionType} type={type}/>
    //   </CardContent>
    // </Card>
   <React.Fragment>
   <Divider/>
    <Grid container spacing={2}>
      <Grid
        item
        lg={12}
        md={12}
        xl={12}
        xs={12}
      >
      <Box mt={2}>
        <Typography variant='h1'>
          Metrics
        </Typography>
      </Box>
      </Grid>
      <Grid
        item
        lg={6}
        md={6}
        xl={6}
        xs={12}
        id="monthlyMetrics"
      >
        <Box mb={2}>
         <Typography variant='h2' align='center' gutterBottom='true'>
            This Month
          </Typography>
        </Box>
          <MetricsBoxes noStudents={0} aveRating={'N/A'} totalHours={0} totalEarnings={0}/>
      </Grid>
      <Grid
        item
        lg={6}
        md={6}
        xl={6}
        xs={12}
        id="allTimeMetrics"
      >
        <Box mb={2}>
          <Typography variant='h2' align='center' gutterBottom='true'>
            All-Time
          </Typography>
        </Box>
        <MetricsBoxes noStudents={0} aveRating={'N/A'} totalHours={0} totalEarnings={0}/>
      </Grid>
    </Grid>
    </React.Fragment>
  );
};

Metrics.propTypes = {
  className: PropTypes.string
};

export default Metrics;
