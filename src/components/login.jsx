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
import { GoogleLogin } from 'react-google-login';

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

export class LoginView extends Component {

  state = {
    redirect: false
  }

  login = (response) => {
    const familyName = response.profileObj.familyName
    const givenName = response.profileObj.givenName
    const email = response.profileObj.email
    const name = response.profileObj.name
    const googleId = response.profileObj.googleId
    const imageUrl = response.profileObj.imageUrl
    this.props.login(email, name, familyName, givenName, googleId, imageUrl)
    window.location.replace('/')
  }

  render(){
    const { redirect } = this.state;

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div>
          <Box mt={6}>
            <Container>
              <img src='./img/loginIcon.png'/>
            </Container>
          </Box>
          <Box mt={8}>
              <Container>
              <h2 align="center">
              Sign in as 
              </h2>
              </Container>
          </Box>
          <Box>
              <div id="login" className="text-center">
                  <Container>
                  {/* <div className="col-md-10 col-md-offset-1 section-title">
                      <h2>Features</h2>
                  </div> */}
                  <div className="row">
                      <Grid container spacing={9}>
                          <Grid item xs={6}>
                          <GoogleLogin
                            clientId="906211324056-odf07j9kh30r75r6vfpk5qfq3i7jh6nt.apps.googleusercontent.com"
                            render={renderProps => (
                              <div>
                              <a
                                  onClick={renderProps.onClick}
                                  href="/"
                                  className=""
                              >
                                  <i className={'fa fa-user'}></i>
                              </a>{" "}
                                  <h3>{'Parent'}</h3>
                              </div>
                            )}
                            buttonText="Login"
                            onSuccess={this.login}
                            onFailure={this.login}
                            cookiePolicy={'single_host_origin'}
                          />
                          </Grid>
                          <Grid item xs={6}>
                          <a
                              href="/"
                              className=""
                          >
                              <i className={'fa fa-graduation-cap'}></i>
                          </a>{" "}
                              <h3>{'Tutor'}</h3>
                              {/* <p>{'The legendary laptop'}</p> */}
                          </Grid>
                      </Grid>
                  </div>
                  </Container>
              </div>
          </Box>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}

export default LoginView;