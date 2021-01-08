import React, {useState, Fragment} from 'react';
import {
  Container,
  Grid,
  Box,
  makeStyles,
  Typography,
  Button
} from '@material-ui/core';
import Page from 'src/components/Page';
import Metrics from './Metrics';
import InfoTable from './InfoTable';
import InfoBox from './InfoBox';
import "gridjs/dist/theme/mermaid.css";

import {_} from 'gridjs-react';

import Calendar from './Calendar';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const parentActions = () => {
  return (
    <Fragment>
      <Button variant="contained" color="primary">Edit</Button>
      <Button variant="contained" color="primary">Disable</Button>
    </Fragment>
  )
}

const Dashboard = (props) => {
  const classes = useStyles();
  const [selectedDate, changeDate] = useState(new Date())
  const data = props.data
  console.log(data)
  const parentRows = []
  data.parents.forEach(p => {
    parentRows.push([
      p.id, _(<img width="40" src={p.picture}/>), p.first_name, p.last_name, p.email, p.credits, _(<a target="_blank" href={p.files}>Link</a>), _(
        <Fragment>
          <Button variant="contained" color="primary">Edit</Button>
          <Button variant="contained" color="primary">Disable</Button>
        </Fragment>
      ) 
    ])
  })
  const tutorRows = []
  data.tutors.forEach(t => {
    tutorRows.push([
      t.id, _(<img width="40" src={t.picture}/>), t.first_name, t.last_name, t.email, _(<a target="_blank" href={t.files}>Link</a>), _(
        <Fragment>
          <Button variant="contained" color="primary">Edit</Button>
          <Button variant="contained" color="primary">Disable</Button>
        </Fragment>
      )  
    ])
  })
  const stats = data.business_stats

  const metricRows = []
  metricRows.push([
    moment().format('MMMM'),stats.BOUGHT, stats.GMV, stats.NET_REVENUE, stats.NET_REVENUE_CMGR, stats.USED, stats.USER_RETENTION
  ])

  const transactionRows = []
  data.payments.forEach(p => {
    transactionRows.push([
      moment(p.date).format('MMMM Do YYYY, h:mm:ss a'), 'Php ' + String(p.amount/100), p.credits, p.parent 
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
            <InfoBox name={'Metrics'} rows={metricRows} headers={['MONTH', 'BOUGHT', 'GMV', 'NET_REVENUE', 'NET_REVENUE_CMGR', 'USED', 'USER_RETENTION']}/>
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            <InfoBox name={'Parents'} rows={parentRows} headers={['ID','Picture', 'First Name', 'Last Name', 'Email', 'Credits', 'Files', 'Actions']}/>
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            <InfoBox name={'Tutors'} rows={tutorRows} headers={['ID','Picture', 'First Name', 'Last Name', 'Email', 'Files', 'Actions']}/>
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            <InfoBox name={'Transactions'} rows={transactionRows} headers={['Date', 'Amount', 'Credits', 'Parent']}/>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Dashboard;
