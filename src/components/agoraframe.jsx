import React, { Component } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Box
} from '@material-ui/core';
import Iframe from 'react-iframe'

export class features extends Component {
  render() {
    return (
    <Card>
      <CardContent>
        <Grid alignItems="center" direction="column" container>
          <Grid item xs={12}>
          <Box ml={2} mt={2}>
            <Grid container spacing={0}
            direction="column"
            >
              <Grid item>
              <Box flexGrow={1}/>
              </Grid>
              <Grid item>
                <Typography variant="h1">
                  You have a session right now!
                </Typography>
              </Grid>
              <Grid item>
                <Box align="center" mt={4}>
                  <a target="_blank" href={this.props.join_url}>
                    <Button variant="contained" color="primary">
                      Join session
                    </Button>
                  </a>
                </Box>
              </Grid>
            </Grid>
          </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
    );
  }
}

export default features;
