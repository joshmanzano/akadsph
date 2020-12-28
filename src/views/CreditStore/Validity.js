import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Card,
  CardContent,
  makeStyles,
  Typography,
  CardHeader,
  Divider,
} from '@material-ui/core';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  root: {},
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

  var startDate = moment().format('MMM Do YYYY');
  var endDate = moment().add(6, 'M').format('MMM Do YYYY');
  // var futureMonthEnd = moment(futureMonth).endOf('month');

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Box id="validity"/*mt={3}*/>
        <Card style={{justifyContent: 'center', placeItems: 'center'}}>
          <CardHeader
            // subheader="*Note these hours will expire after 6 MONTHS please use them before then."
            title="Expiration Date"
          />
          <Box ml={2}>
            <Typography variant="caption" display="block" >
              *Note: these hours will expire after 6 MONTHS please use them before then
            </Typography>
          </Box>
          <Divider />
          <CardContent style={{justifyContent: 'center', placeItems: 'center'}}>
            <Typography variant="h4" align='center'>
              {endDate}
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
