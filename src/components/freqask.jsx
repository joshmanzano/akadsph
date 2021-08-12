import React, { Component } from "react";
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export class faq extends Component {
  question = (title, text) => {
    return (
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{text}</Typography>
        </AccordionDetails>
      </Accordion>
    );
  };

  render() {
    return (
      <div id="freqask">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              {" "}
              <img src="img/faq.png" className="img-responsive" alt="" />{" "}
            </div>
            <div className="col-xs-12 col-md-6">
              <Grid container spacing={4} direction="column">
                <Grid item>
                  {this.question(
                    "How long does it take to match with a tutor?",
                    "It usually takes us around 24 hours or less to find you a tutor. After this matching period, we will allow you to message your tutor for any concerns. Please note, you can only book for a session 2 days after your booking date. This is to give the tutor ample time to prepare the materials for the student."
                  )}
                </Grid>
                <Grid item>
                  {this.question(
                    "What payment methods are accepted?",
                    "We accept Gcash, Credit Card, Debit Card, and E-Wallet (e.g. GrabPay, Coins.ph)."
                  )}
                </Grid>
                <Grid item>
                  {this.question(
                    "How long can the length of a session be?",
                    "A session can last for 1, 2, or 3 hours."
                  )}
                </Grid>
                <Grid item>
                  {this.question(
                    "How do I become a tutor?",
                    <span>
                      To become a tutor, read through the{" "}
                      <a
                        href="#"
                        onClick={() =>
                          window.open("http://bit.ly/AKADSTutorForm", "_blank")
                        }
                      >
                        Become a Tutor
                      </a>{" "}
                      page to learn more about our application process.
                    </span>
                  )}
                </Grid>
                <Grid item>
                  {this.question(
                    "Do you offer face-to-face tutorials?",
                    "We do not currently offer face-to-face tutorials."
                  )}
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default faq;
