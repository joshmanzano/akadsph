import React, { Component } from 'react';
import {
  Box,
  Container,
  Typography,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';

export class NotFoundView extends Component {

  render(){
    return (
      <Page
        title="404"
      >
        <Box
          display="flex"
          flexDirection="column"
          height="100%"
          justifyContent="center"
        >
          <Container maxWidth="md">
            <Typography
              align="center"
              color="textPrimary"
              variant="h1"
            >
              404: The page you are looking for isn’t here
            </Typography>
            <Typography
              align="center"
              color="textPrimary"
              variant="h3"
            >
              You either tried some shady route or you came here by mistake.
              Whichever it is, try using the navigation
            </Typography>
            <Box textAlign="center">
              <img
                alt="Under development"
                src="/static/images/undraw_page_not_found_su7k.svg"
              />
            </Box>
          </Container>
        </Box>
      </Page>
    );
  }

};

export default NotFoundView;
