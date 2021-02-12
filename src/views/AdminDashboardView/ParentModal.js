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


export default function ParentModal(props) {
  const p = props.p
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
        'type': 'parent',
        'email': p.email
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

  const [value, setValue] = React.useState(1);

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 10) {
      setValue(10);
    }
  };

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const addCredits = () => {
    confirm({
        title: "Confirm Gift Credits",
        description: "Are you sure you want to gift " + String(value) + " credits to " + p.email + "?",
        confirmationText: 'Confirm',
    }).then(() => {

    })
    .catch(() => {
    })

  }

  return (
    <React.Fragment>
        {p != null &&
      <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{p.email}</DialogTitle>
        <DialogContent>
            <Grid container>
                <Button onClick={() => openInNewTab(p.files)} color="primary" variant="contained" >
                    File Folder
                </Button>
                <Button onClick={() => openInNewTab("https://api.akadsph.com/parents/"+p.id+"/")} color="primary" variant="contained" >
                    Edit Page
                </Button>
            </Grid>
            <Box my={2}></Box>
            <Grid container>
            <Typography id="input-slider" gutterBottom>
                Gift Credits
            </Typography>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs>
                <Slider
                    value={typeof value === 'number' ? value : 1}
                    onChange={handleSliderChange}
                    step={1}
                    min={1}
                    max={10}
                />
                </Grid>
                <Grid item>
                <Input
                    value={value}
                    margin="dense"
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    inputProps={{
                    step: 1,
                    min: 1,
                    max: 10,
                    type: 'number',
                    }}
                />
                </Grid>
                <Grid item>
                    <Button onClick={addCredits} color="primary" variant="contained" >
                        Gift
                    </Button>
                </Grid>
            </Grid>
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