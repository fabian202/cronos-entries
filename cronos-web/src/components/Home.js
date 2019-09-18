import React, {useState, useEffect} from 'react'
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
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import { useEntries } from '../hooks/useEntries'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({

    cardHeader: {
      backgroundColor: theme.palette.grey[200],
    },
    cardPricing: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
      marginBottom: theme.spacing(2),
    },
    billable: {
      color: 'green',
      fontWeight: 'bold'
    }
}));

const Home = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [entryId, setEntryId] = useState(null)
    const { entries, onDeleteEntry } = useEntries()

    useEffect(() => {
      if(entryId) setOpen(true)
    }, [entryId])

    const handleClose = () => {
      setEntryId(null);
      setOpen(false);
    }

    const handleDelete = (_id) => {
      onDeleteEntry(_id)
      handleClose()
    }

    return (
        <div>
            <Grid container spacing={5} alignItems="flex-start">
            {entries.map(project => (
                // Enterprise card is full width at sm breakpoint
                <Grid item key={project.key} xs={12}  md={4}>
                <Card>
                    <CardHeader
                    title={project.key}
                    subheader={`${project.total} hours`}
                    titleTypographyProps={{ align: 'center' }}
                    subheaderTypographyProps={{ align: 'center' }}
                    className={classes.cardHeader}
                    />
                    <CardContent>
                        <List>
                        {project.data.map(entry => (
                              <ListItem key={entry._id}>
                                <ListItemText
                                  primary={entry.comment}
                                  secondary={
                                    <React.Fragment>
                                      <Typography
                                        component="span"
                                        variant="body2"
                                        className={entry.billable ? classes.billable : null}
                                        color="textSecondary"
                                      >
                                        $ 
                                      </Typography>
                                      <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.inline}
                                        color="textPrimary"
                                      >
                                        {` ${entry.hours} hours`}
                                      </Typography>
                                    </React.Fragment>
                                  }
                                />
                                <ListItemSecondaryAction>
                                  <IconButton edge="end" aria-label="delete" onClick={() => setEntryId(entry._id)}>
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

            <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Welcome! you have signed up successfully
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleDelete(entryId)} color="primary" autoFocus>
            Ok
          </Button>

          <Button onClick={handleClose} color="primary" autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
        </div>
    )
}

export default Home
