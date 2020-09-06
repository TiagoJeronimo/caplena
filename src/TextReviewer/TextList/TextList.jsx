import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    margin: '50px',
  },
  correctIcon: {
    color: 'green',
  },
  incorrectIcon: {
    color: 'red',
  },

}));

const TextList = ({ reviewedTexts }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Divider />
      <List component="nav" aria-label="main mailbox folders">
        {reviewedTexts.map(({ text, sentiment, rating }) => (
          <ListItem button>
            <ListItemIcon>
              {rating === 'Correct' ? <CheckCircleIcon className={classes.correctIcon} /> : <CancelIcon className={classes.incorrectIcon} />}
            </ListItemIcon>
            <ListItemText primary={text} secondary={sentiment.toUpperCase()} />
          </ListItem>
        ))}

      </List>
    </div>
  );
};

export default TextList;
