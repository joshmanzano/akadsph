import React, { Component } from 'react';
import { BrowserRouter as Redirect } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Modal } from '@material-ui/core';
import { GoogleLogin } from 'react-google-login';

import Loading from './loading.jsx'
import LoadingBack from 'src/components/loadingBack';
import { withStyles } from '@material-ui/core/styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import {FaUser, FaGraduationCap} from 'react-icons/fa';
import Card from '@material-ui/core/Card';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://akadsph.com/">
        AkadsPH
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const styles = (theme) => ({
  homebutton: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(0),
    color: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.text.primary,
    }
  },
  paperstyle: {
    paddingTop: theme.spacing(1),
    paddingRight: theme.spacing(3),
    paddingLeft: theme.spacing(3),

  },
  alreadyLink: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginBottom: theme.spacing(6),
    },
  }
});

export class LoginView extends Component {

  constructor(props){
    super(props);
    this.state = {
      loading: false 
    }
  }

  login = (response) => {
    this.setState({loading:true}, () => {
      try{
        const accessToken = response.tokenObj.access_token
        const idToken = response.tokenObj.id_token
        this.props.login(accessToken, idToken)
      }catch{
        this.setState({loading:false})
      }
    })
  }

  login_tutor = (response) => {
    this.setState({loading:true}, () => {
      try{
      const accessToken = response.tokenObj.access_token
      const idToken = response.tokenObj.id_token
      this.props.login_tutor(accessToken, idToken)
      }catch{
        this.setState({loading:false})
      }
    })
  }

  loaded = () => {
    this.setState({loading: false})
  }

  handleClose = () => {
    console.log('hello')

  }

  render(){
    const props = this.props;
    const {classes} = this.props;
    return (
      <React.Fragment>
      <Box mx={3}> 
        <Button href="/#" className={classes.homebutton}  startIcon={<ArrowBackIosIcon/>}>
          Home
        </Button>
      </Box>
      <Container component="main" maxWidth="xs">

        <CssBaseline />
        <LoadingBack processing={this.state.loading}/>
        <div>
          <Box mt={1} mb={3}>
            <Container align="center">
              <img height="100" src='./img/logo.png'/>
            </Container>
          </Box>
          <Card className={classes.paperstyle} align="center">
            <Box mt={3}>
                <Container>
                <h2 align="center">
                Sign in as 
                </h2>
                </Container>
            </Box>
            <Box>
                <div id="login" className="text-center" style={{paddingTop: "100px", paddingBottom: "100px"}}>
                    <Container mx={5}>
                    {/* <div className="col-md-10 col-md-offset-1 section-title">
                        <h2>Features</h2>
                    </div> */}
                    <div className="row">
                        <Grid container spacing={9}>
                            <Grid item xs={6}>
                            <GoogleLogin
                              clientId="591828890140-4psbm57eo09i9hguf1j9pnmsnc71dbdb.apps.googleusercontent.com"
                              render={renderProps => (
                                <div>
                                <a
                                    onClick={renderProps.onClick}
                                    href="/"
                                    className=""
                                >
                                    <i className={'fa'}>
                                      <FaUser/>

                                    </i>
                                </a>{" "}
                                    <h3>{'Parent'}</h3>
                                </div>
                              )}
                              buttonText="Login"
                              onSuccess={this.login}
                              onFailure={this.login}
                              uxMode={'popup'}
                              onAutoLoadFinished={this.loaded}
                              cookiePolicy={'single_host_origin'}
                            />
                            </Grid>
                            <Grid item xs={6}>
                            <GoogleLogin
                              clientId="591828890140-4psbm57eo09i9hguf1j9pnmsnc71dbdb.apps.googleusercontent.com"
                              render={renderProps => (
                                <div>
                                <a
                                    onClick={renderProps.onClick}
                                    href="/"
                                    className=""
                                >
                                    <i className={'fa'}>
                                      <FaGraduationCap/>

                                    </i>
                                </a>{" "}
                                    <h3>{'Tutor'}</h3>
                                </div>
                              )}
                              buttonText="Login"
                              onSuccess={this.login_tutor}
                              onFailure={this.login_tutor}
                              uxMode={'popup'}
                              onAutoLoadFinished={this.loaded}
                              cookiePolicy={'single_host_origin'}
                            />
                            </Grid>
                        </Grid>
                    </div>
                    </Container>
                </div>
            </Box>
          </Card>
        </div>
        <Grid container justify="flex-end">
        <Grid item>
            <Link /*href="#/tutor-form"*/ onClick={() => window.open("http://bit.ly/AKADSTutorForm","_blank")} variant="body2" className={classes.alreadyLink}>
              No tutor account? Apply to be a tutor!
            </Link>
        </Grid>
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      </React.Fragment>
    );

  }
}

export default withStyles(styles)(LoginView);