import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';

const useStyles = makeStyles(() => ({
  correctIcon: {
    color: 'green',
  },
  incorrectIcon: {
    color: 'red',
  },

}));

const Button = ({ type, onReview }) => {
  const classes = useStyles();

  if (type === 'Correct') {
    return <CheckCircleIcon className={classes.correctIcon} onClick={onReview} fontSize="large" />;
  }

  return <CancelIcon className={classes.incorrectIcon} onClick={onReview} fontSize="large" />;
};

export default Button;
