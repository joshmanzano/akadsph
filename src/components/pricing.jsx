import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    // backgroundColor:
    //   '#ebebeb',
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const tiers = [
  {
    title: 'FREE TRIAL',
    price: '0',
    oldPrice: 'FREE',
    description: ['*First-time Users Only', 'Akads Verified Tutor', 'Zoom Video Chat', '1 Hour Session'],
    buttonText: 'Sign Up for Free',
    buttonVariant: 'outlined',
  },
  // {
  //   title: '1 HOUR',
  //   price: '500',
  //   oldPrice: '549',
  //   description: [
  //     'Akads Verified Tutor',
  //     'Any Mode Of Payment',
  //     'Zoom Video Chat',
  //     '1 Hour Worth Of Credit',
  //   ],
  //   buttonText: 'Book A Session',
  //   buttonVariant: 'outlined',
  // },
  {
    title: '8 HOURS',
    price: '4000',
    oldPrice: '4990',
    description: [
      'Akads Verified Tutor',
      'Any Mode Of Payment',
      'Zoom Video Chat',
      '8 Hours Worth Of Credit',
    ],
    buttonText: 'Book 8 Sessions',
    buttonVariant: 'outlined',
  },
  {
    title: '12 HOURS',
    price: '5200',
    oldPrice: '7185',
    description: [
      'Akads Verified Tutor',
      'Any Mode Of Payment',
      'Zoom Video Chat',
      '12 Hours Worth Of Credit',
    ],
    buttonText: 'Book 12 Sessions',
    buttonVariant: 'outlined',
  },
];

export default function Pricing() {
  const classes = useStyles();

  return (
      <div id="pricing">
        <Container>
          <Box>
            <div className="text-center">
              <h2>Pricing</h2>
            </div>
            <div className="row">
      <Box mt={4}>

      <Container maxWidth="lg" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ variant:'h3', align: 'center', className: 'priceHeader' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Grid>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      ₱{tier.price}
                    </Typography>
                    {tier.oldPrice && tier.oldPrice != "FREE" &&
                    <Typography align="center" component="h2" variant="h5" className='oldPrice'>
                      ₱{tier.oldPrice}
                    </Typography>
                    }
                    {tier.oldPrice == "FREE" &&
                    <Typography align="center" component="h2" variant="h5" style={{color: "#c4c4c4"}}>
                      {tier.oldPrice}
                    </Typography>
                    }
                    </Grid>
                    {/* <Typography variant="h6" color="textSecondary">
                      /hr
                    </Typography> */}
                  </div>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant} color="primary" href='/login'>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      </Box>

            </div>
          </Box>
        </Container>
      </div>
  );
}