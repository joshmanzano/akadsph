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
} from '@material-ui/core';
import Table from './Table' 

import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import ReceiptIcon from '@material-ui/icons/Receipt';

import Upcoming from './WeeklySessions';


const rows = [
  {
    date: 'July 7',
    time: '4 PM',
    subject: 'Filipino',
    student: 'Rolo Pena',
  },
  {
    date: 'July 7',
    time: '4 PM',
    subject: 'Math',
    student: 'Rolo Pena',
  },
  {
    date: 'July 7',
    time: '4 PM',
    subject: 'Science',
    student: 'Rolo Pena',
  },
  // {
  //   date: 'July 7',
  //   time: '4 PM',
  //   subject: 'LoL',
  //   tutor: {
  //     name: 'Adrienne Soliven'
  //   },
  // },
  // {
  //   date: 'July 7',
  //   time: '4 PM',
  //   subject: 'Filipino',
  //   tutor: {
  //     name: 'Adrienne Soliven'
  //   },
  // },
  // {
  //   date: 'July 7',
  //   time: '4 PM',
  //   subject: 'Filipino',
  //   tutor: {
  //     name: 'Adrienne Soliven'
  //   },
  // },
]


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    textAlign: 'center',
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '33.33%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  receiptButton: {
    // alignItems: 'center',
    // textAlign: 'center',
    // justify: 'center',
    // placeItem: 'center',
    // position: 'absolute',
    // top: '50%', 
    // transform: 'translateY(-50%)',
    // placeItems: 'center'
    justifyContent: 'center'
  },
  },
}));

const PayoutHeaders = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes.column}>
            <Typography className={classes.heading}>From: 09/25/2020 <br/> To: 10/1/2020</Typography>
          </div>
          <div className={clsx(classes.column, classes.helper)}>
            <Typography className={classes.heading}>2 <br/> Complete hours</Typography>
          </div>
          <div className={clsx(classes.column, classes.helper)}>
            <Typography className={classes.heading}>P600 <br/> Pending Amount</Typography>
          </div>
          <div className={clsx(classes.column, classes.helper)}>
            <Typography className={classes.heading}>10/2/2020 <br/> Payout Date</Typography>
          </div>
          <div className={clsx(classes.column)}>
          <Button startIcon={<ReceiptIcon/>} color='primary' variant='contained'
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
          >View Receipt</Button>
          </div>
        </AccordionSummary>
        <AccordionDetails style={{display: 'block', padding: '0'}}>
          <Upcoming/>
          {/* <div className={classes.column} />
          <div className={classes.column}>
            <Chip label="Barbados" onDelete={() => {}} />
          </div>
          <div className={clsx(classes.column, classes.helper)}>
            <Typography variant="caption">
              Select your destination of choice
              <br />
              <a href="#secondary-heading-and-columns" className={classes.link}>
                Learn more
              </a>
            </Typography>
          </div> */}
        </AccordionDetails>
        {/* <Divider />
        <AccordionActions>
          <Button size="small">Cancel</Button>
          <Button size="small" color="primary">
            Save
          </Button>
        </AccordionActions> */}
      </Accordion>
    </div>
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
  );
};

PayoutHeaders.propTypes = {
  className: PropTypes.string
};

export default PayoutHeaders;
