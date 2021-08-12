import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { post_api } from "src/Api";

export default function SimpleMenu(props) {
  const p = props.p;
  const [open, setOpen] = useState(false);

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const handleClick = (event) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const loginAs = () => {
    const payload = {
      session_token: localStorage.getItem("session_token"),
      user: {
        type: "parent",
        email: p.email,
      },
    };
    post_api("login-as", payload, (res) => {
      if (res["exists"]) {
        localStorage.setItem("session_token", res["session_token"]);
        window.location.reload();
      } else {
      }
    });
  };

  const link = () => {
    // _(<a target="_blank" href={p.files}>Link</a>)
  };

  return (
    <React.Fragment>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Open
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
