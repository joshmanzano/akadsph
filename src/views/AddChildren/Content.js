import React , {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  makeStyles,
  Typography,
  Grid,
  Box,
  Container
} from '@material-ui/core';
import TableDetails from './TableDetails';
import AddChild from 'src/components/AddChild';
import {post_api, get_user} from 'src/Api';

const useStyles = makeStyles((theme) => ({
  root: {},
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const Content = ({ className, data, setData, ...rest }) => {
  const classes = useStyles();

  const submitChild = () => {
    get_user(user => {
      console.log(user)
      post_api('add-children', {
        children: [child],
        parent: user.id
      },res => {
        console.log(res)
        if(res['return_status'] == 'success'){
          window.location.reload()
        }else{
          console.log('fail')
        }
      })
    })
  }

  const [child, setChild] = useState({
    first_name: '',
    last_name: '',
    age: '',
    year_level: 'Grade 1',
    school: '',
    email: '',
  });

  return (
    <React.Fragment>

      <Box mt={3} mb={6} mx={3}>
        <Grid container spacing={3}>
            <Grid
              item
              lg={12}
              md={12}
              xl={12}
              xs={12}
              align='center'
            >
              <img width='100' src='../static/images/oli-smirk.png'/>
            </Grid>
            <Grid
              item
              lg={12}
              md={12}
              xl={12}
              xs={12}
              align='center'
            >
              <Container maxWidth="md">
                <Typography variant="h2" align='center'>
                  Before we can book a tutor, we'd like to know more about your child so we can match the best tutor!
                </Typography>
              </Container>
            </Grid>
            <Grid
              item
              lg={12}
              md={12}
              xl={12}
              xs={12}
              align='center'
            >
              <Container maxWidth="md">
                <AddChild setChild={setChild} {...child}/>
              </Container>
            </Grid>
            <Grid
              item
              lg={12}
              md={12}
              xl={12}
              xs={12}
              align='center'
            >
              <Container maxWidth="md">
                <Button onClick={submitChild} variant="contained" color="primary">Add Child</Button>
              </Container>
            </Grid>
          
          </Grid>
      </Box>
    </React.Fragment>
  );
};

Content.propTypes = {
  className: PropTypes.string
};

export default Content;
