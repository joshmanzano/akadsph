import React, { Component } from 'react'
import {Box, Accordion, AccordionSummary, AccordionDetails, Typography,
Grid} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'


export class faq extends Component {

  question = (title) => {
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
          <Typography>
          </Typography>
        </AccordionDetails>
      </Accordion>
    )

  }

  render() {
    return (
        <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6"> <img src="img/faq.png" className="img-responsive" alt=""/> </div>
            <div className="col-xs-12 col-md-6">
            <Grid container direction="column">
              <Grid item>
                {this.question('How long does it take to match with a tutor?')}
              </Grid>
              <Grid item>
                {this.question('What payment methods are accepted?')}
              </Grid>
              <Grid item>
                {this.question('How long can the length of a session be?')}
              </Grid>
              <Grid item>
                {this.question('How do I become a tutor?')}
              </Grid>
              <Grid item>
                {this.question('Do you offer face-to-face tutorials?')}
              </Grid>
            </Grid>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default faq

