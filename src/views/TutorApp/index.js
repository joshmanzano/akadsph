import React, { useState } from 'react';
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
  DialogTitle,
} from '@material-ui/core';
import Page from 'src/components/Page';
import Results from './Results';
import Toolbar from './Toolbar';
import data from './data';
import FormDetails from './FormDetails';
import SpecialRequests from './SpecialRequests';
import Payment from './Payment';
import AppSent from './AppSent'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  nextButton: {
    placeItems: "center",
    justifyContent: "center",
    // marginRight: theme.spacing(1)
   
  },
  backButton: {
    // backgroundColor: "white",
    // color: theme.palette.primary,
    // textColor: theme.palette.primary,
    // border: "10px solid theme.palette.primary",
    // borderColor: theme.palette.primary,
    // // marginRight: theme.spacing(1)
    // "&:hover": {
    //   backgroundColor: theme.palette.primary,
    // }
  },
}));




const CustomerListView = () => {
  const classes = useStyles();
  const [customers] = useState(data);
  const [detailsDone, setDetailsDone] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleSend = (event) => {
    setDetailsDone(!detailsDone);
  };

  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

  return (
    <Page
      className={classes.root}
      title="Tutor Application - AKADSPH" 
    >
      <Container>
        {/* <Toolbar /> */}
        <Box mb={4}>
          <Typography variant="h1" align='center'>
            Tutor Application
          </Typography>
        </Box>
        {!detailsDone ? 
        <React.Fragment>
          <Grid
            container
            spacing={3}
            alignItems="center"
            justify="center"
          >
            <Grid
              item
              lg={12}
              md={12}
              xl={12}
              xs={12}
            >
              <FormDetails/>
            </Grid>
            
            <Grid
              item
              lg={12}
              md={12}
              xl={12}
              xs={12}
              alignItems="center"
              justify="center"
              style={{textAlign: "center"}}
            >
              <Button className={classes.nextButton}  
                color="primary"
                variant="contained"
                onClick={handleSend}
                alignItems="center"
                justify="center"
                >
                  Register
              </Button>
            </Grid>
          </Grid>
        </React.Fragment>
        : 
        
        <React.Fragment>
          <AppSent/>
        </React.Fragment>
        }
        {/* <Box mt={3}>
          <Results customers={customers} />
        </Box> */}
      </Container>
    </Page>
  );
};

export default CustomerListView;
