import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
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
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {},
}));

const button1 = () => {
  var axios = require("axios");
  var data = JSON.stringify({
    data: {
      attributes: {
        amount: 10000,
        payment_method_allowed: ["card"],
        payment_method_options: { card: { request_three_d_secure: "any" } },
        currency: "PHP",
      },
    },
  });

  var config = {
    method: "post",
    url: "https://api.paymongo.com/v1/payment_intents",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic c2tfdGVzdF9WRVFQbzVTeXVvWEFNaks2QTM2Skg2QUU6",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
};

const Sales = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader title="Brankas" />
      <Divider />
      <CardContent>
        <Button
          disabled={true}
          onClick={button1}
          variant="contained"
          color="primary"
        >
          Get Authorization Token
        </Button>
      </CardContent>
    </Card>
  );
};

Sales.propTypes = {
  className: PropTypes.string,
};

export default Sales;
