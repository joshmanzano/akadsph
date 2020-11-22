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
            <h2 align="center">
              Our servers are under maintenance.
            </h2>
            <Box mb={4}>
            <h3 align="center">
              Kindly try again later. If this persists, kindly contact akadsph@gmail.com
            </h3>
            </Box>
            <Box textAlign="center">
              <img width="400"
                alt="Under development"
                src="/static/images/oli-confused.png"
              />
            </Box>
          </Container>
        </Box>
      </Page>
    );
  }

};

export default NotFoundView;
