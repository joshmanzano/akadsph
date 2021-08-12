import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { useTheme, makeStyles, Button, Box } from "@material-ui/core";

import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ReceiptIcon from "@material-ui/icons/Receipt";

import Upcoming from "./WeeklySessions";

import ModalReceipt from "./ModalReceipt";

const rows = [
  {
    date: "July 7",
    time: "4 PM",
    subject: "Filipino",
    student: "Rolo Pena",
  },
  {
    date: "July 7",
    time: "4 PM",
    subject: "Math",
    student: "Rolo Pena",
  },
  {
    date: "July 7",
    time: "4 PM",
    subject: "Science",
    student: "Rolo Pena",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    textAlign: "center",
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20,
  },
  details: {
    alignItems: "center",
  },
  column: {
    flexBasis: "33.33%",
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  makingEven: {
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
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
      justifyContent: "center",
    },
  },
}));

const PayoutHeaders = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [openReceipt, setOpenReceipt] = React.useState(false);
  const [expand, setExpand] = React.useState(true);

  const handleClickReceipt = (event) => {
    event.stopPropagation();
    setOpenReceipt(true);
    event.stopPropagation();
  };

  const clickExpand = (event) => {
    setExpand(!expand);
  };

  return (
    <div className={classes.root}>
      <Accordion expanded={expand} onChange={clickExpand}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="header"
        >
          <div className={clsx(classes.column, classes.makingEven)} id="dates">
            <Typography className={classes.heading}>
              From: 09/25/2020 <br /> To: 10/1/2020
            </Typography>
          </div>
          <div className={clsx(classes.column, classes.helper)} id="hours">
            <Typography className={classes.heading}>
              2 <br /> Complete hours
            </Typography>
          </div>
          <div className={clsx(classes.column, classes.helper)} id="amount">
            <Typography className={classes.heading}>
              Php 600 <br /> Pending Amount
            </Typography>
          </div>
          <div className={clsx(classes.column, classes.helper)} id="payoutDate">
            <Typography className={classes.heading}>
              10/2/2020 <br /> Payout Date
            </Typography>
          </div>
          <div className={clsx(classes.column)}>
            <Box my={2}>
              <Button
                startIcon={<ReceiptIcon />}
                color="primary"
                variant="outlined"
                id="receipt"
                onClick={(event) => handleClickReceipt(event)}
                onFocus={(event) => event.stopPropagation()}
              >
                View Receipt
              </Button>
              <ModalReceipt open={openReceipt} setOpen={setOpenReceipt} />
            </Box>
          </div>
        </AccordionSummary>
        <AccordionDetails style={{ display: "block", padding: "0" }}>
          <Upcoming />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

PayoutHeaders.propTypes = {
  className: PropTypes.string,
};

export default PayoutHeaders;
