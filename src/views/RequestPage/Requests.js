import React, {Fragment, useState} from 'react';
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
import moment from 'moment';

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

const headers = ["Date Requested", "Subject", "Topic", "Duration", "Student", "Year Level",""]


const useStyles = makeStyles(() => ({
  root: {}
}));

const Requests = ({ className, pending, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();
  const requests = [];
  const rows = [];
  const [schedule, setSchedule] = useState(null)
  const [modalInfo, setModalInfo] = useState(null)
  // const [modalInfo, setModalInfo] = useState({
  //   'parent': '',
  //   'student': '',
  //   'subject': '',
  //   'topic': '',
  //   'duration': '',
  //   'specialRequest': '',
  //   'availables': [{
  //     'id': 0,
  //     'label': '',
  //     'date': '',
  //     'time': '' 
  //   }],
  //   'availableData': {
  //   }
  // })
  const [openRequest, setOpenRequest] = useState(false) 
  const [openDecline, setOpenDecline] = useState(false) 

  const removeRequest = (index) => {
    delete rows[index];
  }

  let index = 0;
  pending.forEach(request => {
    console.log(request)
    const id = request.request.id
    const availables = []
    const availableData = {}
    request.available_days.forEach(available => {
      const start_date = new Date(available.start_date_time)
      const end_date = new Date(available.end_date_time)
      const label = moment(start_date).format('MMM Do, h:mm a') + ' - ' + moment(end_date).format('h:mm a')
      const date = moment(start_date).format('MMM Do YYYY')
      const time = moment(start_date).format('h:mm a') + ' - ' + moment(end_date).format('h:mm a')
      console.log(start_date)
      console.log(date)
      availables.push({
        'id': available.id,
        'label': label,
      })
      availableData[available.id] = {
        'label': label,
        'start_date_time': start_date,
        'date': date,
        'time': time,
      }
    })
    console.log(availables)
    const time_created = request.request.time_created
    const row = {
      'date': moment(new Date(request.request.time_created)).format('MMMM Do YYYY'),
      'subject': request.subject.subject_field,
      'topic': request.request.topics,
      'duration': request.request.time + ' hours',
      'student': request.child.first_name,
      'level': request.child.year_level, 
      'viewButton': <Button variant='outlined' color='primary' onClick={() => {
        setModalInfo({
          'id': id,
          'parent': request.parent.first_name,
          'student': request.child.first_name,
          'subject': request.subject.subject_field,
          'topic': request.request.topics,
          'duration': request.request.time + ' hours',
          'specialRequest': request.request.special_request,
          'availables': availables,
          'availableData': availableData,
          'index': index,
        })
        setSchedule(availables[0].id)
        setOpenRequest(true)
      }
      } startIcon={<PageviewIcon/>}>View</Button>,
      'declineButton': <Button variant='outlined' color='secondary' startIcon={<CancelIcon/>} onClick={() =>{
        confirm({ title:'Decline Request' ,description: 'Are you sure you want to decline this request?' })
          .then(() => {
            // setModalDecline(true);
          })
          .catch(() => {

          });

      }}
      >Decline</Button>
    }
    requests.push({
      'id': id,
      'row': row,
    })
    rows.push(row)
    index += 1
  })
  console.log(requests)

  const confirm = useConfirm();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
          <Table tableHeaders={headers} tableRows={rows}/>
      </CardContent>
      {modalInfo != null &&
        <ModalRequest open={openRequest} setSchedule={setSchedule} schedule={schedule} modalInfo={modalInfo} removeRequest={removeRequest} setOpen={setOpenRequest} /> 
      }
      {/* <FaveTutorDecline open={openDecline} setOpen={setModalDecline}/>  */}
    </Card>
  );
};

Requests.propTypes = {
  className: PropTypes.string
};

export default Requests;
