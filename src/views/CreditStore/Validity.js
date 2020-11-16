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
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  root: {},
  importButton: {
    // marginRight: theme.spacing(1)
  },
  exportButton: {
    // marginRight: theme.spacing(1)
  },
  bundleButton: {
    minWidth: "30vh",
    paddingTop: "7%",
    paddingBottom: "7%",
  },
}));

const Validity = ({ className, ...rest }) => {
  const classes = useStyles();
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var mm6 = String(today.getMonth() + 7).padStart(2, '0');
  var yyyy = today.getFullYear();
  // var startDate = mm + '/' + dd + '/' + yyyy;
  var endDate = mm6 + '/' + dd + '/' + yyyy;

  var startDate = moment().format('MM/DD/YYYY');
  var endDate = moment().add(6, 'M').format('MM/DD/YYYY');
  // var futureMonthEnd = moment(futureMonth).endOf('month');

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      {/* <Typography variant="h4" align='center'>
            Choose a Bundle
      </Typography> */}
      <Box /*mt={3}*/>
        <Card style={{justifyContent: 'center', placeItems: 'center'}}>
          <CardHeader
            subheader="*Note these hours will expire after 6 MONTHS please use them before then."
            title="Period of Validity"
          />
          <Divider />
          <CardContent style={{justifyContent: 'center', placeItems: 'center'}}>
            <Typography variant="h3" align='center'>
              {startDate} - {endDate}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

Validity.propTypes = {
  className: PropTypes.string
};

export default Validity
