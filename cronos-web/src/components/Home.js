import React, { useEffect, useState } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({

    cardHeader: {
      backgroundColor: theme.palette.grey[200],
    },
    cardPricing: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
      marginBottom: theme.spacing(2),
    }
}));

const tiers = [
    {
      title: 'Free',
      price: '0',
      description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support', '10 users included', '2 GB of storage'],
      buttonText: 'Sign up for free',
      buttonVariant: 'outlined',
    },
    {
      title: 'Pro',
      subheader: 'Most popular',
      price: '15',
      description: [
        '20 users included',
        '10 GB of storage',
        'Help center access',
        'Priority email support',
      ],
      buttonText: 'Get started',
      buttonVariant: 'contained',
    },
    {
      title: 'Enterprise',
      price: '30',
      description: [
        '50 users included',
        '30 GB of storage',
        'Help center access',
        'Phone & email support',
      ],
      buttonText: 'Contact us',
      buttonVariant: 'outlined',
    },{
        title: 'Enterprise',
        price: '30',
        description: [
          '50 users included',
          '30 GB of storage',
          'Help center access',
          'Phone & email support',
        ],
        buttonText: 'Contact us',
        buttonVariant: 'outlined',
      },{
        title: 'Enterprise',
        price: '30',
        description: [
          '50 users included',
          '30 GB of storage',
          'Help center access',
          'Phone & email support',
        ],
        buttonText: 'Contact us',
        buttonVariant: 'outlined',
      },
  ];


const Home = () => {
    const classes = useStyles();
    // const [entries, setEntries] = useState([]);

    // useEffect(async () => {
    //     async function fetchPosts(params) {
    //         const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
    //         console.log(posts)
    //     } project 5d7ea3ea2304990a9fa37832 user 5d7e9d3f953000083d60b64a

    //    fetchPosts()
    // }, []);

    return (
        <div>
            <Grid container spacing={5} alignItems="flex-start">
            {tiers.map(tier => (
                // Enterprise card is full width at sm breakpoint
                <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
                <Card>
                    <CardHeader
                    title={tier.title}
                    subheader={tier.subheader}
                    titleTypographyProps={{ align: 'center' }}
                    subheaderTypographyProps={{ align: 'center' }}
                    className={classes.cardHeader}
                    />
                    <CardContent>
                    
                        <List>
                        {tier.description.map(line => (
                              <ListItem>
                                <ListItemText
                                  primary={line}
                                  secondary={'Secondary text' }
                                />
                                <ListItemSecondaryAction>
                                  <IconButton edge="end" aria-label="delete">
                                    <DeleteIcon />
                                  </IconButton>
                                </ListItemSecondaryAction>
                              </ListItem>
                        ))}
                          </List>
                    
                    </CardContent>
                </Card>
                </Grid>
            ))}
            </Grid>
        </div>
    )
}

export default Home
