import React, {useState} from 'react';
import {
  Container,
  Grid,
  Box,
  makeStyles,
  Typography,
} from '@material-ui/core';
import Page from 'src/components/Page';
import Metrics from './Metrics';
import InfoTable from './InfoTable';
import InfoBox from './InfoBox';
import "gridjs/dist/theme/mermaid.css";

import Calendar from './Calendar'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Dashboard = (props) => {
  const classes = useStyles();
  const [selectedDate, changeDate] = useState(new Date())
  const data = props.data
  console.log(data)
  const parentRows = []
  data.parents.forEach(p => {
    parentRows.push([
      p.first_name, p.last_name, p.email, p.credits, p.files, 'N/A'  

    ])
  })
  const tutorRows = []
  data.tutors.forEach(t => {
    tutorRows.push([
      t.first_name, t.last_name, t.email  
    ])
  })

  return (
    <Page
      className={classes.root}
      title="Overview"
    >
      <Container maxWidth={false}>
      <Box mb={2}>

      <Grid container spacing={3}>
        <Grid
          item
          lg={1}
          md={1}
          xl={1}
          xs={12}
        >
        <img width='100' src='../static/images/oli-happy.png'>
        </img>
        </Grid>
        <Grid
          item
          lg={11}
          md={11}
          xl={11}
          xs={12}
        >
        <Box ml={2} mt={2}>
          <Grid container
          direction="column"
          >
            <Grid item>
            <Typography id='selector1' variant="h1">
              Hello there Boss! 
            </Typography>
            </Grid>
            </Grid>
        </Box>
        </Grid>
      </Grid>

      </Box>
        <Grid
          container
          alignItems="center"
          spacing={2}
        >
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            <Metrics/>
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            <InfoBox name={'Parents'} rows={parentRows} headers={['First Name', 'Last Name', 'Email', 'Credits', 'Files', 'Picture']}/>
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            <InfoBox name={'Tutors'} rows={tutorRows} headers={['First Name', 'Last Name', 'Email']}/>
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            <InfoBox name={'Transactions'} rows={[]} headers={[]}/>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Dashboard;
