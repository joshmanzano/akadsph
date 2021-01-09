import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Card,
  CardContent,
  TextField,
  makeStyles,
  CardHeader,
  Divider,
} from '@material-ui/core';

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

const SpecialRequests = ({ className, data, setData, ...rest }) => {
  const classes = useStyles();
  const [specialRequest,setSpecial] = React.useState('')

  const handleChange = (event) => {
    const value = event.target.value
    setSpecial(value)
    data['special_request'] = value
    setData(data)
  }

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
            // subheader="Bundles that are for more than 1 hour are consummable for anytime"
            title="Write any special request you have"
          />
          <Divider />
          <CardContent style={{justifyContent: 'center', placeItems: 'center'}}>
            <TextField 
            id="special-request" 
            label="Special Requests" 
            variant="outlined" fullWidth
            multiline
            rows={4}
            onChange={handleChange}
            value={specialRequest}
            />
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

SpecialRequests.propTypes = {
  className: PropTypes.string
};

export default SpecialRequests;
