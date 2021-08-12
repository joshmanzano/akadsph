import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/StarBorder";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

export default function Footer() {
  return (
    <Container maxWidth="md" id="footer">
      <Grid container>
        <Grid item xs={3}>
          <Typography variant="p">&copy; AkadsPH 2021 </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="p">
            <a href="https://akads-public-bucket.s3-ap-southeast-1.amazonaws.com/Akads+Website+Tutor+Terms+%26+Conditions.pdf">
              Terms of Use
            </a>
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="p">
            <a href="https://akads-public-bucket.s3-ap-southeast-1.amazonaws.com/AKADS+Privacy+Policy.pdf">
              Privacy Policy
            </a>
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="p">
            <a href="https://akads-public-bucket.s3-ap-southeast-1.amazonaws.com/Akads+Refund+and+Cancellation+Policy.pdf">
              Refunds and Cancellations
            </a>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
