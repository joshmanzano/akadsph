import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  useTheme,
  makeStyles,
  Button,
} from '@material-ui/core';
import Table from 'src/components/Table.js'; 
import DeleteIcon from '@material-ui/icons/Delete';
import { useConfirm } from 'material-ui-confirm';
import ModalTutorProfile from './ModalTutorProfile';
import PageviewIcon from '@material-ui/icons/Pageview';
import Toast from 'light-toast';

const rows = [
  {
    name: 'Adam Crisostomo',
    subject: 'English'
  },
  // {
  //   name: 'Carl Castillo',
  //   subject: 'Math'
  // },
  // {
  //   name: 'Eedijk Roque',
  //   subject: 'Science'
  // },
  // {
  //   date: 'July 7',
  //   time: '4 PM',
  //   subject: 'LoL',
  //   tutor: {
  //     name: 'Adrienne Soliven'
  //   },
  // },
  // {
  //   date: 'July 7',
  //   time: '4 PM',
  //   subject: 'Filipino',
  //   tutor: {
  //     name: 'Adrienne Soliven'
  //   },
  // },
  // {
  //   date: 'July 7',
  //   time: '4 PM',
  //   subject: 'Filipino',
  //   tutor: {
  //     name: 'Adrienne Soliven'
  //   },
  // },
]

const headers = ["Name", "Subject", ""]

const useStyles = makeStyles(() => ({
  root: {}
}));

const FaveTutors = ({ className, favtutors, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();
  const confirm = useConfirm();
  const [openTutor, setOpenTutor] = React.useState(false);

  const buttonList = [<Button variant='outlined' color='primary' onClick={() => setOpenTutor(true)} startIcon={<PageviewIcon/>}>View</Button>,,
  <Button variant='outlined' color='primary' startIcon={<DeleteIcon/>}
  onClick={() =>{
    confirm({ title:'Remove Tutor' ,description: 'Are you sure you want to remove this tutor from favorites?' })
      .then(() => {
        Toast.success('Removed tutor from favorites!')
      })
      .catch(() => {

      });

  }}
  >Remove</Button>]

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader
        title="Favorite Tutors"
      />
      <Divider />
      <CardContent>
        <Table tableHeaders={headers} tableRows={rows} tableButtons={buttonList}/>
      </CardContent>
      <ModalTutorProfile open={openTutor} setOpen={setOpenTutor}/>
    </Card>
  );
};

FaveTutors.propTypes = {
  className: PropTypes.string
};

export default FaveTutors;
