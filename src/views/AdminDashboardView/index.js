import React, { useState, Fragment } from "react";
import {
  Container,
  Grid,
  Box,
  makeStyles,
  Typography,
  Button,
  Menu,
  MenuItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Switch,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Page from "src/components/Page";
import Metrics from "./Metrics";
import InfoTable from "./InfoTable";
import InfoBox from "./InfoBox";
import Chat from "./Chat";
import "gridjs/dist/theme/mermaid.css";

import { _ } from "gridjs-react";

import Calendar from "./Calendar";
import moment from "moment";

import ModalAddParent from "./ModalAddParent";
import ModalAddTutor from "./ModalAddTutor";
import ParentModal from "./ParentModal";
import TutorModal from "./TutorModal";

import ActionMenu from "./ActionMenu.js";
import { useConfirm } from "material-ui-confirm";
import { post_api, delete_api } from "src/Api";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import { ConsoleSqlOutlined } from "@ant-design/icons";

import { CSVLink, CSVDownload } from "react-csv";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const Dashboard = (props) => {
  const confirm = useConfirm();
  const classes = useStyles();
  const data = props.data;

  const subjects = {};
  data.subjects.forEach((s) => {
    subjects[s.id] = s.subject_field;
  });

  const availabledays = {};
  data.requests.availabledays.forEach((a) => {
    if (!(a.request in availabledays)) {
      availabledays[a.request] = [];
    }
    availabledays[a.request].push(a.start_date_time);
  });

  const accepted_requests = {};
  data.requests.accepted.forEach((r) => {
    accepted_requests[r.id] = r;
  });
  data.requests.finished.forEach((r) => {
    accepted_requests[r.id] = r;
  });
  data.requests.cancelled.forEach((r) => {
    accepted_requests[r.id] = r;
  });

  let totalParents = 0;
  let totalTutors = 0;
  let activeParents = 0;
  let activeTutors = 0;

  const [currentParent, setParent] = useState(null);
  const [parentModal, setParentModal] = useState(false);

  const [currentTutor, setTutor] = useState(null);
  const [tutorModal, setTutorModal] = useState(false);

  const openParentModal = (p) => {
    setParent(p);
    setParentModal(true);
  };

  const openTutorModal = (t) => {
    setTutor(t);
    setTutorModal(true);
  };

  const parents = {};
  const allParentRows = [];
  const refCodeRows = [];
  const parentCSVdata = [
    [
      "ID",
      "Picture",
      "First Name",
      "Last Name",
      "Email",
      "Phone",
      "Credits",
      "Ref. Code",
      "Ref. Method",
    ],
  ];
  data.parents.forEach((p) => {
    if (p.fake_user == false && p.status == true) {
      totalParents += 1;
    }
    if (p.picture.trim() != "" && p.fake_user == false) {
      activeParents += 1;
    }
    parents[p.id] = p;
    if (p.status == true) {
      const ref = p.referrer_code;
      const ref_method = p.referrer_method;
      allParentRows.push([
        p.id,
        _(
          <img
            width="40"
            src={p.picture.trim() == "" ? "./img/anon.jpeg" : p.picture}
          />
        ),
        p.first_name,
        p.last_name,
        p.email,
        p.phone,
        p.credits,
        ref,
        ref_method,
        _(
          <Fragment>
            <Button
              variant="contained"
              color="primary"
              onClick={() => openParentModal(p)}
            >
              Open
            </Button>
          </Fragment>
        ),
      ]);
      parentCSVdata.push([
        p.id,
        p.picture.trim(),
        p.first_name,
        p.last_name,
        p.email,
        p.phone,
        p.credits,
        ref,
        ref_method,
      ]);
    }
  });

  data.parents.forEach((p) => {
    parents[p.id] = p;
    if (p.status == true) {
      const ref = p.referrer_code;
      const ref_method = p.referrer_method;
      if (ref != null && ref.trim() != "") {
        refCodeRows.push([
          p.id,
          _(
            <img
              width="40"
              src={p.picture.trim() == "" ? "./img/anon.jpeg" : p.picture}
            />
          ),
          p.first_name,
          p.last_name,
          p.email,
          p.phone,
          p.credits,
          ref,
          ref_method,
          _(
            <Fragment>
              <Button
                variant="contained"
                color="primary"
                onClick={() => openParentModal(p)}
              >
                Open
              </Button>
            </Fragment>
          ),
        ]);
      }
    }
  });

  const [parentRows, updateParentRows] = useState(allParentRows);

  const tutors = {};
  const tutorRows = [];
  const tutorSelection = [];
  data.tutors.forEach((t) => {
    totalTutors += 1;
    if (t.picture.trim() != "") {
      activeTutors += 1;
    }
    tutors[t.id] = t;
    tutorSelection.push({
      id: t.id,
      first_name: t.first_name,
      last_name: t.last_name,
    });
    tutorRows.push([
      t.id,
      _(
        <img
          width="40"
          src={t.picture.trim() == "" ? "./img/anon.jpeg" : t.picture}
        />
      ),
      t.first_name,
      t.last_name,
      t.email,
      t.phone,
      _(
        <Fragment>
          <Button
            variant="contained"
            color="primary"
            onClick={() => openTutorModal(t)}
          >
            Open
          </Button>
        </Fragment>
      ),
    ]);
  });

  const stats = data.business_stats;

  const metricRows = [];
  metricRows.push([
    moment().format("MMMM"),
    stats.BOUGHT,
    stats.GMV,
    stats.NET_REVENUE,
    stats.NET_REVENUE_CMGR,
    stats.USED,
    stats.USER_RETENTION,
  ]);

  const userRows = [];
  userRows.push(
    ["Parent", totalParents, activeParents],
    ["Tutor", totalTutors, activeTutors]
  );

  const transactionRows = [];
  data.payments.forEach((p) => {
    transactionRows.push([
      moment(p.date).calendar(),
      "Php " + String(p.amount / 100),
      p.credits,
      p.parent,
      _(
        <Button variant="contained" color="primary">
          Refund
        </Button>
      ),
    ]);
  });

  const pendingRows = [];
  data.requests.pending.forEach((r) => {
    // console.log(r.id)
    pendingRows.push([
      r.id,
      moment(r.time_created).format("MMMM Do YYYY, h:mm:ss a"),
      subjects[r.subject],
      parents[r.parent].first_name,
      r.fav_tutor ? tutors[r.fav_tutor].first_name : 'None',
    ]);
  });

  const activeSessionRows = [];
  data.active_sessions.forEach((s) => {
    const request = accepted_requests[s.request];
    activeSessionRows.push([
      s.id,
      s.active,
      moment(s.start_date_time).calendar(),
      subjects[request.subject],
      parents[request.parent].first_name,
      tutors[s.tutor].first_name,
      _(
        <Box align="center">
          <a href={s.join_zoom_link}>Join Zoom</a>
        </Box>
      ),
      _(
        <Box align="center">
          <a href={s.start_zoom_link}>Start Zoom</a>
        </Box>
      ),
      _(
        <Box align="center">
          <a href={s.meet_link}>Join Jitsi</a>
        </Box>
      ),
    ]);
  });

  const inactiveSessionRows = [];
  data.inactive_sessions.forEach((s) => {
    const request = accepted_requests[s.request];
    inactiveSessionRows.push([
      s.id,
      s.active,
      moment(s.start_date_time).calendar(),
      subjects[request.subject],
      parents[request.parent].first_name,
      tutors[s.tutor].first_name,
      _(
        <Box align="center">
          <a href={s.join_zoom_link}>Join Zoom</a>
        </Box>
      ),
      _(
        <Box align="center">
          <a href={s.start_zoom_link}>Start Zoom</a>
        </Box>
      ),
    ]);
  });

  const [sessionRows, updateSessionRows] = useState(activeSessionRows);
  const [showInactive, updateShowInactive] = useState(false);
  const [showOnlyRef, updateShowRef] = useState(false);

  const [chat, openChat] = useState(false);
  const [chat_name, changeChatName] = useState("");
  const [user_id, changeUser] = useState("");
  const [conversation_id, changeConversation] = useState("");
  const [picture, changePicture] = useState("");
  const [addParent, setAddParent] = useState(false);
  const [addTutor, setAddTutor] = useState(false);

  const handleClose = () => {
    openChat(false);
  };

  const handleOpen = (conversation) => {
    changeChatName(conversation.parent.username);
    changeConversation(conversation.conversation.id);
    changeUser(conversation.parent.id);
    changePicture(conversation.parent.picture);
    openChat(true);
  };

  const handleParentTutorClose = () => {
    openChat(false);
  };

  const handleParentTutorOpen = (conversation) => {
    changeChatName(conversation.parent.username);
    changeConversation(conversation.conversation.id);
    changeUser(conversation.parent.id);
    changePicture(conversation.parent.picture);
    openChat(true);
  };

  const parentChatRows = [];
  data.parent_conversations.forEach((pc) => {
    parentChatRows.push([
      pc.conversation.id,
      pc.parent.email,
      pc.parent.first_name,
      pc.parent.last_name,
      _(
        <Fragment>
          <Button
            onClick={() => {
              handleOpen(pc);
            }}
            variant="contained"
            color="primary"
          >
            Open
          </Button>
        </Fragment>
      ),
    ]);
  });

  const tutorParentChatRows = [];
  data.conversations.forEach((c) => {
    tutorParentChatRows.push([
      c.id,
      parents[c.parent].first_name,
      tutors[c.tutor].first_name,
      c.session,
      c.active ? "True" : "False",
      _(
        <Fragment>
          <Button onClick={() => {}} variant="contained" color="primary">
            Open
          </Button>
        </Fragment>
      ),
    ]);
  });

  const showInactiveSessions = () => {
    if (showInactive) {
      updateSessionRows(activeSessionRows);
    } else {
      const newSessionRows = [];
      inactiveSessionRows.forEach((row) => {
        newSessionRows.push(row);
      });
      activeSessionRows.forEach((row) => {
        newSessionRows.unshift(row);
      });
      updateSessionRows(newSessionRows);
    }
    updateShowInactive(!showInactive);
  };

  const showOnlyRefCode = () => {
    if (showOnlyRef) {
      updateParentRows(allParentRows);
    } else {
      updateParentRows(refCodeRows);
    }
    updateShowRef(!showOnlyRef);
  };

  const sessionButtons = (
    <Fragment>
      <Switch onClick={showInactiveSessions} color="primary" />
    </Fragment>
  );

  const deleteSubject = (id, subject_field) => {
    confirm({
      title: "Delete Subject",
      description:
        'Are you sure you want to delete the subject "' + subject_field + '"?',
      confirmationText: "Confirm",
    })
      .then(() => {
        delete_api("subject", id, (res) => {
          window.location.reload();
        });
      })
      .catch(() => {});
  };

  const [toAddSubject, changeSubject] = useState("");

  const subjectButtons = (
    <Fragment>
      <TextField
        value={toAddSubject}
        onChange={(e) => {
          changeSubject(e.target.value);
        }}
        variant="outlined"
      />
      <Button
        onClick={() => {
          post_api(
            "subject",
            {
              subject_field: toAddSubject.trim(),
            },
            (res) => {
              window.location.reload();
            }
          );
        }}
        variant="contained"
        color="primary"
      >
        Add Subject
      </Button>
    </Fragment>
  );

  const subjectRows = [];
  const subject_fields = [];
  data.subjects.forEach((subject) => {
    subject_fields.push(subject.subject_field);
    subjectRows.push([
      subject.id,
      subject.subject_field,
      _(
        <Fragment>
          <Button
            onClick={() => {
              deleteSubject(subject.id, subject.subject_field);
            }}
            variant="contained"
            color="primary"
          >
            Remove
          </Button>
        </Fragment>
      ),
    ]);
  });

  const logRows = [];
  data.logs.forEach((log) => {
    logRows.push([
      log.google_data.email,
      log.type,
      moment(log.time).fromNow(),
      moment(log.time).format("MMM do YY h:mm a"),
    ]);
  });

  const tutorButtons = (
    <Fragment>
      <Button
        onClick={() => {
          setAddTutor(true);
        }}
        variant="contained"
        color="primary"
      >
        Add Tutor
      </Button>
    </Fragment>
  );

  const parentFilters = (
    <Fragment>
      <FormGroup>
        <CSVLink data={parentCSVdata} filename={"akads_parents.csv"}>
          Dowload CSV data
        </CSVLink>
        <FormControlLabel
          control={<Switch onClick={showOnlyRefCode} color="primary" />}
          label="Show Only Parents with Ref Code"
        />
      </FormGroup>
    </Fragment>
  );

  return (
    <div>
      {chat ? (
        <Chat
          openChat={openChat}
          chat_name={chat_name}
          picture={picture}
          id={conversation_id}
          parent_id={user_id}
        />
      ) : (
        <Page className={classes.root} title="Overview">
          <Container maxWidth={false}>
            <ModalAddParent
              register={props.register}
              open={addParent}
              setOpen={setAddParent}
            />
            <ModalAddTutor
              subjects={subject_fields}
              open={addTutor}
              setOpen={setAddTutor}
            />
            <ParentModal
              open={parentModal}
              tutorSelection={tutorSelection}
              setOpen={setParentModal}
              p={currentParent}
            />
            <TutorModal
              open={tutorModal}
              setOpen={setTutorModal}
              t={currentTutor}
            />
            <Box mb={2}>
              <Grid container spacing={3}>
                <Grid item lg={1} md={1} xl={1} xs={12}>
                  <img width="100" src="../static/images/oli-happy.png"></img>
                </Grid>
                <Grid item lg={11} md={11} xl={11} xs={12}>
                  <Box ml={2} mt={2}>
                    <Grid container direction="column">
                      <Grid item>
                        <Typography id="selector1" variant="h1">
                          Hello there Boss!
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Grid container alignItems="center" spacing={2}>
              <Grid item lg={12} md={12} xl={12} xs={12}>
                <InfoBox
                  name={"Business Metrics"}
                  rows={metricRows}
                  headers={[
                    "MONTH",
                    "BOUGHT",
                    "GMV",
                    "NET_REVENUE",
                    "NET_REVENUE_CMGR",
                    "USED",
                    "USER_RETENTION",
                  ]}
                />
              </Grid>
              <Grid item lg={12} md={12} xl={12} xs={12}>
                <InfoBox
                  name={"User Metrics"}
                  rows={userRows}
                  headers={["Type", "Total Users", "Active Users"]}
                />
              </Grid>
              <Grid item lg={12} md={12} xl={12} xs={12}>
                <InfoBox
                  name={"Logs"}
                  rows={logRows}
                  headers={["Email", "User Type", "Time", "Date"]}
                />
              </Grid>
              {/* <Grid item lg={12} md={12} xl={12} xs={12}>
                <InfoBox
                  name={"Tutor-Parent Chats"}
                  rows={tutorParentChatRows}
                  headers={[
                    "ID",
                    "Parent",
                    "Tutor",
                    "Session ID",
                    "Active",
                    "",
                  ]}
                />
              </Grid> */}
              {/* <Grid item lg={12} md={12} xl={12} xs={12}>
                <InfoBox
                  name={"Admin-Parent Chats"}
                  rows={parentChatRows}
                  headers={["ID", "Parent", "First Name", "Last Name", ""]}
                />
              </Grid> */}
              <Grid item lg={12} md={12} xl={12} xs={12}>
                <InfoBox
                  name={"Sessions"}
                  buttons={sessionButtons}
                  rows={sessionRows}
                  headers={[
                    "ID",
                    "Active?",
                    "Time Created",
                    "Subject",
                    "Parent",
                    "Tutor",
                    "",
                    "",
                    "",
                  ]}
                />
              </Grid>
              <Grid item lg={12} md={12} xl={12} xs={12}>
                <InfoBox
                  name={"Requests"}
                  rows={pendingRows}
                  headers={[
                    "ID",
                    "Time Created",
                    "Subject",
                    "Parent",
                    "Favorite Tutor",
                    "Timeslots",
                  ]}
                />
              </Grid>
              {/* <Grid item lg={12} md={12} xl={12} xs={12}>
                <InfoBox name={'Sessions'} rows={sessionRows} headers={['ID','Start Date','End Date','Join Link','Start Link']}/>
              </Grid> */}
              <Grid item lg={12} md={12} xl={12} xs={12}>
                <InfoBox
                  name={"Parents"}
                  rows={parentRows}
                  buttons={parentFilters}
                  headers={[
                    "ID",
                    "Picture",
                    "First Name",
                    "Last Name",
                    "Email",
                    "Phone",
                    "Credits",
                    "Ref. Code",
                    "Ref. Method",
                    "Actions",
                  ]}
                />
              </Grid>
              <Grid item lg={12} md={12} xl={12} xs={12}>
                <InfoBox
                  name={"Tutors"}
                  buttons={tutorButtons}
                  rows={tutorRows}
                  headers={[
                    "ID",
                    "Picture",
                    "First Name",
                    "Last Name",
                    "Email",
                    "Phone",
                    "Actions",
                  ]}
                />
              </Grid>
              <Grid item lg={12} md={12} xl={12} xs={12}>
                <InfoBox
                  name={"Transactions"}
                  rows={transactionRows}
                  headers={["Date", "Amount", "Credits", "Parent", "Actions"]}
                />
              </Grid>
              <Grid item lg={12} md={12} xl={12} xs={12}>
                <InfoBox
                  name={"Subjects"}
                  buttons={subjectButtons}
                  rows={subjectRows}
                  headers={["ID", "Subject Field", ""]}
                />
              </Grid>
            </Grid>
          </Container>
        </Page>
      )}
    </div>
  );
};

export default Dashboard;
