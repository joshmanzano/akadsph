import React, {useState} from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import Box from '@material-ui/core/Box';
import { useConfirm } from 'material-ui-confirm';

import {post_api} from 'src/Api';


export default function TutorModal(props) {
  const t = props.t
  const open = props.open
  const setOpen = props.setOpen
  const confirm = useConfirm()
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  const handleClick = (event) => {
    setOpen(true)
  };

  const handleClose = () => {
    setOpen(false)
  };

  const loginAs = () => {
    const payload = {
      'session_token': localStorage.getItem('session_token'),
      'user': {
        'type': 'tutor',
        'email': t.email
      }
    }
    post_api('login-as',payload,res => {
      if(res['exists']){
        localStorage.setItem('session_token', res['session_token'])
        window.location.reload()
      }else{

      }
    })
  };

  return (
    <React.Fragment>
        {t != null &&
      <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{t.email}</DialogTitle>
        <DialogContent>
            <Grid container>
                <Button onClick={() => openInNewTab(t.files)} color="primary" variant="contained" >
                    File Folder
                </Button>
                <Button onClick={() => openInNewTab("https://api.akadsph.com/tutors/"+t.id+"/")} color="primary" variant="contained" >
                    Edit Page
                </Button>
                <Button onClick={() => loginAs()} color="primary" variant="contained" >
                    Login As
                </Button>
            </Grid>
            <Box my={2}></Box>
            <Grid container>
            </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
              Close
          </Button>
        </DialogActions>
      </Dialog>
        }
    </React.Fragment>
  );
}