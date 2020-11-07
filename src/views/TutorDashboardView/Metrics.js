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
        <Typography variant='h4'>
          Metrics
        </Typography>
      </Grid>
      <Grid
        item
        lg={6}
        md={6}
        xl={6}
        xs={12}
      >
         <Typography variant='h5'>
            This Month:
          </Typography>
          <MetricsBoxes/>
      </Grid>
      <Grid
        item
        lg={6}
        md={6}
        xl={12}
        xs={12}
      >
        <Typography variant='h5'>
          All-Time:
        </Typography>
        <MetricsBoxes/>
      </Grid>
    </Grid>
    </React.Fragment>
  );
};

Metrics.propTypes = {
  className: PropTypes.string
};

export default Metrics;
