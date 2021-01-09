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

const headers = ["Name", "School", "Course", "", ""]

const useStyles = makeStyles(() => ({
  root: {}
}));

const FaveTutors = ({ className, favtutors, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();
  const confirm = useConfirm();
  const [openTutor, setOpenTutor] = React.useState(false);

  const rows = []
  const tutors = []
  favtutors.map((t) => {
    // tutor.map((t)=>{
      tutors.push(t['tutor'])
    // })
    console.log(t)
  })

  tutors.map((t) => {
    // tutor.map((t)=>{
      rows.push({
        'name':t.first_name + ' ' + t.last_name,
        'school':t.school,
        'course': t.course,
      })
      console.log(t)
    // })
    
  })

  const buttonList = [<Button variant='outlined' color='primary' onClick={() => setOpenTutor(true)} startIcon={<PageviewIcon/>}>View</Button>,
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
