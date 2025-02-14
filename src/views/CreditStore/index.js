import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  makeStyles,
  Typography,
  Grid,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Snackbar,
} from "@material-ui/core";
import Page from "src/components/Page";
import MuiAlert from "@material-ui/lab/Alert";
import Bundle from "./Bundle";

import Validity from "./Validity";
import PromoCode from "./PromoCode";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import { withStyles } from "@material-ui/core/styles";

import {
  bankcheckout,
  gcashcheckout,
  grabpaycheckout,
  get_user,
  checkout,
  get_payment_intent,
} from "src/Api";

import PayPage from "./PayPage";
import LoadingBack from "src/components/loadingBack";

import Toast from "light-toast";
import BuyHoursTutorial from "src/components/BuyHoursTutorial";

import SecurePaymentModal from "src/components/SecurePaymentModal";

import { useConfirm } from "material-ui-confirm";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  nextButton: {
    placeItems: "center",
    justifyContent: "center",
    // marginRight: theme.spacing(1)
  },
  backButton: {
    marginTop: "5%",
    marginBottom: "5%",
  },
  payButton: {
    minWidth: "40%",
    // marginLeft: "10%",
    // marginRight: "10%",
    marginTop: "5%",
    marginBottom: "5%",
    // paddingTop: "7%",
    // paddingBottom: "7%",
  },
  closeButton: {
    float: "right",
    marginTop: "5px",
  },
  dialogTitle: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

function CreditStore(props) {
  const classes = useStyles();
  const [detailsDone, setDetailsDone] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [processing, setProcessing] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(false);
  const themebp = useTheme();
  const fullScreen = useMediaQuery(themebp.breakpoints.down("sm"));

  const [cardState, setCardState] = React.useState({
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  });
  const [amount, setAmount] = React.useState(0);
  const [item, setItem] = React.useState("");
  const [hours, setHours] = React.useState(0);
  const [discount, setDiscount] = React.useState(0);
  const [sendingRequest, setSendingRequest] = React.useState(false);
  const [promoCode, setPromo] = React.useState("");
  const [shopItem, setShopItem] = React.useState("");
  const [method, setMethod] = React.useState("card");

  useEffect(() => {
    if (processing) {
    }
  }, [processing]);

  const handleChangeNext = (event) => {
    setDetailsDone(!detailsDone);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    console.log(cardState);
    setOpen(false);
  };

  function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

  const confirm = useConfirm();

  const paynow = () => {
    console.log(method);
    if (method == "card") {
      cardpay();
    } else if (method == "gcash") {
      gcashpay();
    } else if (method == "grabpay") {
      grabpay();
    } else if (method == "bank") {
      bankpay();
    }
  };

  const gcashpay = () => {
    setProcessing(true);
    gcashcheckout(item, promoCode, (res) => {
      const src_id = res["src_id"];
      const checkout_url = res["checkout_url"];
      localStorage.setItem("src_id", src_id);
      // console.log(src_id)
      // console.log(checkout_url)
      window.location.replace(checkout_url);
    });
  };

  const grabpay = () => {
    setProcessing(true);
    grabpaycheckout(item, promoCode, (res) => {
      const src_id = res["src_id"];
      const checkout_url = res["checkout_url"];
      localStorage.setItem("src_id", src_id);
      window.location.replace(checkout_url);
    });
  };

  const bankpay = () => {
    setProcessing(true);
    bankcheckout(item, promoCode, (res) => {
      const transfer_id = res["transfer_id"];
      const checkout_url = res["checkout_url"];
      localStorage.setItem("transfer_id", transfer_id);
      window.location.replace(checkout_url);
    });
  };

  const cardpay = () => {
    setProcessing(true);
    console.log(cardState);
    checkout(
      item,
      promoCode,
      cardState["number"],
      cardState["expiry"],
      cardState["cvc"],
      (res) => {
        console.log(res);
        if (!res["error"]) {
          if (res["state"] == "success") {
            // Toast.success('Transaction successful!')
            props.refresh();
            window.location.replace("/transaction-successful?amount=" + amount);
            props.addCredit(hours);
          } else if (res["state"] == "fail") {
            setProcessing(false);
            Toast.fail("Transaction failed!");
          } else if (res["state"] == "awaiting_next_action") {
            console.log(res);
            console.log(res["url"]);
            window.open(res["url"], "_blank");
            confirm({
              title: "3DS Authentication",
              description: "3DS authentication must be completed.",
              confirmationText: "Proceed",
            })
              .then(() => {
                get_payment_intent(
                  res["payment_method"],
                  res["payment_intent"],
                  res["client_key"],
                  (res) => {
                    console.log(res);
                    if (res["state"] == "success") {
                      props.refresh();
                      window.location.replace("/transaction-successful");
                      props.addCredit(hours);
                    } else {
                      setProcessing(false);
                      Toast.fail("Transaction failed!");
                    }
                  }
                );
              })
              .catch(() => {
                setProcessing(false);
              });
          } else if (res["state"] == "processing") {
            sleep(1000);
            cardpay();
          }
        } else {
          setProcessing(false);
          Toast.fail(res["data"]["errors"][0]["detail"]);
        }
      }
    );
  };

  const DialogTitle = withStyles(useStyles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h4">{children}</Typography>
        {onClose ? (
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });

  return (
    <Page className={classes.root} title="Buy Hours">
      <BuyHoursTutorial enabled={true} />
      <Snackbar
        open={success}
        autoHideDuration={6000}
        onClose={() => setSuccess(false)}
      >
        <Alert onClose={() => setSuccess(false)} severity="success">
          Transaction successful!
        </Alert>
      </Snackbar>
      <Snackbar
        open={error}
        autoHideDuration={6000}
        onClose={() => setError(false)}
      >
        <Alert onClose={() => setError(false)} severity="success">
          Transaction failed!
        </Alert>
      </Snackbar>
      <LoadingBack processing={processing} />
      <Container maxWidth={false}>
        {/* <Toolbar /> */}
        <Grid container spacing={3}>
          <Grid item lg={1} md={1} xl={1} xs={12}>
            <img width="100" src="../static/images/oli-idea.png"></img>
          </Grid>
          <Grid item lg={11} md={11} xl={11} xs={12}>
            <Box ml={2} mt={2}>
              <Grid container spacing={0} direction="column">
                <Grid item>
                  <Box flexGrow={1} />
                </Grid>
                <Grid item>
                  <Typography variant="h1" align="left">
                    Buy Hours
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>

        {!detailsDone ? (
          <React.Fragment>
            <Grid container spacing={2} alignItems="center">
              <Grid item lg={7} md={7} xl={7} xs={12} id="chooseBundles">
                <Bundle
                  setAmount={setAmount}
                  setItem={setItem}
                  setHours={setHours}
                />
              </Grid>
              <Grid item lg={5} md={5} xl={5} xs={12}>
                <Validity />
                <br />
                <PromoCode setPromo={setPromo} />
              </Grid>
              <Grid item lg={12} md={12} xl={12} xs={12}></Grid>
              <Grid item lg={12} md={12} xl={12} xs={12} align="right">
                <Button
                  className={classes.nextButton}
                  color="primary"
                  variant="contained"
                  onClick={handleChangeNext}
                >
                  Proceed to Checkout
                </Button>
              </Grid>
            </Grid>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <PayPage
              amount={amount}
              item={item}
              discount={discount}
              hours={hours}
              method={method}
              setMethod={setMethod}
              cardState={cardState}
              setCardState={setCardState}
            />
            <Grid container spacing={0}>
              <Grid item lg={1} md={1} xl={0} xs={0}></Grid>
              <Grid item lg={5} md={5} xl={5} xs={6}></Grid>
              <Grid item lg={5} md={5} xl={5} xs={6} align="right">
                <Button
                  onClick={handleChangeNext}
                  className={classes.backButton}
                >
                  Back
                </Button>
                <Button
                  className={classes.payButton}
                  color="primary"
                  variant="contained"
                  onClick={paynow}
                >
                  Checkout
                </Button>
              </Grid>
            </Grid>
          </React.Fragment>
        )}
      </Container>
    </Page>
  );
}

export default CreditStore;
