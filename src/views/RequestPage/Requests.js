import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  useTheme,
  makeStyles,
  Button,
} from '@material-ui/core';
import Table from 'src/components/Table.js';
import ModalRequest from './ModalRequest';
import FaveTutorDecline from './FaveTutorDecline';
import CancelIcon from '@material-ui/icons/Cancel';
import PageviewIcon from '@material-ui/icons/Pageview';
import { useConfirm } from 'material-ui-confirm';

const rows = [
  {
    type: 'Single',
    date: 'July 7',
    time: '4 PM',
    subject: 'Filipino',
    topic: 'Mga Tula',
    duration:'1 hour',
    student: 'Grade 10',
  },
  {
    type: 'Bundle',
    date: 'July 7',
    time: '4 PM',
    subject: 'Math',
    topic: 'Algebra',
    duration:'1 hour',
    student: 'Grade 9',
  },
  
]

const headers = ["Subject", "Topic", "Duration", "Student", ""]


const useStyles = makeStyles(() => ({
  root: {}
}));

const Requests = ({ className, pending, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();
  const rows = []
  pending.forEach(request => {
    console.log(request)
    rows.push({
      'subject': request.subject.subject_field,
      'topic': request.request.topics,
      'duration': request.request.time + ' hours',
      'student': request.child.first_name + ' (' + request.child.year_level + ')'
    })
  })

  const [openRequest, setOpenRequest] = React.useState(false);
  const [openDecline, setModalDecline] = React.useState(false);
  const confirm = useConfirm();

  const buttonList = [<Button variant='outlined' color='primary' onClick={() => setOpenRequest(true)} startIcon={<PageviewIcon/>}>View</Button>,
<Button variant='outlined' color='secondary' startIcon={<CancelIcon/>} onClick={() =>{
    confirm({ title:'Decline Request' ,description: 'Are you sure you want to decline this request?' })
      .then(() => {
        setModalDecline(true);
      })
      .catch(() => {

      });

  }}
  >Decline</Button>,
]

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      {/* <CardHeader
        title="Requests"
      />
      <Divider /> */}
      <CardContent>
          <Table tableHeaders={headers} tableRows={rows} tableButtons={buttonList}/>
      </CardContent>
      <ModalRequest open={openRequest} rows={rows} setOpen={setOpenRequest} /*setOpenConf={setOpenConf}*//> 
      <FaveTutorDecline open={openDecline} setOpen={setModalDecline}/>
    </Card>
  );
};

Requests.propTypes = {
  className: PropTypes.string
};

export default Requests;
