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
import InfoTable from './InfoTable';


const useStyles = makeStyles(() => ({
  root: {}
}));

const Metrics = ({ className, name, rows, actions, headers, ...rest }) => {
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
          {name}
        </Typography>
      </Box>
      </Grid>
      {actions}
      {/* <Box>
        <Button variant={'contained'} color='primary'>Add {name}</Button>
        <Button variant={'contained'} color='primary'>Disable {name}</Button>
      </Box> */}
      <InfoTable rows={rows} headers={headers}></InfoTable>

    </Grid>
    </React.Fragment>
  );
};

Metrics.propTypes = {
  className: PropTypes.string
};

export default Metrics;
